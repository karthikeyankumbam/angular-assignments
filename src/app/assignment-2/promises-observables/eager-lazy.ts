import { Observable } from "rxjs";
/*
    Promises are eager. They start executing immediately after they are created, regardless of whether the result is needed.
    Observables are lazy. They do not start emitting values until a subscription is made.
*/
const promise = new Promise((resolve) => {
    console.log("Promise started");
    resolve("Promise resolved");
});
promise.then(console.log); // Outputs: "Promise started" followed by "Promise resolved"

const observable = new Observable((observer) => {
    console.log("Observable created");
    observer.next("Observable emitted");
});
// No output until we subscribe
observable.subscribe(console.log); // Outputs: "Observable created" followed by "Observable emitted"