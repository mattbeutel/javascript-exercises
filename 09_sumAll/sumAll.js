const sumAll = function() {
    if (typeof arguments[0] !== "number" || typeof arguments[1] !== "number") {
        return "ERROR";
    }
    let lower = arguments[0];
    let upper = arguments[1];
    if (lower % 1 != 0 || upper % 1 != 0 || lower < 0 || upper < 0) {
        return "ERROR";
    }
    if (lower > upper) {
        temp = lower;
        lower = upper;
        upper = temp;
    }
    let res = 0;
    for (let i = lower; i <= upper; ++i) {
        res += i;
    }
    return res;
};

// Do not edit below this line
module.exports = sumAll;
