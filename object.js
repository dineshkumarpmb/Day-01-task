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
const nestedObj = { a: { b: { c: 1 }, d: 2 }, e: 3 };
const flattenObject = (obj) => {
    const result = {};
    
    const recurse = (current, prop) => {
        if (Object(current) !== current) {
            result[prop] = current;
        } else {
            for (let key in current) {
                recurse(current[key], prop ? prop + '.' + key : key);
            }
        }
    };
    
    recurse(obj, '');
    return result;
};
console.log(flattenObject(nestedObj));
// Output: { 'a.b.c': 1, 'a.d': 2, e: 3 }


// Task: Group Objects by a Property
const students = [
  { name: "John", grade: "A" },
  { name: "Jane", grade: "B" },
  { name: "Jake", grade: "A" },
];
const groupByGrade = (arr) => {
    return arr.reduce((acc, student) => {
        if (!acc[student.grade]) {
            acc[student.grade] = [];
        }
        acc[student.grade].push(student);
        return acc;
    }, {});
};
console.log(groupByGrade(students));
// Output: { A: [ { name: 'John', grade: 'A' }, { name: 'Jake', grade: 'A' } ], B: [ { name: 'Jane', grade: 'B' } ] }


// Task: Transform an Array to an Object
const keys = ["a", "b", "c"];
const values = [1, 2, 3];
const arrayToObject = (keys, values) => {
    return keys.reduce((obj, key, index) => {
        obj[key] = values[index];
        return obj;
    }, {});
};
console.log(arrayToObject(keys, values));
// Output: { a: 1, b: 2, c: 3 }





