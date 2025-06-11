// Task: Find common elements in two arrays
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
const arr3 = arr1.filter((value) => arr2.includes(value)); // Using filter and includes to find common elements
console.log(arr3); // Output: [3, 4]


// Task: Rotate Array by N Positions
const arr = [1, 2, 3, 4, 5];
const n = 2;
function rotateArray(arr, n) {
    for (let i = 0; i < n; i++) {
        let last = arr.pop();       // Remove last element
        arr.unshift(last);          // Add it to the front
    }
    return arr;
}
console.log(rotateArray(arr, n));  // Output: [4, 5, 1, 2, 3]


// Task: Count Frequency of Each Element
const fruits = ["apple", "banana", "apple", "cherry", "banana", "apple"];
// Function to count the frequency of each element in an array
const countFrequency = (inputArr) => {
    const frequency = {};
    for(let element of inputArr) {
        if(frequency[element]) {
            frequency[element]++;
        }
        else{
            frequency[element] = 1;
        }
    }
    return frequency;
}
console.log(countFrequency(fruits));
// Output: { apple: 3, banana: 2, cherry: 1 }


// Task : Reverse an Array
const input = [10, 20, 30, 40, 50];
const reverse = (arr) => {
    return arr.reverse();
}
console.log(reverse(input));
// Output: [50, 40, 30, 20, 10]


// Task : Filter Words Starting with a Letter
// Task: Filter Words Starting with a Letter
const words = ["Apple", "Banana", "Avocado", "Cherry", "Apricot"];
const letter = "A";
const filterstart = (arr,letter) => {
    return arr.filter(word => word.startsWith(letter));
}
console.log(filterstart(words, letter));
// Output: [ 'Apple', 'Avocado', 'Apricot' ]