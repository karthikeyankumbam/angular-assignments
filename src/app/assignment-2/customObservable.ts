
// Importing RxJS library (make sure to include it in your project)
import { Observable } from 'rxjs';

// Create an observable that emits values over time
const numberObservable = new Observable(subscriber => {
    let count = 0;
    const intervalId = setInterval(() => {
        if (count < 5) {
            console.log("before emit");
            subscriber.next(count); // Emit the current count
            count++;
        } else {
            subscriber.complete(); // Complete the observable after 5 emissions
            clearInterval(intervalId); // Clear the interval
        }
    }, 1000); // Emit a value every second

    // Cleanup logic when unsubscribed
    return () => clearInterval(intervalId);
});

// Subscribe to the observable
const subscription = numberObservable.subscribe({
    next(value) {
        console.log(`Received value: ${value}`); // Output: Received value: 0, 1, 2, 3, 4
    },
    error(err) {
        console.error(`Error: ${err}`);
    },
    complete() {
        console.log("Observable completed!"); // Output: Observable completed!
    }
});

// Optionally unsubscribe after some time (e.g., after 6 seconds)
setTimeout(() => {
    subscription.unsubscribe();
    console.log("Unsubscribed from observable.");
}, 5000);