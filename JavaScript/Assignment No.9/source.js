// Write JavaScript functions to solve the following string problems:

// a) Return the length of a given string??

// function getStringLength(str) {
//     return str.length;
// }
// let inputString = "Shahzad";
// console.log(getStringLength(inputString));

// b) Concatenate two strings together??

// let calculateTwoStrings= function(str) {
//      return str;
// }
// let str1="Shahzad"
// let str2="Shaukat"
// console.log(calculateTwoStrings(str1+" "+str2));

// c) Determine if a given string is empty??

// function checkString(str){
// if (str===""){
//     return "string is empty";
// }
// else{
//     return "string is not empty";
// }
// }

// let inputStr=""
// console.log(checkString(inputStr));

// d) Count the number of vowels in a string??

// function countVowels(str) {
//     let countVowels=0
//     str=str.toLowerCase();
//     for (let i = 0; i < str.length; i++) {
//         let char=str.charAt(i);
//         if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u"){
//             countVowels++;
//         }  
//     }
//     return countVowels;
// }

// let input="Shahzad Shaukat"
// console.log(countVowels(input));



// e) Reverse a given string??
// function reverseString(str) {
//     let reverseStr="";
//     str=str.toLowerCase();
//     for (let i = str.length-1; i >=0 ; i--) {
//         reverseStr += str.charAt(i);
//     }

//     return reverseStr;
// }

// let input="Shahzad"

// console.log(reverseString(input));

// f) Check if a string is a palindrome??

// function checkPalindrome(str) {
//     let reverseStr=""
//     for (let i =str.length-1; i>=0; i--) {
//         reverseStr += str.charAt(i)
//     }
//         if(str === reverseStr){
//             return "it is a palidrome";
//         }
//         else{
//             return "it is not a palidrome";
//         }
        
    
// }
// let input="asad"
// console.log(checkPalindrome(input));


// g) Convert a string to uppercase??
// function toChangeString (name){
//     return name.toUpperCase();
// }

// let input="Shahzad"
// console.log(toChangeString(input));


// h) Find the first occurrence of a given character in a string??

// function firstOccurence(name) {
//     return name.charAt(0);
// }

// let str="Shahzad"
// console.log(firstOccurence(str));

// i) Replace all occurrences of a given character in a string with another character??

// function replaceStr(str) {
//     return str.replace("Asad", "Aman")
// }
// let input="Asad"
// let output="Aman"
// console.log(replaceStr(input));

// j) Trim leading and trailing whitespace from a string??

// function removeSpaces(str) {
//     return str.trim();
// }

// let input =" Hello , My Name is Shahzad! "
// console.log(removeSpaces(input));


// k) Count the number of words in a string??

// function countWords(str) {
//     let newStr=0
//     if(str!==""){
//          newStr++;
//     }
//    return newStr;
// }

// let input="Shahzad"
// console.log(countWords(input));

// l) Check if a string contains only numeric characters??
// function checkStr(str) {
//     let numericRegex = /^[0-9]+$/;
//        if  (!numericRegex.test(str)){

//         return "string does not contain numeric letters only";
//        }
//        else{
//         return "string  contain numeric letters only";
//        }
    
//     }
// let input="Shahzad"
// console.log(checkStr(input));


// m) Check if a string is a valid email address???

// function checkEmail(email) {
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Define the regular expression
    
//     if (emailRegex.test(email)) { // Use test() method to check if the email matches the pattern
//         return "It is a valid email address";
//     } else {
//         return "It is not a valid email address";
//     }
// }

// let input = "shahzad@email";
// console.log(checkEmail(input));

// n) Extract the domain name from a URL string??

// function extractDomain(url) {
//     // Regular expression to match the domain name
//     let domainRegex = /(?:https?:\/\/)?(?:www\.)?([^\/]+)/;
//     // Match the domain name and extract it from the URL
//     let match = url.match(domainRegex);
//     // Return the matched domain name
//     return match && match[1]; // The domain name is captured in the first capturing group
// }

// let url = "https://www.example.com/path/to/page";
// console.log(extractDomain(url)); // Output: example.com


// o) Convert a string into title case (the first letter of each word capitalized)??
// function convertStr(str) {
//     // Split the string into an array of words
//     let words = str.split(" ");
    
//     // Iterate through each word and capitalize the first letter
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);

//     }
    
//     // Join the words back into a single string
//     return words.join(" ");
// }

// let input = "my name is shahzad";
// console.log(convertStr(input)); // Output: My Name Is Shahzad


// p) Remove all non-alphabetic characters from a string??

// function checkCharacter(str) {
//     // Loop through each character of the string
//     for (let i = 0; i < str.length; i++) {
//         // Check if the character is not alphabetic
//         if (!(str[i] >= 'a' && str[i] <= 'z') && !(str[i] >= 'A' && str[i] <= 'Z')) {
//             return "It contains non-alphabetic characters";
//         }
//     }
//     // If all characters are alphabetic, return a message indicating so
//     return "It contains only alphabetic characters";
// }

// let input = "shahzad";
// console.log(checkCharacter(input));


// q) Check if a string is a valid palindrome permutation (ignoring spaces)??

// function checkPalindrome(str) {
//     let reversedStr = "";

//     // Create the reversed string
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
//     }

//     // Compare the original string with its reverse
//     if (str === reversedStr) {
//         return "It is a valid palindrome";
//     } else {
//         return "It is not a valid palindrome";
//     }
// }

// let input = "wow";
// console.log(checkPalindrome(input)); // Output: It is a valid palindrome



// r) Check if a string is an anagram of another string??


// function checkPalindrome(str) {
//     let reversedStr = "";

//     // Create the reversed string
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversedStr += str[i];
        
//     }
//     return reversedStr;
// }

// let input = "ashaf";
// console.log(checkPalindrome(input)); // Output: It is a valid palindrome


// s) Find the longest word in a string??
// function longestWord(str) {

//     let words=str.split(" ");

//     let longestWord = "";
//     let maxLength = 0;
//     // Iterate through each word in the array
//     for (let word of words) {
//         // Check if the current word is longer than the longest word found so far
//         if (word.length > maxLength) {
//             // Update the longest word and its length
//             longestWord = word;
//             maxLength = word.length;
//         }
//     }

//      // Return the longest word found
//       return longestWord;
// }

// let input="Shahzad Ashaf Huzaifa";
// console.log(longestWord(input));

// t) Perform string compression by replacing repeated characters with the character followed by the count??

// function strComp(str) {
//         let compressed = "";
//         let count = 1;
//         // Iterate through each character of the string
//         for (let i = 0; i < str.length; i++) {
//             // If the current character is the same as the next one, increase the count
//             if (str[i] === str[i + 1]) {
//                 count++;
//             } else {
//                 // If the current character is different from the next one, add it to the compressed string
//                 compressed += str[i] + count;
//                 // Reset the count for the next character
//                 count = 1;
//             }
//         }
    
//         // Return the compressed string
//         return compressed.length < str.length ? compressed : str; 
// }
// let input="aaaabbbbcccc";
// console.log(strComp(input));