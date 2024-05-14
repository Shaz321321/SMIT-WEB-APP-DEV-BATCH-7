// Task 1: Object Creation

// Create an empty object and assign it to a variable.
// Create an object with properties for name, age, and profession.

// let object={} //created an empty object
//  let person={
//     name:"Shahzad",
//     age:31,              // created an obejct with name,age and profession.
//     profession:"Student"
//  }


// Task 2: Object Properties

// Access and print the values of properties from an object.
// Modify the value of a property in an object.
// Add a new property to an existing object.

// let person = {
//     name: "Shahzad",
//     age: 31,             
//     profession: "Student"
// };

// // Access and Print the values of the object
// console.log(person);

// // Modify the value of a property in the object
// person.profession = "Engineer";
// console.log(person); // Updated profession to "Engineer"

// // Adding a new property to the existing object
// person.DOB = "10-10-1993";

// // Print the updated object with the new property
// console.log(person);



// Task 3: Object Methods

// Create an object method that prints a message to the console.
// Create a method that calculates and returns a value based on object properties.

// let object = {
//     name: "Shahzad",
//     age: 30,
//     profession: "Engineer",
    
//     // Object method that prints a message to the console
//     printMessage: function() {
//         console.log("Hello from object method!");
//     },
    
//     // Method that calculates and returns a value based on object properties
//     calculateValue: function() {
//         return this.age * 2;
//     }
// };
// console.log(object); // Print the object
// // Call the object method to print a message
// object.printMessage();

// // Call the method to calculate and return a value based on object properties
// let calculatedValue = object.calculateValue();
// console.log(calculatedValue); // Print the calculated value


// Task 4: Object Iteration

// Iterate over the properties of an object and print their values.
// Iterate over the properties of an object and perform a specific action for each property.

// let person={
//     firstName:"Shahzad",
//     fName:"Shahzad Shaukat",
//     age:30,
//     Profession:"Student",
//     run: function () {
//         return "Shahzad  is working."
//     }
// }

// console.log(Object.values(person));
//  for (const property in person) {

//     console.log(property) // for getting keys
//     if (property=="runs") {
//         console.log(person[property]())  // for calling specific run function
        
//     }
//     else {
//         console.log(person[property])// for getting values
//         }
// } 



// Task 5: Object Comparison

// Compare two objects to check if they have the same properties and values.
// Compare two objects to check if they refer to the same object in memory.

// let Obj={
//         name:"Shahzad",
//         age:30,
//         rollNumber:218584,
//         fName:"Shaukat Ali",
//         Profession:"Student"

// }
// let Obj2={
//         name:"Shahzad",
//          age:30,
//         rollNumber:218584,
//          fName:"Shaukat Ali",
//         Profession:"Student" 
//     }
// if(JSON.stringify(Obj) === JSON.stringify(Obj2)){
//     console.log("Objects have same values and properties");
// }
// else{
//     console.log("Objects have not same values and properties");
// }

// // Compare two objects to check if they refer to the same object in memory
// if (Obj === Obj2) {
//     console.log("Objects refer to the same object in memory");
// } else {
//     console.log("Objects do not refer to the same object in memory");
// }



// Task 6: Object Nesting

// Create an object that contains another object as one of its properties.
// Access and modify properties of a nested object.

// let Obj={
//     fullName:"Shahzad Shaukat",
//     Obj1:{name:"Shahzad",
//     age:30,
//     rollNumber:218584,
//      fName:"Shaukat Ali",
//     Profession:"Student"
// } 
// }

// console.log(Obj.Obj1.age);
// console.log(Obj.fullName);


// Task 7: Object Prototypes

// Create a prototype object and use it to create multiple instances of objects.
// Add a method to the prototype object and observe its effect on the instances.

// Defined a prototype object
// let PersonPrototype = {
//     greet: function() {
//         return "Hello, my name is " + this.name + " and I'm " + this.age + " years old.";
//     }
// };

// // Create instances of objects using Object.create() and assign the prototype object
// let person1 = Object.create(PersonPrototype);
// person1.name = "Alice";
// person1.age = 30;

// let person2 = Object.create(PersonPrototype);
// person2.name = "Bob";
// person2.age = 25;

// // Call the method defined on the prototype
// console.log(person1.greet()); 
// console.log(person2.greet());


// Task 8: Object Serialization

// Convert an object to a JSON string using JSON.stringify().
// Parse a JSON string and convert it back to an object using JSON.parse().

// let obj={
//     name:"Shahzad",
//     fName:"Shahzad Shaukat",
//     age:30,
//     profession:"Student"
// }
// // Convert object to JSON string
// let jsonString = JSON.stringify(obj);
// console.log(jsonString);

// // Parse JSON string back to an object
// let parsedObj = JSON.parse(jsonString);
// console.log(parsedObj);



// Task 9: Object Destructuring

// Use object destructuring to extract specific properties from an object.

// Object with properties
// let person = {
//     firstName: "Muhammad",
//     lastName: "Hassan",
//     age: 1
// };

// // Object destructuring
// let { firstName, lastName, age } = person;

// console.log(firstName);
// console.log(lastName);  
// console.log(age);       


// Task 10: Object Property Enumeration

// Use Object.keys() to get an array of all the property names of an object.

// let person = {
//     firstName: "Muhammad",
//     lastName: "Hassan",
//     age: 1
// };

// console.log(Object.keys(person));

// Task 11: Object Inheritance

// Create a parent object and a child object that inherits properties and methods from the parent.

//Using Object Literals (Composition):
// Parent object
// let parent = {
//     name: "Shahzad"
// };

// // Child object composed of parent object
// let child = Object.create(parent);
// child.name="Hassan"
// child.age = 5;

// console.log(parent);
// console.log(child);  



// Task 12: Object Privacy

// Create private properties in an object using closures or symbols.


//Using Closures:

// function createPerson(name, age) {
//     // Private variables
//     let _name = name;
//     let _age = age;
    
//     // Public methods accessing private variables
//     return {
//         getName: function() {
//             return _name;
//         },
//         setName: function(newName) {
//             _name = newName;
//         },
//         getAge: function() {
//             return _age;
//         },
//         setAge: function(newAge) {
//             _age = newAge;
//         }
//     };
// }

// let person = createPerson("Shahzad", 30);
// console.log(person.getName()); 
// console.log(person.getAge()); 

// person.setName("Hassan");
// person.setAge(25);
// console.log(person.getName()); 
// console.log(person.getAge());  


//Using Symbols(only know this method):

// let nameSymbol = Symbol();
// let ageSymbol = Symbol();

// let person = {
//     [nameSymbol]: "Shahzad",
//     [ageSymbol]: 30,
    
//     getName: function() {
//         return this[nameSymbol];
//     },
//     setName: function(newName) {
//         this[nameSymbol] = newName;
//     },
//     getAge: function() {
//         return this[ageSymbol];
//     },
//     setAge: function(newAge) {
//         this[ageSymbol] = newAge;
//     }
// };

// console.log(person.getName()); 
// console.log(person.getAge());  

// person.setName("Hassan");
// person.setAge(25);
// console.log(person.getName()); 
// console.log(person.getAge());  
