// Task: Check if Number is Even or Odd
const num = 7;
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(isEvenOrOdd(num)); // Output: Odd


// Task: Sum of Array Elements using Function
const numbers = [1, 2, 3, 4, 5];
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }   
    return sum;
}
console.log(sumArray(numbers)); // Output: 15


// Task: Arrow Function to Square a Number
const square = (num) => num * num;
console.log(square(5)); // Output: 25


// Task: Function with Default Parameters
function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}   
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet()); // Output: Hello, Guest!


// Task: Calculate Factorial of a Number
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // Output: 120

