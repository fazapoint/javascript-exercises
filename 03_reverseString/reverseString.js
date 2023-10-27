const reverseString = function(word) {
    const reversed = [];
    for (const letter of word){
        reversed.unshift(letter)
    }

    let result = reversed.join('');
   
    return result;
};

// Do not edit below this line
module.exports = reverseString;
