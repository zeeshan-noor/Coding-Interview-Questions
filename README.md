# JavaScript Coding Interview Questions & Solutions

## 1. Reverse a String
**Problem**: Reverse the characters in a string  
**Input**: "hello" → **Output**: "olleh"  
**Input**: "world" → **Output**: "dlrow"  
**Input**: "javascript" → **Output**: "tpircsavaj"

**Technique 1 - Using Array Methods:**
```javascript
const handleOnReverseString = (string) => {
  let reverseStr = string.split('').reverse().join('');
  return reverseStr;
};
```

**Technique 2 - Using Manual Loop:**
```javascript
const handleOnReverseString = (string) => {
  let reversed = "";
  for (let char = string.length - 1; char >= 0; char--) {
    reversed += string[char];
  }
  return reversed;
};
```

## 2. Check if String is Palindrome
**Problem**: Determine if a string reads the same forwards and backwards  
**Input**: "madam" → **Output**: true  
**Input**: "hello" → **Output**: false  
**Input**: "racecar" → **Output**: true  
**Input**: "javascript" → **Output**: false

```javascript
const checkOnPalindrome = (string) => {
  const reverseStr = (str) => [...str].reverse().join("");
  return reverseStr(string) == string;
};
```

## 3. Remove Duplicate Characters
**Problem**: Remove duplicate characters from a string  
**Input**: "banana" → **Output**: "ban"  
**Input**: "hello" → **Output**: "helo"  
**Input**: "javascript" → **Output**: "javscript"  
**Input**: "aabbcc" → **Output**: "abc"

**Technique 1 - Using Object Tracking:**
```javascript
const handleOnDuplicateChar = (string) => {
  let result = {};
  for (let i = 0; i < string.length; i++) {
    let elem = string[i];
    if (!result[i]) result[elem] = elem;
  }
  return Object.keys(result).join("");
};
```

**Technique 2 - Using Includes Method:**
```javascript
const handleOnDuplicateChar = (string) => {
  let result2 = "";
  for (let i = 0; i < string.length; i++) {
    if (!result2.includes(string[i])) result2 += string[i];
  }
  return result2;
};
```

**Technique 3 - Using Set:**
```javascript
const handleOnDuplicateChar = (string) => {
  let removeDuplicate = [...new Set(string)].join("");
  return removeDuplicate;
};
```

## 4. First Non-Repeating Character
**Problem**: Find the first character that appears only once  
**Input**: "aabbcdd" → **Output**: "c"  
**Input**: "leetcode" → **Output**: "l"  
**Input**: "aabbcc" → **Output**: null  
**Input**: "hello" → **Output**: "h"

```javascript
function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    // The lastIndexOf() method searches the string from the end to the beginning.
    // The indexOf() method searches the string from the beginning to the end.
    // return index value of element 0,1,2 etc
    // console.log(str.indexOf(str[i]),"===",str.lastIndexOf(str[i]));

    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}
```

## 5. Count Character Occurrences
**Problem**: Count how many times each character appears  
**Input**: "apple" → **Output**: {a: 1, p: 2, l: 1, e: 1}  
**Input**: "hello" → **Output**: {h: 1, e: 1, l: 2, o: 1}  
**Input**: "javascript" → **Output**: {j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1}

```javascript
const handleOnOccurrence = (str) => {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result[char] = (result[char] || 0) + 1;
  }
  return result;
};
```

## 6. Reverse Words in Sentence
**Problem**: Reverse the order of words in a sentence  
**Input**: "Hello world from ChatGPT" → **Output**: "ChatGPT from world Hello"  
**Input**: "I love JavaScript" → **Output**: "JavaScript love I"  
**Input**: "coding is fun" → **Output**: "fun is coding"

```javascript
let reverseWords = (str) => {
  return str.split(" ").reverse().join(" ");
};
```

## 7. Check if Strings are Anagrams
**Problem**: Determine if two strings contain the same characters  
**Input**: "listen", "silent" → **Output**: true  
**Input**: "hello", "world" → **Output**: false  
**Input**: "anagram", "nagaram" → **Output**: true  
**Input**: "rat", "car" → **Output**: false

