function addFn(n1: number, n2: number) {
  return n1 + n2;
}

function voidFn(num: number): void {
  console.log("Das ist void " + num);
}

function addAndCallback(n1: number, n2: number, cb: (n: number) => void) {
  const result = n1 + n2;
  cb(result);
}

//pointer
let newPointer: Function;
newPointer = addFn;

//function type definition
let combineValues: (a: number, b: number) => number;
combineValues = addFn;

voidFn(3);
console.log(newPointer(8, 8));
console.log(combineValues(10, 10));
addAndCallback(10, 100, (result) => {
  console.log(result);
});
