export class Timer {
    private duration: number;
    private remainingTime: number;
    private intervalId: NodeJS.Timeout | null;

    constructor(duration: number) {
        this.duration = duration;
        this.remainingTime = duration;
        this.intervalId = null;
    }

    start(onComplete: () => void) {
        console.log(`Starting timer for ${this.duration} seconds...`);

        this.intervalId = setInterval(() => {
            this.remainingTime--;

            if (this.remainingTime > 0) {
                console.log(`Time left: ${this.remainingTime} seconds`);
            } else {
                console.log("Time's up!");
                this.stop();
                onComplete();
            }
        }, 1000);
    }

    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    reset() {
        this.stop();
        this.remainingTime = this.duration;
    }
}
