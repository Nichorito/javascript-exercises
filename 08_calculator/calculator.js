const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b ) {
	return a - b;
};

const sum = function(values) {
	return values.reduce((nextValue, currentValue) => nextValue + currentValue, 0);
};

const multiply = function(values) {
  return values.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(a,b) {
	return Math.pow(a, b);
};


// Get number to be factoralized
// the total number is the sum of number * number - 1
//Ex 3! would be 3 * 2 * 1 

//Assuming x = 3 we would want to do something like

// x *= x - 1

// 3 * 2 = 6
// 6 * 5 = 30
// 30 * 29 = 

// Wouldn't work since x would be updated to a larger number every loop

// Try something like Accumulated *= x; x--

// 1 * 5 = 5
// 5 * 4 = 20
// 20 * 3 = 60

// Works

const factorial = function(x) {
  let accumulated = 1;
  while (x > 1) {
    accumulated *= x;
    x--;
  }
  return accumulated;
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
