// Q.1. Write a js program to find the maximum between two numbers.

// 1st Approach

// let p1 = prompt("Enter Price 1:");
// let p2 = prompt("Enter Price 2:");
// // Convert strings to numbers
// p1 = parseInt(p1);
// p2 = parseInt(p2);
// if (p1 > p2) {
//     console.log(`${p1} is greater than ${p2}`);
//     alert(`${p1} is greater than ${p2}`);
// }
// else if (p2 > p1) {
//     console.log(`${p2} is greater than ${p1}`);
//     alert(`${p2} is greater than ${p1}`);
// }
// else {
//     console.log(`${p1} is equal to ${p2}`);
//     alert(`${p1} is equal to ${p2}`);
// }
// 2nd Approach

// let p1 = parseInt(prompt("Enter the first price:"));
// let p2 = parseInt(prompt("Enter the second price:"));
// if (p1 > p2) {
//     console.log(`${p1} is greater than ${p2}`);
//     alert(`${p1} is greater than ${p2}`);
// } else if (p2 > p1) {
//     console.log(`${p2} is greater than ${p1}`);
//     alert(`${p2} is greater than ${p1}`);
// } else {
//     console.log("Both numbers are equal.");
// }


// Q.2. Write a js program to find the maximum between three numbers.

// 1st Approach
// let p1 = prompt("Enter Price 1:");
// let p2 = prompt("Enter Price 2:");
// let p3 = prompt("Enter Price 3:");
//  p1 = parseInt(p1);
//  p2 = parseInt(p2);
//  p3 = parseInt(p3);
// if (p1 > p2 && p1 > p3) {
//     console.log(`${p1} is greater than ${p2} and ${p3}`);
//     alert(`${p1} is greater than ${p2} and ${p3}`);
// } else if (p2 > p1 && p2 > p3) {
//     console.log(`${p2} is greater than ${p1} and ${p3}`);
//     alert(`${p2} is greater than ${p1} and ${p3}`);
// } else {
//     console.log(`${p3} is greater than ${p1} and ${p2}`);
//     alert(`${p3} is greater than ${p1} and ${p2}`);
// }

// 2nd Approach

// let p1 = parseInt(prompt("Enter Price 1:"));
// let p2 = parseInt(prompt("Enter Price 2:"));
// let p3 = parseInt(prompt("Enter Price 3:"));

// if (p1 > p2 && p1 > p3) {
//     console.log(`${p1} is greater than ${p2} and ${p3}`);
//     alert(`${p1} is greater than ${p2} and ${p3}`);
// } else if (p2 > p1 && p2 > p3) {
//     console.log(`${p2} is greater than ${p1} and ${p3}`);
//     alert(`${p2} is greater than ${p1} and ${p3}`);
// } else {
//     console.log(`${p3} is greater than ${p1} and ${p2}`);
//     alert(`${p3} is greater than ${p1} and ${p2}`);
// }

// Q.3. Write a js program to check whether a number is negative, positive or zero.

// let n=parseInt(prompt("Enter your Number:"));

// if(n>0){
//     console.log(`${n} is positive number`);
//     alert(`${n} is positive number`);
// }
// else if(n<0){
//     console.log(`${n} is negative number`);
//     alert(`${n} is negative number`);
// }
// else{
//     console.log(`${n} is equal to zero`)
//     alert(`${n} is equal to zero`);
// }


// Q.4. Write a js program to check whether a number is divisible by 5 and 11 or not.

// let number=parseInt(prompt("Enter your  number:"));

// if (number% 5===0 && number% 11===0){
//     console.log(`${number} is devisible by both 5 and 11`);
//     alert(`${number} is divisible by both 5 and 11`);
// }
// else{
//     console.log(`${number} is not devisible by both 5 and 11`);
//     alert(`${number} is not divisible by both 5 and 11`);
// }

// Q.5. Write a js program to check whether a number is even or odd.

// let number=parseInt(prompt("Enter your  number:"));

// if(number%2===0){
//     console.log(`${number} is even`);
//     alert(`${number} is even`);
// }
// else {
//     console.log(`${number} is odd`);
//     alert(`${number} is odd`);
// }

// Q.6. Write a js program to check whether a year is leap year or not.

//  let number=parseInt(prompt("Enter Year:"));

//  if(number%4===0){
//     console.log(`${number} is a leap year`);
//     alert(`${number} is a leap year`);
//  }
//  else{
//     console.log(`${number} is not a leap year`);
//     alert(`${number} is not a leap year`);
//  }

// Q.7. Write a js program to input any alphabet and check whether it is vowel or consonant.

// let alp = prompt("Enter Any Alphabet:");

