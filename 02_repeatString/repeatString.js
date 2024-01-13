const repeatString = function(string, num) {
    string = 'hey';
    num = 3;
    
    let repeated = '';

    for (i = 0; i < num; i++) {
        repeated += string; 
        console.log(repeated);
    }
    return repeated;
};

// Do not edit below this line
module.exports = repeatString;


