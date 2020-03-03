// console.log('Hello World')

// String,Number, Boolean, null , undefined
// const name = "Jihen";
// const age = 25;
// const rating = 4.25;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof z)




//  Template String
// const hello = `My name is ${name} and I am ${age}`
// console.log(hello)

// const s= "Hello world"
// console.log(s.substring(0,5).toUpperCase())
// console.log(s.split(''))

// const str= 'technology, computer, code, javascript'
// console.log(str.split(', '))




// Arrays
// Arrays - variables that  holds multiples values
// const numbers = new Array(1,2,3,4,5)
// console.log(numbers)

// const fruits = ["apples", "oranges", "pears"];
// fruits.unshift('grapes')
// fruits.push('bannana')
// fruits.pop()

// check fruits is an array we use Arry.isArray()
// console.log(Array.isArray(fruits))

// check the index of grapes
// console.log(fruits.indexOf('grapes'))
// console.log(fruits);





// Object literals
// const person = {
//     firstname:'Jhon',
//     lastname:'doe',
//     age:30,
//     hobbies: ['music','movies','sports'],
//     adress:{
//         street:'5 main st',
//         city:'Boston',
//         state:'MA'
//     }
// }

// console.log(person.hobbies[1])
// console.log(person.adress.city)

// const {firstname,lastname, adress:{city}}=person
// const from='from'
// console.log(firstname,from,city)

// person.email ='jdoe@gmail.com'
// console.log(person)







// Array of todos
// const todos = [
//   {
//     id: 0,
//     text: "take out the trash",
//     isCompleted: true
//   },
//   {
//     id: 1,
//     text: "grossorises shopping",
//     isCompleted: false
//   },
//   {
//     id: 2,
//     text: "cleaning the house",
//     isCompleted: false
//   }
// ];
// console.log(todos[1].text)





// JSON
// const todoJSON =JSON.stringify(todos)
// console.log(todoJSON)

//  Loops through arrays
// for(let i=0; i<10;i++){
// console.log(`For Loop Number: ${i}`)
// }
// while
// let i=0;
// while(i<10){
//     console.log(`while Loop Number: ${i}`)
//     i++
// }
// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i].text);
// }

// for(let todo of todos){
//     console.log(todo.text)
// }






// high order Array methodes
// ForEach, map, filter
// todos.forEach(function(todo){
//     console.log(todo.text)
// })
// const todoText = todos.map(function(todo){
//     return todo.text
// })
// console.log(todoText)
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted===true
// })
// console.log(todoCompleted)
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted===true
// }).map((todo)=>{
//     return todo.text
// })
// console.log(todoCompleted)




// Conditionals
// const molk=24
// const ahmed=28

// if(molk===24){
//     console.log('molk is 24')
// }else if (molk>24) {
//     console.log('molk is older than 24')
// }else {
//     console.log('molk is younger than 24')
// }

// if(molk <25 && ahmed <29){
//     console.log('molk is younger than 25 or ahmed is younger than 29')
// }






// Ternary operator
// const x = 0;
// const color = x > 10 ? "red" : "blue";
// console.log(color);

// Switches
// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("color is NOT red or blue");
//     break;
// }






// Functions
// function addNums(num1=1,num2=1){
//     return num1+ num2
// }
// console.log(addNums(5,5))
// const addNums = (num1 = 1, num2 = 1) => num1 + num2;
// console.log(addNums(5, 5));






// Object-oriented programming OOP && prototypes
// Constractor function
// function Person(firstname, lastname, dob) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.dob = new Date(dob);
// //   this.getBirthYear=()=>{
// //       return this.dob.getFullYear()
// //   }
//   this.getFullName = ()=> {
//       return `${this.firstname} ${this.lastname}`
//   }
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear()
// }
// Person.prototype.getFullName = function(){
//     return `${this.firstname} ${this.lastname}`
// }


// Class
// class Person {
//     constructor(firstname, lastname, dob){
//         this.firstname = firstname;
//   this.lastname = lastname;
//   this.dob = new Date(dob);
//     }
//     getBirthYear(){
//         return this.dob.getFullYear()
//     }
//     getFullName(){
//         return `${this.firstname} ${this.lastname}`  
//     }
// }


// // Instantiate object
// const person1 = new Person("Jhon", "Doe", "01/01/1980");
// const person2 = new Person("Jane", "Doe", "05/28/1990");
// const person3 = new Person("Mary", "Doe", "05/28/1990");
// // console.log(person2.dob);
// console.log(person1.getBirthYear())
// console.log(person1.getFullName())
// console.log(person1)



// DOM
