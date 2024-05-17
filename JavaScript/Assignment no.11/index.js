//1.JS STRINGS ...

// let data="I do \n not \n know"

// console.log(data); \n means to next line

let nums="abcdefghijklmnopqrstuvwxyz"

// console.log(nums.length);  //string length

// console.log(nums.indexOf("lmno"));  //find substring

// console.log(nums.lastIndexOf("lmno"));  //last occurence

// console.log(nums.slice(3,7)); //cuts that part(defg) (index 3 includes and 7 excludes)

// console.log(nums.replace("abc","123")); //find and replace abc to 123

// console.log(nums.toUpperCase()); //to convert uppercase latters.

// console.log(nums.toLowerCase()); //to convert lowercase latters.

// let num1 = 123;
// let num2 = 456;

// console.log(num1.toString().concat("", num2.toString()));

// console.log(nums.charAt(1)); // to find the chracter at index

// console.log(nums.charCodeAt(2)); //character code at index c .. 99

// console.log(nums.split(",")); //splitting a string on commas

// console.log(nums.split("")); //splitting on chracters

// let num = 128;
// num.toString(16); // Converts the number to hexadecimal: "80"


//2.JS ARRAYS ...

// let num=[1,2,3,4]

// console.log(num.at(1)); //output... 2

// console.log(num.push(5));  //add element to the end.

// console.log(num.pop());     // remove last element.

// console.log(num.fill(1));  // fill every element with 1`

// console.log(num.shift()); // remove first element

// console.log(num.unshift(5)); // add element at start

// console.log(num.reverse());    //sort in descending oreder

// console.log(num.includes(2));  //is array conatin a specified value :true

// console.log(num.map(x => 2 * x));  //x => 2 * x is an arrow function that multiplies each element x of the array by 2.

// console.log(num.filter(item => item>2)); // it will filter the item and give result which is greater than 2.

// console.log(num.find(item=> item>2));  //Find element 3(First Match)

// console.log(num.every(item => item>0));  //check condition here it is true

// console.log(num.findIndex(item => item===2)); //find index of the array which is 1 here.

// console.log(num.reduce((pre,curr)=>pre+curr,0)); //10

// console.log(num.toString());  //convert to string

// console.log(num.join("*"));  //to join 1*2*3*4

// console.log(num.splice(2,0,"i","p")); //add elements

// console.log(num.slice(1,4)); //slice elements

// console.log(num.sort()); // sort elements



//3.JS NUMBERS ...


// let num=3.141

// console.log(num.toFixed(1)); //return 3.1

// console.log(num.toPrecision(2)); //return 3.1

// console.log(num.valueOf());  //return exact value

// console.log(Number(true));  // converts to numbers

// console.log(Number(new Date()));   //number of milisecodns since 1970

// console.log(parseInt("3 months"));   //returns the first number:3

// console.log(parseFloat("3.5 days"));  //returns 3.5

// console.log(Number.MAX_VALUE);  //largest possible js number

// console.log(Number.MIN_VALUE);  // minimum possible js number


//4.JS MATH ...

// console.log(Math.PI);  //3.141592653589793

// console.log(Math.round(4.4));  //4 rounded

// console.log(Math.round(4.5));  //5 rounded

// console.log(Math.pow(2,8));  // 2 to the power of 8 is equal to 256

// console.log(Math.sqrt(64)); // 8 square root.

// console.log(Math.abs(-3.14)); //3.14- absolute value= positive value

// console.log(Math.ceil(3.14));  //4  rounded up

// console.log(Math.floor(3.99)); // 3 rounded down

// console.log(Math.sin(0));  //=0 sine

// console.log(Math.cos(Math.PI)); others atan,tan,asin,acos

// console.log(Math.min(0,3,-2,2));  // -2 the lowest value

// console.log(Math.max(0,3,-2,2));  // 3 the highest value

// console.log(Math.log(1)); // 0 natural logarithm

// console.log(Math.exp(1)); //2.718281828459045(E,x)

// console.log(Math.random()); random number between 0 and 1

// console.log(Math.floor(Math.random() * 5)+1);  // random integer from 1 to 5

//5.JS DATES ...

// console.log(new Date());
// console.log(Date("2017-06-23"));
// console.log(Date("2017"));