```javascript
const checkAnagram = (str1, str2) => {
  if (str1.length != str2.length) return false;
  let sortStr = (str) => str.split("").sort().join("");
  return sortStr(str1) === sortStr(str2);
};
```

## 8. String to Integer (Atoi)
**Problem**: Convert a string representation of a number to an integer  
**Input**: "123" → **Output**: 123  
**Input**: "-45" → **Output**: -45  
**Input**: "+67" → **Output**: 67  
**Input**: "42.5" → **Output**: 42

```javascript
function myAtoi(str) {
  let num = 0, sign = 1, i = 0;

  str = str.trim();
  if (str[0] === "-") {
    sign = -1;
    i++;
  } else if (str[0] === "+") {
    i++;
  }

  while (i < str.length && str[i] >= "0" && str[i] <= "9") {
    num = num * 10 + (str[i] - "0");
    console.log("Number -->", num);
    i++;
  }

  return sign * num;
}
```

## 9. String Compression
**Problem**: Compress a string by counting consecutive characters  
**Input**: "aaabbc" → **Output**: "a3b2c1"  
**Input**: "aabbbcccc" → **Output**: "a2b3c4"  
**Input**: "abc" → **Output**: "a1b1c1"  
**Input**: "aaa" → **Output**: "a3"

```javascript
const handleOnCompressStr = (str) => {
  let result = "", counter = 1;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === str[i + 1]) {
      counter++;
    } else {
      result += str[i] + counter;
      counter = 1;
    }
  }
  return result;
};
```

## 10. Most Frequent Character
**Problem**: Find the character that appears most often  
**Input**: "javascript" → **Output**: "a"  
**Input**: "hello" → **Output**: "l"  
**Input**: "aabbcc" → **Output**: "a" (first encountered)  
**Input**: "xyz" → **Output**: "x" (first encountered)

```javascript
const findMostFrequent = (str) => {
  let result = "", max = 0, freq = {};

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
    if (freq[char] > max) {
      max = freq[char];
      result = char;
    }
  }
  return result;
};
```

## 11. All Substrings
**Problem**: Generate all possible substrings of a string  
**Input**: "abc" → **Output**: ['a', 'ab', 'abc', 'b', 'bc', 'c']  
**Input**: "xy" → **Output**: ['x', 'xy', 'y']  
**Input**: "a" → **Output**: ['a']  
**Input**: "hello" → **Output**: ['h', 'he', 'hel', 'hell', 'hello', 'e', 'el', 'ell', 'ello', 'l', 'll', 'llo', 'l', 'lo', 'o']

```javascript
function getAllSubstrings(str) {
  const result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      //In JavaScript, the substring() method is used to extract a portion of a string and return it as a new string, without modifying the original string.
      result.push(str.substring(i, j));
    }
  }
  return result;
}
```

## 12. Title Case Conversion
**Problem**: Convert a sentence to title case  
**Input**: "hello world from javascript" → **Output**: "Hello World From Javascript"  
**Input**: "coding interview questions" → **Output**: "Coding Interview Questions"  
**Input**: "javascript is awesome" → **Output**: "Javascript Is Awesome"

```javascript
const convertStringTitle = (str) => {
  return str
    .split(" ")
    .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase())
    .join(" ");
};
```

## 13. Longest Common Prefix
**Problem**: Find the longest common prefix among an array of strings  
**Input**: ["flower", "flow", "flight"] → **Output**: "fl"  
**Input**: ["dog", "racecar", "car"] → **Output**: ""  
**Input**: ["interspecies", "interstellar", "interstate"] → **Output**: "inters"  
**Input**: ["throne", "throne"] → **Output**: "throne"

```javascript
function longestCommonPrefix(arr) {
  if (!arr.length) return "";

  let prefix = arr[0];
  for (let i = 1; i < arr.length; i++) {
    while (!arr[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }
  return prefix;
}
```

## 14. URL Encoding
**Problem**: Replace spaces with %20 for URL encoding  
**Input**: "Mr John Smith" → **Output**: "Mr%20John%20Smith"  
**Input**: "Hello World" → **Output**: "Hello%20World"  
**Input**: "No spaces" → **Output**: "No%20spaces"  
**Input**: "Multiple   spaces" → **Output**: "Multiple%20%20%20spaces"