// if (alp === 'a' || alp === 'e' || alp === 'i' || alp === 'o' || alp === 'u') {
//     console.log(`${alp} contains a vowel`);
// } else {
//     console.log(`${alp} contains a consonant`);
// }

// To Find vowels in an alphabet

// let alp = prompt("Enter Any Alphabet:");
// let vowelsCount = 0;

// // Convert the input to lowercase for easier comparison
// alp = alp.toLowerCase();

// for (let i = 0; i < alp.length; i++) {
//     if (alp[i] === 'a' || alp[i] === 'e' || alp[i] === 'i' || alp[i] === 'o' || alp[i] === 'u') {
//         vowelsCount++;
//     }
// }

// console.log(`The alphabet '${alp}' contains ${vowelsCount} vowels.`);

// Q.8. Write a js program to check whether a character is uppercase or lowercase alphabet.

// let chr = prompt("Enter a character:");

// if (chr >= 'A' && chr <= 'Z') {
//     console.log(`${chr} is an uppercase alphabet.`);
//     alert(`${chr} is an uppercase alphabet.`);
// } else if (chr >= 'a' && chr <= 'z') {
//     console.log(`${chr} is a lowercase alphabet.`);
//     alert(`${chr} is a lowercase alphabet.`);
// } else {
//     console.log(`${chr} is not an alphabet.`);
//     alert(`${chr} is not an alphabet.`);
// }

// Q.9. Write a js program to input the week number and print weekday.

// let weekNumber = prompt("Enter a week number:");

// weekNumber = parseInt(weekNumber);

// if (weekNumber >= 1 && weekNumber <= 7) {
//     let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//     let weekdayName = weekdays[weekNumber - 1];   it means weekdays at index[0]
//     console.log(`Week number ${weekNumber} corresponds to ${weekdayName}`);
//     alert(`Week number ${weekNumber} corresponds to ${weekdayName}`);
// } else {
//     console.log(`${weekNumber} is not a valid week number`);
//     alert(`${weekNumber} is not a valid week number`);
// }

// Second Method
// let weekNumber = prompt("Enter a week number (1-7):");

// // Convert the input to a number
// weekNumber = parseInt(weekNumber);

// // Initialize variable to store weekday name
// let weekdayName;

// // Switch statement to determine weekday based on week number
// switch (weekNumber) {
//     case 1:
//         weekdayName = "Sunday";
//         break;
//     case 2:
//         weekdayName = "Monday";
//         break;
//     case 3:
//         weekdayName = "Tuesday";
//         break;
//     case 4:
//         weekdayName = "Wednesday";
//         break;
//     case 5:
//         weekdayName = "Thursday";
//         break;
//     case 6:
//         weekdayName = "Friday";
//         break;
//     case 7:
//         weekdayName = "Saturday";
//         break;
//     default:
//         console.log(`${weekNumber} is not a valid week number`);
//         alert(`${weekNumber} is not a valid week number`);
// }

// // If a valid weekday name is found, print it
// if (weekdayName) {
//     console.log(`Week number ${weekNumber} corresponds to ${weekdayName}`);
//     alert(`Week number ${weekNumber} corresponds to ${weekdayName}`);
// }


// Q.10. Write a js program to input the month number and print the number of days in that month.

// Prompt the user to input the month information
// let userInput = prompt("Enter the month name or month number (1-12):");

// let monthNumber = parseInt(userInput);

// let monthNames = [
//     "January", "February", "March", "April",
//     "May", "June", "July", "August",
//     "September", "October", "November", "December"
// ];

// // Object to store the number of days in each month
// let daysInMonth = {
//     1: 31, 2: 28, 3: 31, 4: 30,
//     5: 31, 6: 30, 7: 31, 8: 31,
//     9: 30, 10: 31, 11: 30, 12: 31
// };

// let monthName;
// let numberOfDays;

// if ( monthNumber >= 1 && monthNumber <= 12) {
//     monthName = monthNames[monthNumber - 1];
//     numberOfDays = daysInMonth[monthNumber];
//     } else {
//         console.log("Invalid input. Please enter a valid month name or month number (1-12).");
//         alert("Invalid input. Please enter a valid month name or month number (1-12).");
//     }

// if (monthName && numberOfDays) {
//     console.log(`The month is ${monthName} and it has ${numberOfDays} days.`);
//     alert(`The month is ${monthName} and it has ${numberOfDays} days.`);
// }


// Q.11. Write a js program to count a minimum number of notes in a given amount.

// function notes(){
//     let money = parseInt(prompt("Enter Your Amount:"));
//     let noOfNotes=0;

//     while(money>0) {

