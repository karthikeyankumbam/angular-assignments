"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var promise = new Promise(function (resolve) {
    resolve("First value in promise");
    resolve("Second value in promise"); // This will be ignored
});
promise.then(console.log); // Outputs: "First value"
promise.then(console.log);
var observable = new rxjs_1.Observable(function (observer) {
    observer.next("First value");
    observer.next("Second value");
    observer.complete();
});
observable.subscribe(console.log); // Outputs: "First value" and "Second value"