**Technique 1 - Using Replace Method:**
```javascript
function urlEncode(str) {
  const urlEncode = (str) => str.replace(/ /g, "%20");
  return urlEncode(str);
}
```

**Technique 2 - Using Manual Loop:**
```javascript
function urlEncode(str) {
  let result = "";
  for (let char of str) {
    result += char === " " ? "%20" : char;
  }
  return result;
}
```

## 15. Acronym Generation
**Problem**: Convert a sentence to its acronym  
**Input**: "Portable Network Graphics" → **Output**: "PNG"  
**Input**: "Central Processing Unit" → **Output**: "CPU"  
**Input**: "Random Access Memory" → **Output**: "RAM"  
**Input**: "JavaScript Object Notation" → **Output**: "JSON"

```javascript
function toAcronym(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}
```

## 16. Fibonacci Series
**Problem**: Generate Fibonacci sequence up to n terms  
**Input**: 5 → **Output**: [0, 1, 1, 2, 3, 5]  
**Input**: 3 → **Output**: [0, 1, 1, 2]  
**Input**: 7 → **Output**: [0, 1, 1, 2, 3, 5, 8, 13]  
**Input**: 1 → **Output**: [0, 1]

**Technique 1 - Iterative Approach:**
```javascript
function fibonacciIterative(n) {
  // Handle edge cases for n = 0 and n = 1
  if (n === 0) {
    return [0];
  }
  if (n === 1) {
    return [0, 1];
  }

  // Initialize the series with the first two numbers
  let series = [0, 1];

  // Loop from the 3rd number up to n
  for (let i = 2; i <= n; i++) {
    // Calculate the next number by summing the previous two
    let nextNum = series[i - 1] + series[i - 2];
    // Add the next number to the series
    series.push(nextNum);
  }

  return series;
}
```

**Technique 2 - Recursive Approach:**
```javascript
function fibonacciRecursive(n) {
  // Base cases:
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  // Recursive step:
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Helper function to get the series (as the recursive function only returns a single term)
function getFibonacciSeriesRecursive(n) {
  if (n < 0) {
    return [];
  }
  let series = [];
  for (let i = 0; i <= n; i++) {
    series.push(fibonacciRecursive(i));
  }
  return series;
}
```

## 17. Factorial Calculation
**Problem**: Calculate factorial of a number  
**Input**: 5 → **Output**: 120  
**Input**: 3 → **Output**: 6  
**Input**: 0 → **Output**: 1  
**Input**: 4 → **Output**: 24

**Technique 1 - Iterative Approach:**
```javascript
function factorialIterative(n) {
  // Handle edge cases
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  if (n === 0 || n === 1) {
    return 1; // 0! = 1 and 1! = 1
  }

  let result = 1;
  // Multiply result by each integer from 2 up to n
  for (let i = 2; i <= n; i++) {
    result *= i; // result = result * i;
  }

  return result;
}
```

**Technique 2 - Recursive Approach:**
```javascript
function factorialRecursive(n) {
  // Handle edge cases
  if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  }
  // Base cases: the conditions that stop the recursion
  if (n === 0 || n === 1) {
    return 1;
  }

  // Recursive step: n! = n * (n-1)!
  return n * factorialRecursive(n - 1);
}
```

## 18. Valid Parentheses (Balanced Brackets)
**Problem**: Given a string `s` containing three types of brackets `()`, `{}`, `[]`, determine if the expression is balanced.  
**Input**: "()" → **Output**: true  
**Input**: "(()())" → **Output**: true  
**Input**: "())())" → **Output**: false  
**Input**: "{[()]}" → **Output**: true  
**Input**: "{[(])}" → **Output**: false

```javascript
function isBalanced(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let char of s) {
    if (['(', '{', '['].includes(char)) {
      stack.push(char); // push opening
    } else if ([')', '}', ']'].includes(char)) {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false; // mismatch
      }
    }
  }

  return stack.length === 0; // must be empty if balanced
}
```

