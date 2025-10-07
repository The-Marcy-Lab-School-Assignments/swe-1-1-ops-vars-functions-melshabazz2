


//Question 1:
// Basic Variable & Expression Functions
const calculateArea = (width, height) => {
  return width * height
  // TODO: Calculate and return the area of a rectangle

};
console.log(calculateArea(5, 3))
console.log(calculateArea(10, 7))


// Question 2:
const isEven = (number) => {
  if (number % 2 === 0) {
    return true
  }
  else {
    return false
  }
  // TODO: Return true if the number is even, false if odd
};
console.log(isEven(2))
console.log(isEven(3))
console.log(isEven(0))

//Question 3:
const convertToFahrenheit = (celsius) => {
  return (celsius * 9 / 5 + 32)
  // TODO: Convert celsius to fahrenheit using the formula: (celsius * 9/5) + 32
};
console.log(convertToFahrenheit(0))
console.log(convertToFahrenheit(100))
console.log(convertToFahrenheit(37))

//Question 4:
// String & Variable Functions
const createGreeting = (name) => {
  let greeting = `Hello, ${name}!`
  return greeting
  // TODO: Return a greeting string like "Hello, [name]!"
};
console.log(createGreeting(`Alice`))
console.log(createGreeting(`Bob`))

//Question 5:
const getInitials = (firstName, lastName) => {
  return firstName[0] + lastName[0]
  // TODO: Return initials by taking first letter of each name
};
console.log(getInitials('John', 'Doe'))
console.log(getInitials('Mary', 'Jane'))

//Question 6:
const formatPrice = (price) => {
  return `$${price}.00`
  // TODO: Return price formatted as "$[price].00" (e.g., "$5.00")
};
console.log(formatPrice(5))
console.log(formatPrice(10))

//Question 7:
// Function Logic Functions
const getLarger = (num1, num2) => {
  if (num1 > num2) {
    return num1
  }
  else if
    (num1 < num2) {
    return num2
  }
  else if (num1 === num2)
    return num1
  // TODO: Return the larger of the two numbers
};
console.log(getLarger(5, 3))
console.log(getLarger(3, 5))
console.log(getLarger(10, 10))
//Question 8:
const isValidAge = (age) => {
  if (age <= 120 && age >= 0) {
    return true
  }
  else {
    return false
  }
  // TODO: Return true if age is between 0 and 120, false otherwise
};
console.log(isValidAge(25))
console.log(isValidAge(0))
console.log(isValidAge(120))
console.log(isValidAge(-1))
console.log(isValidAge(121))

module.exports = {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
};