//      if(money>=5000){
//         noOfNotes++;
//         money-=5000;
//      }
//          else if (money>=1000){
//             noOfNotes++;
//             money-=1000;
//         }
//         else if(money>=500){
//             noOfNotes++;
//             money-=500;
//         }
//         else if(money>=100){
//             noOfNotes++;
//             money-=100;
//         }
//         else if(money>=50){
//             noOfNotes++;
//             money-=50;
//         }
//         else if(money>=20){
//             noOfNotes++;
//             money-=20;
//         }
//         else if(money>=10){
//             noOfNotes++;
//             money-=10;
//         }
//         else{
//             alert(money+"rupees remained as their value is less than value of any notes");
//         }
//     }
//         alert("Minimum number of notes for their given money are :" +noOfNotes);
//     }

// Second Method


// // Finding minimum notes in a given amount

// let availableNotesAndCoins = [5000, 1000, 500, 100, 50, 20, 10, 5, 2, 1]
// let possibleNotesAndCoins = []
// let amount = 1033
// let noOfNotes = 0

// for (let index = 0; index < availableNotesAndCoins.length; index++) {
//     let notes = Math.floor(amount / availableNotesAndCoins[index])
//     if (notes > 0) {
//         possibleNotesAndCoins.push(availableNotesAndCoins[index])
//         noOfNotes = noOfNotes + notes
//         amount = amount - (availableNotesAndCoins[index] * notes)
//     }
// }

// console.log("no of possible minimum notes & coins: ", noOfNotes);
// console.log("possible minimum notes & coins: ", possibleNotesAndCoins);


// console.log("before loop");

// for (let index = 0; index < 10000000000; index++) {
    
// }

// console.log("before loop");


// Q.12. Write a js program to input marks of five subjects Physics, Chemistry,
// Biology, Mathematics, and Computer. Calculate percentage and grade
// according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 50% : Grade E
// Percentage < 40% : Grade F

// let marks=parseInt(prompt("Enter your marks:"));

// if(marks >=90 && marks <=100){
//     console.log(`According to your percentage your grade is A` );
//     alert(`According to your percentage your grade is A`);
// }
// else if(marks >=80 && marks <=89){
//     console.log(`According to your percentage your grade is B` );
//     alert(`According to your percentage your grade is B`);
// }
// else if(marks >=70 && marks <=79){
//     console.log(`According to your percentage your grade is C` );
//     alert(`According to your percentage your grade is C`);
// }
// else if(marks >=60 && marks <=69){
//     console.log(`According to your percentage your grade is D` );
//     alert(`According to your percentage your grade is D`);
// }
// else if(marks >=50 && marks <=59){
//     console.log(`According to your percentage your grade is E` );
//     alert(`According to your percentage your grade is E`);
// }
// else if(marks >=40 && marks <=49){
//     console.log(`According to your percentage your grade is F` );
//     alert(`According to your percentage your grade is F`);
// }
// else{
//     console.log(`Please Enter yours marks` );
//     alert(`Please Enter yours marks`);
// }

// Q.13. Write a js program to input the basic salary of an employee and calculate
// its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// let salary = parseInt(prompt("Please enter your basic salary:"));

// let hra, da;

// if (salary <= 10000) {
//     hra = 0.20 * salary;  // 20% of basic salary
//     da = 0.80 * salary;   // 80% of basic salary
// } else if (salary <= 20000) {
//     hra = 0.25 * salary;  // 25% of basic salary
//     da = 0.90 * salary;   // 90% of basic salary
// } else {
//     hra = 0.30 * salary;  // 30% of basic salary
//     da = 0.95 * salary;   // 95% of basic salary
// }

// let grossSalary = salary + hra + da;

// console.log(`Your gross salary will be ${grossSalary}`);

// Q.14. Write a js program to input electricity unit charges and calculate total
// electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill

// let elecUnits = parseInt(prompt("Enter your electricity units"));

// let totalBill;

// if (elecUnits <= 50) {
//     totalBill = elecUnits * 0.50;
// } else if (elecUnits <= 150) {
//     totalBill = 50 * 0.50 + (elecUnits - 50) * 75/100;
// } else if (elecUnits <= 250) {
//     totalBill = 50 * 0.50 + 100 * 0.75 + (elecUnits - 150) * 1.20;
// } else {
//     totalBill = 50 * 0.50 + 100 * 0.75 + 100 * 1.20 + (elecUnits - 250) * 1.50;
// }

// // Calculate surcharge
// let surcharge = 0.20 * totalBill;

// // Add surcharge to total bill
// totalBill += surcharge;

// console.log(`Your total electricity bill is Rs. ${totalBill}`);
