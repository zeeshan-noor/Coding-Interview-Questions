// 1. Reverse a String
// Input: "hello"
// Output: "olleh"

const handleOnReverseString = (string) => {
  // let reverseStr = string.split('').reverse().join(''); // First Technique
  // return reverseStr;

  // Second Technique
  let reversed = "";
  for (let char = string.length - 1; char >= 0; char--) {
    reversed += string[char];
  }
  return reversed;
};

// console.log(handleOnReverseString("Hello"));

// ********************************

// 2. Check if a String is a Palindrome
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

const checkOnPalindrome = (string) => {
  // First Technique
  // let removeWhiteSpace = string.replace(/\W/g, '').toLowerCase(); // NEED TO TEST
  const reverseStr = (str) => [...str].reverse().join("");
  return reverseStr(string) == string;
};

// console.log(checkOnPalindrome("madam"));
// console.log(checkOnPalindrome("hello"));

// ********************************

//3. Remove Duplicates from a String
// Input: "banana"
// Output: "ban"

const handleOnDuplicateChar = (string) => {
  let result = {};
  let result2 = "";

  for (let i = 0; i < string.length; i++) {
    let elem = string[i];
    // if (!result[i]) result[elem] = elem;                   // First Technique
    if (!result2.includes(string[i])) result2 += string[i]; // Seconde Technique
  }
  //   return Object.keys(result).join("");
  let removeDuplicate = [...new Set(string)].join(""); // Third Technique
  return result2;
};

// console.log(handleOnDuplicateChar("banana"));

// ********************************

//4. Find the First Non-Repeating Character
// Input: "aabbcdd"
// Output: "c"

// Input: "aabbcc"
// Output: null

function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    // The indexOf() method searches the string from the beginning to the end.
    // The lastIndexOf() method searches the string from the end to the beginning.
    // return index value of element 0,1,2 etc
    // console.log(str.indexOf(str[i]),"===",str.lastIndexOf(str[i]));

    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return str[i];
    }
  }
  return null;
}

// console.log(firstNonRepeatingChar("aabbcdd"));
// console.log(firstNonRepeatingChar("aabbcc"));

// function firstNonRepeatingChar(str) {
  // Step 1: Count frequency of each character
//   let freq = {};
//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     if (freq[ch] === undefined) {
//       freq[ch] = 1;
//     } else {
//       freq[ch]++;
//     }
//   }

  // Step 2: Find first character with frequency 1
//   for (let i = 0; i < str.length; i++) {
//     if (freq[str[i]] === 1) {
//       return str[i];
//     }
//   }

//   return null; // if no non-repeating character
// }

// Example
// console.log(firstNonRepeatingChar("aabbcdd")); // c
// console.log(firstNonRepeatingChar("aabb"));    // null

// ********************************

// 5. Count the Occurrences of Each Character
// Input: "apple"
// Output:{
//   a: 1,
//   p: 2,
//   l: 1,
//   e: 1
// }

const handleOnOccurrence = (str) => {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    result[char] = (result[char] || 0) + 1;
  }
  return result;
};

// console.log(handleOnOccurrence("apple"));

// ********************************
// 6. Reverse Words in a Sentence
// Input: "Hello world from ChatGPT"
// Output: "ChatGPT from world Hello"

let reverseWords = (str) => {
  return str.split(" ").reverse().join(" ");
};

// console.log(reverseWords("Hello world from ChatGPT"));

// ********************************
//7. Check if Two Strings are Anagrams
// Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false

const checkAnagram = (str1, str2) => {
  if (str1.length != str2.length) return false;
  let sortStr = (str) => str.split("").sort().join("");
  return sortStr(str1) === sortStr(str2);
};

// console.log(checkAnagram("listen","silent"));
// console.log(checkAnagram("hello","world"));

