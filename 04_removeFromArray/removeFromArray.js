const removeFromArray = function(arr, ...targets) {
    let result = arr.filter(item => !targets.includes(item));
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
