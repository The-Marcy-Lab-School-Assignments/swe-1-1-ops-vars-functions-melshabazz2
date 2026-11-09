// ===== From Scratch Questions =====

// Question 1: calculateArea
const calculateArea = (width, height) => {
  // TODO: Calculate and return the area of a rectangle
  // e.g. calculateArea(5, 3) => 15
  let area = width * height
  return area

};
console.log(calculateArea(5, 3))
console.log(calculateArea(10, 7))

// Question 2: isEven
const isEven = (number) => {
  // TODO: Return true if the number is even, false if odd
  // e.g. isEven(2) => true, isEven(3) => false
  if (number === isEven) {
    return true
  } else {
    return false
  }
};
console.log(isEven(2))
console.log(isEven(3))
console.log(isEven(0))

// Question 3: convertToFahrenheit
const convertToFahrenheit = (celsius) => {
  // TODO: Convert celsius to fahrenheit using the formula: (celsius * 9/5) + 32
  // e.g. convertToFahrenheit(0) => 32
  return (celsius * 9 / 5) + 32
};
console.log(convertToFahrenheit(0))
console.log(convertToFahrenheit(100))
console.log(convertToFahrenheit(37))

// Question 4: createGreeting
const createGreeting = (name) => {
  // TODO: Return a greeting string in the format "Hello, [name]!"
  // e.g. createGreeting('Alice') => "Hello, Alice!"
  return `Hello, ${name}`

};
console.log(createGreeting(`Alice`))
console.log(createGreeting(`Bob`))

// Question 5: getInitials
const getInitials = (firstName, lastName) => {
  // TODO: Return the initials by taking the first letter of each name
  // e.g. getInitials('John', 'Doe') => "JD"
  return `${[...firstName][0]}${[...lastName][0]}`

};
console.log(getInitials('John', 'Doe'))
console.log(getInitials('Mary', 'Jane'))

// Question 6: formatPrice
const formatPrice = (price) => {
  // TODO: Return a formatted price string in the format "$[price].00"
  // e.g. formatPrice(5) => "$5.00"
  return `$${price}.00`

};
console.log(formatPrice(5))
console.log(formatPrice(10))

// Question 7: getLarger
const getLarger = (num1, num2) => {
  // TODO: Return the larger of the two numbers
  // e.g. getLarger(5, 3) => 5, getLarger(10, 10) => 10
  if (num1 > num2) {
    return num1
  } else {
    return num2
  }

};
console.log(getLarger(5, 3))
console.log(getLarger(3, 5))
console.log(getLarger(10, 10))

// Question 8: isValidAge
const isValidAge = (age) => {
  // TODO: Return true if age is between 0 and 120 (inclusive), false otherwise
  // e.g. isValidAge(25) => true, isValidAge(121) => false
  if (age <= 120 && age >= 0) {
    return true
  } else {
    return false
  }

};
console.log(isValidAge(25))
console.log(isValidAge(0))
console.log(isValidAge(120))
console.log(isValidAge(-1))
console.log(isValidAge(121))

// ===== Modify Questions =====

// Question 9: Convert declarations to arrows
// TODO: Convert each of the functions below to arrow function expressions,
// while maintaining exactly the same functionality (keep the console.log lines inside each).
const add = (a, b) => {
  const result = a + b;
  console.log(`The sum of ${a} and ${b} is ${result}`);
  return result;
}

const subtract = (a, b) => {
  const result = a - b;
  console.log(`The difference between ${a} and ${b} is ${result}`);
  return result;
}

const multiply = function (a, b) {
  const result = a * b;
  console.log(`The product of ${a} and ${b} is ${result}`);
  return result;
}

const power = (a, b) => {
  const result = a ** b;
  console.log(`${a} to the power of ${b} is ${result}`);
  return result;
}

// Question 10: Explicit to implicit returns
// TODO: Convert these same functions (simplified to only return things) to
// arrow functions AND make them have implicit returns.

/*
Explicit returns:
Implicit returns: An implicit return allows functions to return values without the keyword RETURN

*/
const addSimple = (a, b) => {
  return a + b;
}

const subtractSimple = (a, b) => {
  return a - b;
}

const multiplySimple = (a, b) => {
  return a * b;
}

const powerSimple = (a, b) => {
  return a ** b;
}

// ===== Debug Questions =====

// Question 11: Fix our mess of a function
// TODO: This function has several bugs - it uses var, implicit globals, and
// string concatenation instead of template literals, and tries (poorly) to
// hoist variables into a message. Fix it so it logs:
//   Hello Zo, are you feeling happy today?
//   Oh no, I'm sorry you're feeling sad today.
// In the end you should have 4 variable assignments: 3 initializations and 1 reassignment.
// Do not use var, do not use implicit globals, use const/let correctly, and use template literals.
const debugFunc = () => {
  let time = 'today';
  let name = 'Zo';
  let mood = 'happy';
  console.log(`Hello ${name}, are you feeling ${mood} ${time}?`);

  mood = 'sad';
  console.log(`Oh no, I'm sorry you're feeling ${mood} ${time}.`);
};

debugFunc();

module.exports = {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
  add,
  subtract,
  multiply,
  power,
  addSimple,
  subtractSimple,
  multiplySimple,
  powerSimple,
  debugFunc,
};
