const convertToCelsius = function(farenheit) {
  let result = (farenheit - 32) * 5/9;
  if (result % 1 === 0){
    return result;
  }else if (result % 1 !== 0){
    return Number(result.toFixed(1));
  }
};

const convertToFahrenheit = function(celcius) {
  let result = celcius * 9/5 + 32;
  if (result % 1 === 0){
    return result;
  }else if (result % 1 !== 0){
    return Number(result.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
