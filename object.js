//Task : Access Nested Properties from given array
const user = { 
    name: "Alice", 
    address: { 
        city: "Mumbai", 
        zip: "400001" 
    } 
};

console.log("Name: ",user.name); // Output: Alice
console.log("City: ",user.address.city); // Output: Mumbai
console.log("Zip: ",user.address.zip); // Output: 400001

// Task : Count Occurrences of Values
const input = ["cat", "dog", "cat", "bird", "dog", "dog"];
const countOccurrences = (arr) => {
    const occurrences = {};
    
    for (let item of arr) {
        if (occurrences[item]) {
            occurrences[item]++;
        } else {
            occurrences[item] = 1;
        }
    }
    return occurrences;
};
console.log(countOccurrences(input));
// Output: { cat: 2, dog: 3, bird: 1 }


// Task : Flatten a Nested Object




