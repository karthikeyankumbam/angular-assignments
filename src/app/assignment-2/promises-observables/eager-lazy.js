"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var promise = new Promise(function (resolve) {
    console.log("Promise started");
    resolve("Promise resolved");
});
promise.then(console.log); // Outputs: "Promise started" followed by "Promise resolved"
var observable = new rxjs_1.Observable(function (observer) {
    console.log("Observable created");
    observer.next("Observable emitted");
});
// No output until we subscribe
observable.subscribe(console.log); // Outputs: "Observable created" followed by "Observable emitted"
