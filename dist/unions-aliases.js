"use strict";
function combine(input1, input2, resultType) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1 + " " + input2;
    }
    return result;
}
console.log(combine(2, 2, "as-number"));
console.log(combine("30", "30", "as-number"));
console.log(combine("Arturas", "Kalandarisvili", "as-text"));
//# sourceMappingURL=unions-aliases.js.map