export class TransitionManager {
    constructor(startValue, endValue, duration, onUpdate, onComplete) {
        this.startValue = startValue;
        this.endValue = endValue;
        this.duration = duration; //duration in seconds
        this.elapsed = 0;
        this.active = true;
        this.onUpdate = onUpdate; // Callback function called with the current value each frame
        this.onComplete = onComplete; // Callback triggered when the transition finishes
    }

    // Called every frame to update the transition
    update(delta) {
        if (!this.active) return;  // Do nothing if transition is already complete

        this.elapsed += delta;  // Add time since last frame
        const t = Math.min(this.elapsed / this.duration, 1);

        const currentValue = this.startValue + (this.endValue - this.startValue) * t;
        // Call the onUpdate callback with the interpolated value
        this.onUpdate(currentValue);

        // If the transition is finished
        if (t >= 1) {
            this.active = false;       // Mark transition as inactive
            this.onComplete?.();       // If onComplete exists, call it
        }
    }

    // Returns whether the transition is still active
    isActive() {
        return this.active;
    }
}