"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
/* Once a Promise is initiated, it cannot be cancelled.
An Observable can be cancelled by unsubscribing. */
// Create an observable that emits values over time
var numberObservable = new rxjs_1.Observable(function (subscriber) {
    var count = 0;
    var intervalId = setInterval(function () {
        if (count < 5) {
            console.log("before emit");
            subscriber.next(count); // Emit the current count
            count++;
        }
        else {
            subscriber.complete(); // Complete the observable after 5 emissions
            clearInterval(intervalId); // Clear the interval
        }
    }, 1000); // Emit a value every second
    // Cleanup logic when unsubscribed
    return function () { return clearInterval(intervalId); };
});
// Subscribe to the observable
var subscription = numberObservable.subscribe({
    next: function (value) {
        console.log("Received value: ".concat(value)); // Output: Received value: 0, 1, 2, 3, 4
    },
    error: function (err) {
        console.error("Error: ".concat(err));
    },
    complete: function () {
        console.log("Observable completed!"); // Output: Observable completed!
    }
});
// Optionally unsubscribe after some time (e.g., after 6 seconds)
setTimeout(function () {
    subscription.unsubscribe();
    console.log("Unsubscribed from observable.");
}, 5000);
