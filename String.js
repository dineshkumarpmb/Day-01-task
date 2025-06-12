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
    let wordCount = 0;
    let charCount = 0;
    let spaceCount = 0;
    let inWord = false;
    for (let i = 0; i < sentence.length; i++) {
        const ch = sentence[i];
        if (ch === ' ') {
            spaceCount++;
            inWord = false; // We are between words
        } else {
            charCount++; // Count character (non-space)
            if (!inWord) {
                wordCount++; // We are starting a new word
                inWord = true;
            }
        }
    }
    return {
        wordCount: wordCount,
        charCount: charCount,
        spaceCount: spaceCount
    };
}
console.log(countWordsCharactersSpaces(str));
//Output: { wordCount: 4, charCount: 22, spaceCount: 3 }



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

// or else need to print all the Non repeating characters

const inputStrin = "aabbcde";
function firstNonRepeatingChar(str) {
    const charCount = {};
    const result = [];
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
        if (charCount[char] === 1) {
            result.push(char);
        }
    }
    return result; // If no non-repeating character found
}
console.log(firstNonRepeatingChar(inputStrin)); 

