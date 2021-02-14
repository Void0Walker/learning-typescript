"use strict";
function addFn(n1, n2) {
    return n1 + n2;
}
function voidFn(num) {
    console.log("Das ist void " + num);
}
function addAndCallback(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var newPointer;
newPointer = addFn;
var combineValues;
combineValues = addFn;
voidFn(3);
console.log(newPointer(8, 8));
console.log(combineValues(10, 10));
addAndCallback(10, 100, function (result) {
    console.log(result);
});
//# sourceMappingURL=functions.js.map