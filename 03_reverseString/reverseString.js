const reverseString = function(string) {
    const stringArray = string.split('');
    let reverse = '';

    for (let i = stringArray.length - 1; i >= 0; i--){
        reverse += stringArray[i];
    }

    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