## 19. Two Sum II (Input array is sorted)
**Problem**: Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.  
**Input**: numbers = [2,7,11,15], target = 9 → **Output**: [1,2]  
**Input**: numbers = [2,3,4], target = 6 → **Output**: [1,3]  
**Input**: numbers = [-1,0], target = -1 → **Output**: [1,2]

```javascript
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      // return 1-based indices
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};
```

## 20. Flatten a Deeply Nested Array
**Problem**: You are given an array that may contain nested arrays of arbitrary depth. Flatten the array into a single-level array, preserving original order.  
**Input**: `[1, 2, 3, 4, [5, 6, [7, 8]]]` → **Output**: `[1, 2, 3, 4, 5, 6, 7, 8]`

**Technique 1 - Using forEach Elements Tracking:**
```javascript
const handleOnFlattenArray = () => {
  const array = [1, 2, 3, 4, [5, 6, [7, 8]]];
  let result = [];

  array.forEach((elem) => {
    if (Array.isArray(elem)) {
      elem.forEach((elem1) => {
        if (Array.isArray(elem1)) {
          elem1.forEach((elem2) => {
            result.push(elem2);
          });
        } else {
          result.push(elem1);
        }
      });
    } else {
      result.push(elem);
    }
  });
  return result;
};
```

**Technique 2 - Using Recursion:**
```javascript
function flatten(arr, result = []) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatten(arr[i], result); // recursive call
    } else {
      result[result.length] = arr[i]; // push without using push()
    }
  }
  return result;
}
```

# JavaScript Concepts

## 1. call, apply, and bind Methods
These methods are used to set the `this` keyword to a specific object when invoking a function.

**Call Method:** invokes the function with a given `this` value and arguments provided individually.
```javascript
let emp = {firstName: 'Zeeshan', lastName: "Noor"};

function handleOnCallMethod(greeting1, greeting2) {
    console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
}

handleOnCallMethod.call(emp, 'Hi', "How are you ??");
```

**Apply Method:** invokes the function with a given `this` value, but arguments are provided as an array.
```javascript
function handleOnApplyMethod(greeting1, greeting2) {
    console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
}

handleOnApplyMethod.apply(emp, ['Hi', "How are you ??"]);
```

**Bind Method:** returns a new function with `this` bound to the specified object. It does not invoke the function immediately.
```javascript
function handleOnBindMethod(greeting1, greeting2) {
    console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
}

var invokeBind = handleOnBindMethod.bind(emp);
invokeBind('Hi', "How are you ??");
invokeBind('Hello', "How are you doing Today??");
```

## 2. Slice Method
The `slice()` method does not mutate (change) the original array; instead, it returns a new array containing the extracted elements.
```javascript
let arrayIntegers = [1, 2, 3, 4, 5];
let result = arrayIntegers.slice(0, 3);
// result: [1, 2, 3]
// arrayIntegers: [1, 2, 3, 4, 5]
```

## 3. Splice Method
The `splice()` method is used to add, remove, or replace elements within an array. It mutates the original array by removing, replacing, or adding elements.
```javascript
let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let result = arrayIntegersOriginal1.splice(1, 0, 10);
// Inserts '10' at index 1 without removing any elements
// arrayIntegersOriginal1: [1, 10, 2, 3, 4, 5]
```

## 4. IIFE (Immediately Invoked Function Expression)
An IIFE is a JavaScript function that runs as soon as it is defined. It creates a private lexical scope.
```javascript
(function () {
  var message = "IIFE";
  console.log(message);
})();
// console.log(message); // ReferenceError: message is not defined
```

## 5. Memoization
Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
```javascript
const memoizeAddition = () => {
  let cache = []; // Note: better practice to use an object {} if the keys aren't numeric
  return (value) => {
    if (value in cache) {
      console.log("Fetching from cache", cache);
      return cache[value];
    } else {
      console.log("Calculating result");
      let result = value + 20;
      cache[value] = result;
      return result;
    }
  };
};

const addition = memoizeAddition();
console.log(addition(20)); // Calculating result
console.log(addition(20)); // Fetching from cache
```
