// Task: Convert a Sentence to Title Case
const sentence = "hello world from javascript";
function toTitleCase(str) {
    const words = str.split(" ");
    let result = [];
    for (let word of words) {
        let capitalized = word[0].toUpperCase() + word.slice(1);
        result.push(capitalized);
    }

    return result.join(" ");
}
console.log(toTitleCase(sentence)); // Output: Hello World From Javascript


// Task: Find Longest Word in a Sentence
const inputSentence = "The quick brown fox jumped over the lazy dog";
function findLongestWord(str) {
    const words = str.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
console.log(findLongestWord(inputSentence)); // Output: jumped


// Task: Count Words, Characters, and Spaces in a Sentence
const str = "JavaScript is awesome!";
function countWordsCharactersSpaces(sentence) {
    const words = sentence.split(" ");
    const wordCount = words.length;
    const charCount = sentence.replace(/\s/g, "").length; // Exclude spaces
    const spaceCount = sentence.split(" ").length - 1; // Count spaces
    return {
        wordCount: wordCount,
        charCount: charCount,
        spaceCount: spaceCount
    };
}
console.log(countWordsCharactersSpaces(str));
// Output: { wordCount: 4, charCount: 21, spaceCount: 3 }


// Task: Find First Non-Repeating Character
const inputString = "aabbcde";
function firstNonRepeatingChar(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null; // If no non-repeating character found
}
console.log(firstNonRepeatingChar(inputString)); // Output: c


 

