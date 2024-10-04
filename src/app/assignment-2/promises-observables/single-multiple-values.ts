import { Observable } from "rxjs";
/* A Promise can only resolve or reject a single value.
An Observable can emit multiple values over time. */
const promise = new Promise((resolve) => {
    resolve("First value in promise");
    resolve("Second value in promise"); // This will be ignored
});
promise.then(console.log); // Outputs: "First value"
promise.then(console.log); 
const observable = new Observable((observer) => {
    observer.next("First value");
    observer.next("Second value");
    observer.complete();
});
observable.subscribe(console.log); // Outputs: "First value" and "Second value"