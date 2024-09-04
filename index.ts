import { Timer } from './timer';

const duration = 10; // Set duration in seconds
const timer = new Timer(duration);

timer.start(() => {
    console.log("Timer finished!");
});
