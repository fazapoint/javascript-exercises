const repeatString = function(word, total) {
    let result = ''
    while(total < 0){
        return 'ERROR';
    }
    
    for (let i = 0; i < total; i++){
        result += word; 
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