// ********************************
//9. Convert a String to an Integer (Atoi Implementation)
// Input: "123"
// Output: 123
// Input: "-45"
// Output: -45
function myAtoi(str) {
  let num = 0,
    sign = 1,
    i = 0;

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

// console.log(myAtoi("123"));   // 123
// console.log(myAtoi("-45"));   // -45

// ********************************
// 10. Compress a String (Run-Length Encoding)
// Input: "aaabbc"
// Output: "a3b2c1"

const handleOnCompressStr = (str) => {
  let result = "",
    counter = 1;
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

// console.log(handleOnCompressStr("aaabbc"));

// ********************************

//  11. Find the Most Frequent Character
// Input: "javascript"
// Output: "a" (or another character if there’s a tie — first one encountered)

const findMostFrequent = (str) => {
  let result = "",
    max = 0,
    freq = {};

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
    if (freq[char] > max) {
      max = freq[char];
      result = char;
    }
  }
  return result;
};

// console.log(findMostFrequent("javascript"));

// ********************************

//12. Find All Substrings of a Given String
// Input: "abc"
// Output: [ 'a', 'ab', 'abc', 'b', 'bc', 'c' ]

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

// console.log(getAllSubstrings("abc"));
// Output: ['a', 'ab', 'abc', 'b', 'bc', 'c']

// ********************************

// 16. Convert a String to Title Case
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"

const convertStringTitle = (str) => {
  return str
    .split(" ")
    .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1).toLowerCase())
    .join(" ");
};

// console.log(convertStringTitle("hello world from javascript"));

//************************************/
// 17. Find the Longest Common Prefix
// Input: ["flower", "flow", "flight"]
// Output: "fl"
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

// console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"

//************************************/

// 19. Replace Spaces with %20 (URL Encoding)
// Input: "Mr John Smith"
// Output: "Mr%20John%20Smith"

function urlEncode(str) {
  let result = "";
  const urlEncode = (str) => str.replace(/ /g, "%20");
  for (let char of str) {
    result += char === " " ? "%20" : char;
  }
  return result;
}

// console.log(urlEncode("Mr John Smith")); // "Mr%20John%20Smith"

//*****************************************/

//20. Convert a Sentence into an Acronym
// Input: "Portable Network Graphics"
// Output: "PNG"

function toAcronym(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}

// console.log(toAcronym("Portable Network Graphics")); // "PNG"

//*****************************************/

// The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones,
//  usually starting with 0 and 1. The sequence typically begins: 0, 1, 1, 2, 3, 5, 8, 13, 21, and so on.
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

// Example Usage:
// console.log("Iterative (n=0):", fibonacciIterative(0)); // Output: [0]
// console.log("Iterative (n=1):", fibonacciIterative(1)); // Output: [0, 1]
// console.log("Iterative (n=5):", fibonacciIterative(3)); // Output: [0, 1, 1, 2]
// console.log("Iterative (n=5):", fibonacciIterative(5)); // Output: [0, 1, 1, 2, 3, 5]
// console.log("Iterative (n=10):", fibonacciIterative(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// ------------ fibonacciRecursive -------------> //

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

// Example Usage:
// console.log("Recursive ", fibonacciRecursive(4)); // Output: 3 (the 3rd Fibonacci number)
// console.log("Recursive (n=0):", getFibonacciSeriesRecursive(0)); // Output: [0]
// console.log("Recursive (n=1):", getFibonacciSeriesRecursive(1)); // Output: [0, 1]
// console.log("Recursive (n=5):", getFibonacciSeriesRecursive(5)); // Output: [0, 1, 1, 2, 3, 5]
// console.log("Recursive (n=10):", getFibonacciSeriesRecursive(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



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

// Example Usage:
// console.log("Iterative (0!):", factorialIterative(0));   // Output: 1
// console.log("Iterative (1!):", factorialIterative(1));   // Output: 1
// console.log("Iterative (5!):", factorialIterative(5));   // Output: 120
// console.log("Iterative (10!):", factorialIterative(10)); // Output: 3628800
// console.log("Iterative (-3!):", factorialIterative(-3)); // Output: Factorial is not defined for negative numbers.


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

// Example Usage:
// console.log("Recursive (0!):", factorialRecursive(0));   // Output: 1
// console.log("Recursive (1!):", factorialRecursive(1));   // Output: 1
// console.log("Recursive (5!):", factorialRecursive(5));   // Output: 120
// console.log("Recursive (10!):", factorialRecursive(10)); // Output: 3628800
// console.log("Recursive (-3!):", factorialRecursive(-3)); // Output: Factorial is not defined for negative numbers.


