import {
    Mesh,
    MeshBasicMaterial,
    Object3D,
    SphereGeometry,
} from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

import { GLTFLoader } from './gltfloader.js';

import {
    MotionController,
    fetchProfile,
    Constants as MotionControllerConstants
} from 'https://cdn.jsdelivr.net/npm/@webxr-input-profiles/motion-controllers@1.0.0/dist/motion-controllers.module.js';

class XRControllerModel extends Object3D {

    constructor() {
        super();
        this.motionController = null;
        this.envMap = null;
    }

    setEnvironmentMap(envMap) {
        if (this.envMap === envMap) return;
        this.envMap = envMap;

        this.traverse(child => {
            if (child.isMesh) {
                child.material.envMap = this.envMap;
                child.material.needsUpdate = true;
            }
        });
        return this;
    }

    updateMatrixWorld(force) {
        super.updateMatrixWorld(force);
        if (!this.motionController) return;

        this.motionController.updateFromGamepad?.();

        if (this.motionController?.components) {
            Object.values(this.motionController.components).forEach(component => {
                Object.values(component.visualResponses || {}).forEach(visual => {
                    const { valueNode, minNode, maxNode, value, valueNodeProperty } = visual;
                    if (!valueNode) return;

                    if (valueNodeProperty === MotionControllerConstants.VisualResponseProperty.VISIBILITY) {
                        valueNode.visible = value;
                    } else if (valueNodeProperty === MotionControllerConstants.VisualResponseProperty.TRANSFORM) {
                        valueNode.quaternion.slerpQuaternions(minNode.quaternion, maxNode.quaternion, value);
                        valueNode.position.lerpVectors(minNode.position, maxNode.position, value);
                    }
                });
            });
        }
    }
}

function findNodes(motionController, scene) {
    // Durchsucht die Szene nach relevanten Knoten für Animationen
    Object.values(motionController.components).forEach(component => {
        Object.values(component.visualResponses || {}).forEach(visual => {
            const { valueNodeName, minNodeName, maxNodeName, valueNodeProperty } = visual;

            if (valueNodeProperty === MotionControllerConstants.VisualResponseProperty.TRANSFORM) {
                visual.minNode = scene.getObjectByName(minNodeName);
                visual.maxNode = scene.getObjectByName(maxNodeName);

                if (!visual.minNode) console.warn(`MinNode ${minNodeName} not found`);
                if (!visual.maxNode) console.warn(`MaxNode ${maxNodeName} not found`);
            }

            visual.valueNode = scene.getObjectByName(valueNodeName);
            if (!visual.valueNode) console.warn(`ValueNode ${valueNodeName} not found`);
        });

        if (component.type === MotionControllerConstants.ComponentType.TOUCHPAD && component.touchPointNodeName) {
            component.touchPointNode = scene.getObjectByName(component.touchPointNodeName);
            if (component.touchPointNode) {
                const sphere = new Mesh(new SphereGeometry(0.001), new MeshBasicMaterial({ color: 0x0000FF }));
                component.touchPointNode.add(sphere);
            }
        }
    });
}

function addAssetSceneToControllerModel(controllerModel, scene) {
    findNodes(controllerModel.motionController, scene);

    if (controllerModel.envMap) {
        scene.traverse(child => {
            if (child.isMesh) {
                child.material.envMap = controllerModel.envMap;
                child.material.needsUpdate = true;
            }
        });
    }

    controllerModel.add(scene);
}

class XRControllerModelFactory {

    constructor(gltfLoader = null) {
        this.gltfLoader = gltfLoader || new GLTFLoader();
        this.path = './public/assets'; // Pfad zu local heruntergeladenen Assets
        this._assetCache = {};
    }

    createControllerModel(controller) {
        const controllerModel = new XRControllerModel();
        let scene = null;

        controller.addEventListener('connected', (event) => {
            const xrInputSource = event.data;
            if (xrInputSource.targetRayMode !== 'tracked-pointer' || !xrInputSource.gamepad) return;

            // fetchProfile lädt die lokalen profile.json + Assets
            fetchProfile(xrInputSource, `${this.path}/meta-quest-touch-plus`, 'meta-quest-touch-plus')
                .then(({ profile, assetPath }) => {
                    controllerModel.motionController = new MotionController(xrInputSource, profile, assetPath);

                    const handedness = xrInputSource.handedness; // left / right
                    const assetUrl = `${this.path}/meta-quest-touch-plus/${handedness}.glb`;

                    const cachedAsset = this._assetCache[assetUrl];
                    if (cachedAsset) {
                        scene = cachedAsset.scene.clone();
                        addAssetSceneToControllerModel(controllerModel, scene);
                    } else {
                        this.gltfLoader.load(assetUrl,
                            (asset) => {
                                this._assetCache[assetUrl] = asset;
                                scene = asset.scene.clone();
                                addAssetSceneToControllerModel(controllerModel, scene);
                            },
                            null,
                            () => console.error(`Asset ${assetUrl} missing or malformed.`)
                        );
                    }
                })
                .catch(err => console.warn(err));
        });

        controller.addEventListener('disconnected', () => {
            controllerModel.remove(scene);
            scene = null;
        });

        return controllerModel;
    }
}

export { XRControllerModelFactory };