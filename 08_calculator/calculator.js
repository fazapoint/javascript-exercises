const add = function(x, y) {
	const result = x + y;
  return result;
};

const subtract = function(x, y) {
	const result = x - y;
  return result;
};

const sum = function(x) {
	const result = x.reduce((sumArr, value) => {
    return sumArr + value;
  }, 0);
  return result;
};

const multiply = function(x) {
  const result = x.reduce((multiplyArr, value) => {
    return multiplyArr * value;
  }, 1);
  return result;
};

const power = function(x, y) {
	const result = x**y;
  return result
};

const factorial = function(x) {
	if (x === 0){
    return 1;
  }
  return x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
