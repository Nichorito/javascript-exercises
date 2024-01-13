const removeFromArray = function(array, ...toRemove) {

    toRemove.forEach((x) =>{
        const index = array.indexOf(x);
        
        if (index > -1) {
        array.splice(index, 1);
        }
    })

    return array;     
};

// Do not edit below this line
module.exports = removeFromArray;
