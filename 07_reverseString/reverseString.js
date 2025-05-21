const reverseString = function(string) {
    let arr = string.split('');
    for (let i = 0; i < (arr.length - 1)/2; i++) {
        temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr.join('');
};

// Do not edit below this line
module.exports = reverseString;
