const sumAll = function(start, end) {
    let array = [];
    let sum = 0;

    if(!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR"
    if (start < 0 || end < 0) return "ERROR";
    
    else if (start < end){

        for (let i = start; i <= end; i++) {
            array.push(i);
        }

    }
    
    else if (end < start) {
        for (let i = start; i >= end; i--) {
            array.push(i);
            console.log(array[i]);
        }
    }

    for (let i = 0; i < array.length; i++){
        sum += array[i];
        
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
