//if the remainder = 0 after the year is divided by 4 then return true,
    //otherwise return false

const leapYears = function(year) {

    if (year % 100 === 0 && !(year % 400 === 0)) {
        return false;
    }
    else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = leapYears;
