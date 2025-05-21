const repeatString = function(string, amount) {
    if (amount < 0) {
        return "ERROR";
    }
    let res = "";
    for (let i = 0; i < amount; i++) {
        res += string;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