//*******************************************/

//Given a string s containing three types of brackets () Determine whether the Expression are balanced or not. output: ())())

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
      console.log("I'm here ==>",pairs[char]);
      
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false; // mismatch
      }
    }
  }

  return stack.length === 0; // must be empty if balanced
}

// Example usage:
// console.log(isBalanced("()"));        // true
// console.log(isBalanced("(()())"));    // true
// console.log(isBalanced("())())"));    // false
console.log(isBalanced("{[()]}"));    // true
console.log(isBalanced("{[(])}"));    // false


// LeetCode 167 – Two Sum II (Input array is sorted)
// //**Example 1:

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
// Example 2:

// Input: numbers = [2,3,4], target = 6
// Output: [1,3]
// Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
// Example 3:

// Input: numbers = [-1,0], target = -1
// Output: [1,2]
// Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2]. */

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

// console.log(twoSum([2,7,11,15],9));
// console.log(twoSum([2,3,4],6));
// console.log(twoSum([-1,0],-1));
// console.log(twoSum([2,7,11,15],9));




//Flatten a Deeply Nested Array
// You are given an array that may contain nested arrays of arbitrary depth.
// Your task is to flatten the array into a single-level array, preserving the original order of elements.
// INPUT  --> [1, 2, 3, 4, [5, 6, [7, 8]]]
// OUTPUT --> [1, 2, 3, 4, 5, 6, 7, 8]

const handleOnFlattenArray = ()=>{
    const array = [1,2,3,4,[5,6,[7,8]]];
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
return result
}

// console.log(handleOnFlattenArray()); // [1,2,3,4,5,6,7,8]

// Second Recursive Solution
const array = [1, 2, 3, 4, [5, 6, [7, 8]]];

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

const output = flatten(array);
// console.log(output); // [1,2,3,4,5,6,7,8]














//******************** call, apply, and bind *********************************/
// let emp = {firstName:'Zeeshan', lastName:"Noor"}

// function handleOnCallMethod(greeting1,greeting2) {
//     console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
// }

// handleOnCallMethod.call(emp,'Hi',"How are you ??")

// let emp = {firstName:'Zeeshan', lastName:"Noor"}

// function handleOnApplyMethod(greeting1,greeting2) {
//     console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
// }

// handleOnApplyMethod.apply(emp,['Hi',"How are you ??"])

// let emp = {firstName:'Zeeshan', lastName:"Noor"}

// function handleOnBindMethod(greeting1,greeting2) {
//     console.log(`${greeting1} ${this.firstName} ${this.lastName} ${greeting2}`);
// }

// var invokeBind = handleOnBindMethod.bind(emp)
// invokeBind('Hi',"How are you ??")
// invokeBind('Hello',"How are you doing Today??")

//*****************************************************/

// Slice Method --> The slice() method does not mutate (change) the original array; instead, it returns a new array containing the extracted elements.
// let arrayIntegers = [1, 2, 3, 4, 5];
// let result = arrayIntegers.slice(0,3)
// console.log({result});
// console.log(arrayIntegers);

// Splice Method --> The splice() method in JavaScript is used to add, remove, or replace elements within an array
// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let result = arrayIntegersOriginal1.splice(1,0,10)
// // let result = arrayIntegersOriginal1.splice(1,1)
// // let result = arrayIntegersOriginal1.splice(1,0,10,20)
// // console.log(result);
// console.log(arrayIntegersOriginal1);

// IIFE (Immediately Invoked Function Expression)

// (function () {
//   var message = "IIFE";
//   console.log(message);
// })();
// console.log(message); //Error: message is not defined

// Memoization
// const memoizeAddition = () => {
//   let cache = [];
//   return (value) => {
//     if (value in cache) {
//       console.log("Fetching from cache",cache);

//       return cache[value];
//     } else {
//       console.log("Calculating result");
//       let result = value + 20;
//       cache[value] = result;
//       return result;
//     }
//   };
// };

// const addition = memoizeAddition();
// console.log(addition(20)); //output: 40 calculated
// console.log(addition(20)); //output: 40 cached
