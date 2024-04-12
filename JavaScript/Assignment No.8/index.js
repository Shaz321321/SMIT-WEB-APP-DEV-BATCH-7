// Q.1. Write a JS code to print numbers from 1 to 10

// for (let index = 0; index < 11; index++) {
//     console.log(index);
    
// } 

// Q.2. Write a JS code to print Even numbers in given 

// let num=[2,3,4,7,8,9,6]

// for (let i= 0; i < num.length; i++) {

//  if (num[i]%2==0) {

//     console.log(num[i]);
//  }
// }

// Q.3. Write a JS code to delete all occurrence of element in given array

// let deletionValue = 3

// let nums = [3, 2, 4, 2, 4, 5, 6, 3, 5,3, 4]

// console.log("before deletion occurances of ", deletionValue, " in nums -> ", nums);

// for(let index = 0; index < nums.length; index++){
//     if (nums[index] == deletionValue) {
//         // delete this occurance of the given number in array
//         nums.splice(index, 1)
//     }
// }

// console.log("after deletion occurances of ", deletionValue, " in nums -> ", nums);


// Q.4. Write a JS code to find the power of a number using for loop

// let base = parseFloat(prompt("Enter the base number:"));
// let exponent = parseInt(prompt("Enter the exponent:"));

// let result = 1;

// // Multiply base by itself 'exponent' times
// for (let i = 0; i < exponent; i++) {
//     result *= base;
// }

// console.log(`${base}   raised to the power of   ${exponent}   is   ${result}`);
// alert(`${base}   raised to the power of   ${exponent}   is   ${result}`);

// Q.5. Write a JS code to print a pattern using for loop
/* 1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
1 2 3 4 5 6
1 2 3 4 5 6 7
1 2 3 4 5 6 7 8 */

// Outer loop for rows
// for (let i = 1; i <= 8; i++) {
//     let pattern = ""; // Initialize an empty string for each row
    
//     // Inner loop for columns
//     for (let j = 1; j <= i; j++) {
//         pattern += j + " "; // Add numbers to the pattern string
//     }
    
//     console.log(pattern); // Print the pattern for each row
// }

// // 6. Write a JS code to find the no of digits in a number

// First Method

// let number = 10304;
// let count = 0;

// // Keep dividing the number by 10 until it becomes 0
// while (number !== 0) {
//     // Increment the count for each division
//     count++;
//     // Remove the last digit by integer division
//     number = Math.floor(number / 10);
// }

// console.log(`Number of digits in 10305 is ${count}`);


// Second Method
// Ask the user to enter a number
// let number = prompt("Please enter a number:");

// // Convert the input string to a number
// number = parseInt(number);

// let count = 0;

// // Keep dividing the number by 10 until it becomes 0
// while (number !== 0 && !isNaN(number)) {
//     // Increment the count for each division
//     count++;
//     // Remove the last digit by integer division
//     number = Math.floor(number / 10);
// }

// console.log("Number of digits in the entered number is", count);
// alert(`Number of digits in the entered number is, ${count}`);

// console.log("count -> ", count);

// // 7. Write a JS code to calculate the sum of digits in a number

// let num = 1030

// let sum = 0

// while (num >= 1) {
//     sum = Math.floor(sum + num % 10)
//     num = Math.floor(num / 10)
// }

// console.log(`sum  is ${sum}`);

// second method
// Prompt the user to enter a number
// let number = parseInt(prompt("Enter a number:"));

// // Check if the input is a valid number
// if (!isNaN(number)) {
//     let numberString = number.toString(); // Convert the number to a string
//     let sum = 0; // Initialize the sum of digits to 0

//     // Iterate over each character in the string representation of the number
//     for (let i = 0; i < numberString.length; i++) {
//         // Convert each character back to a number and add it to the sum
//         sum += parseInt(numberString[i]);
//     }

//     console.log("Sum of digits in", number, "is", sum);
// } else {
//     console.log("Invalid input. Please enter a valid number.");
// }


// // 8. Write a JS code to find the largest number in an array

// let nums = [1, 12, 23, 34, 599, 3567, 5678]


// let max = -Infinity

// for (let index = 0; index < nums.length; index++) {
//     if (max < nums[index]) {
//         max = nums[index]
//     }
// }

// console.log(max);

// Second Method

// let numbers = [1, 12, 23, 34, 599, 3567, 2678]

// // Assume the first number in the array is the largest
// let largest = numbers[0];

// // Iterate through the array starting from the second element
// for (let i = 1; i < numbers.length; i++) {
//     // If the current number is greater than the current largest number
//     if (numbers[i] > largest) {
//         // Update the largest number
//         largest = numbers[i];
//     }
// }

// console.log(`The largest number in the array is ${largest}`);
// alert(`The largest number in the array is ${largest}`);



// // 9. Write a JS code to print the Fibonacci series for a given value of N

// let e1 = 0
// let e2 = 1
// let n = 10

// for (let index = 2; index < n; index++) {
//     let temp = e1  //before updating e1
//     e1 = e2        //updating e1 to e2
//     e2 = e2 + temp

//     console.log(e2);
// }

// console.log("e2 after loop ", e2);



//Q.10. Write a JS code to find duplicate values in a given array


// let array = [1, 2, 3, 4, 5, 6, 7, 7, 8];

// for (let i = 1; i < array.length; i++) {
//     if (array[i] === array[i - 1]) {
//         console.log(`Duplicate number is ${array[i]}`);
//     }
// }


//Q.11. Write a JS code for Linear search algorithm


// let array = [3, 1, 4, 2, 5];
// let target = 4;
// let found = false;

// // Iterating through the array
// for (let i = 0; i < array.length; i++) {
//     // Checking if the current element is equal to the target
//     if (array[i] === target) {
//         // If found, set found to true and break out of the loop
//         found = true;
//         break;
//     }
// }

// // Checking if the target was found
// if (found) {
//     console.log(`Target ${target} found in the array`);
// } else {
//     console.log(`Target ${target} not found in the array`);
// }



// 12. Write a JS code for Binary search algorithm

// let nums = [1, 12, 23, 34, 599, 3567, 5678]
// let num = 3567

// let start = 0
// let end = nums.length - 1

// let ansLocation = -1

// while(start <= end){
//     let mid = Math.floor((start + end) / 2)

//     if (nums[mid] == num) {
//         ansLocation = mid
//         break
//     }

//     if(nums[mid] < num){
//         start = mid + 1;
//     } else {
//         end = mid - 1
//     }
// }


// console.log(ansLocation);

