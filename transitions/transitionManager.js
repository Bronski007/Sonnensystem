export class TransitionManager {
    constructor(startValue, endValue, duration, onUpdate, onComplete) {
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration;
        this.elapsed = 0;
        this.active = true;
        this.onUpdate = onUpdate;
        this.onComplete = onComplete;
    }
    update(delta) {
        if (!this.active) return;

        this.elapsed += delta;
        const t = Math.min(this.elapsed / this.duration, 1);

        const currentValue = this.startValue + (this.endValue - this.startValue) * t;
        this.onUpdate(currentValue);

        if (t >= 1) {
            this.active = false;
            this.onComplete?.(); //only executes if onComplete isnt null ord undefined
        }
    }

    isActive() {
        return this.active;
    }
}