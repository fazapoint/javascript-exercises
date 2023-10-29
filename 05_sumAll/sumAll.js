const sumAll = function(first, second) {
    let result = 0;
    let start = first;
    let end = second;

    for (let i=0; i < arguments.length; i++){
        if (arguments[i] < 0 || typeof arguments[i] !== "number"){
            return 'ERROR';
        }
    }

    if (first > second){
        start = second;
        end = first;
    }
    
    for (let i=start; i<=end; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
