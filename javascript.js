// // console.log("Script started");

// // try {
// //     console.log("Attempting to set item...");
// //     localStorage.setItem("test", "Hello");
// //     console.log("Storage set successfully!");

// //     console.log("Retrieving item...");
// //     console.log(localStorage.getItem("test"));
// // } catch (error) {
// //     console.error("Storage access error:", error);
// // }

// // console.log("Script finished running.");

// // console.log(!true);
// // console.log(!!"cat");


// // console.log(!!"cat" == "cat");
// // console.log(!!true && !"Hello");
// // console.log(!NaN);
// // let age = 15;
// // let message = age > 18 ? "Too young" : "Old enough";
// // console.log(message);



// // for (let number = 0; number <= 20; number++) {
// //     let isPrime = true; // Assume the number is prime

// //     // Check for even and odd first
// //     if (number % 2 === 0 && number !== 2) {
// //         console.log(number + " - This is an even number");
// //         continue; // Skip prime checking if it's even (except for 2)
// //     } else if (number % 2 !== 0) {
// //         console.log(number + " - This is an odd number");
// //     }

// //     // Prime number check (only for numbers >= 2)
// //     if (number < 2) {
// //         isPrime = false; // 0 and 1 are not prime
// //     } else {
// //         for (let i = 2; i < number; i++) { // Check divisibility
// //             if (number % i === 0) {
// //                 isPrime = false;
// //                 break; // Exit loop early if divisible
// //             }
// //         }
// //     }

// //     if (isPrime) {
// //         console.log(number + " - This is a prime number");
// //     }
// // }

// // let myName = "Lorraine"
// //  if (myName === "Emmanuel") {
// //     console.log("Hello, Emmanuel!");}
// //     else {
// //         console.log("Hello, stranger!");
// //     }
// // let x = 0;
// // let y = 0;
// //     while (x <10) {
// //         console.log(x);
// //         x++;
// //         y++;
// //         console.log(y)
// //     }

// //     let animalSpecies = "human";
// //     switch (animalSpecies) {
// //         case "dog":
// //             console.log("This is a dog");
// //             break;
// //         case "cat":
// //             console.log("This is a cat");
// //             break;
// //         case "fish":
// //             console.log("This is a fish");
// //             break;
// //         default:
// //             console.log("This is an alien");
// //     }

// //     function getMonthName(month){
// //         month = month--;
// //         const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// //         if(months[month]){
// //             return months[month];
// //         } else {
// //             throw new Error ("Invalid month number");
// //         }
// //     }
// //     try {
// //         monthName = getMonthName(myMonth) //could throw an exception
// //     } catch (e){
// //         monthName = "unknown";
// //         console.log(e.message);
// //     }finally {
// //         console.log("The month name is " + monthName);
// //     }

// //     console.log(typeof null);

// //     const pets = ["cat", "Dog"];
// //     pets[2] = "Bird";
// //     console.log(pets);

// //    console.log(0 == null);
// //    console.log("hello" === "Hello");
// //    console.log("hello" == "Hello");

   
// //    function sayHello(name){
// //        console.log("Hello, " + name);
// //    }
// //    let myThirdName = "Allan";
// //    sayHello(myThirdName);
// //    sayHello("Allan");
// //     sayHello("Lorraine");
     

// //     let mySpace; //initialization
// //     mySpace = 10; //assignment
// //     console.log(mySpace);
    
// //     let myFirstName = "Evans"; //initialized and assigned
// //     console.log(myFirstName);

// //     let myAge = 20; //initialize and assigned
// //     let myNewAge = myAge; //initialized and assigned
// //     console.log(myNewAge);

// //     let mySecondAge = [0, 1, 2, 3, 4];
// //     let myNewSecondAge = mySecondAge;
// //     console.log(myNewSecondAge);
// //     console.log(mySecondAge == [0, 1, 2, 3, 4]);
// //     let newString = "08808";
// //     console.log(newString);

// //     let newNumber = 10;
// //     function timesTwo(newNumber){
// //         return newNumber * 2;
// //     }

// //     console.log(timesTwo(newNumber));

// //     console.log(timesTwo(30));

// //     //testing out how referencing in non-primitive data types works
// //     personAge = 20;
// //     let objectPerson = {firstName : "John Doe", personAge};
// //     let objectPerson2 = objectPerson;
// //     console.log("Objectperson2 = ", objectPerson2.firstName);
// //     objectPerson2.personAge = 30;
// //     console.log("Objectperson = ", objectPerson.personAge);

// //     //arrays are ordered objects so I'm testing to contrast how both work
// //     let myFirstArray = ["Hello", "There"];
// //     let myFIrstObject = {second: "Hello", first: "There"};
// //     console.log(myFirstArray);
// //     console.log(myFIrstObject);

   

// //     function calculateArea(width, height){
// //         let area = width * height;
// //         return area;
// //     }

// //     console.log(calculateArea(20, 30));

//     // let x = 0;
//     // let y = 0;
//     // labelCancelLoops:// label for my outerloop
//     // while (x <= 10) {
//     //     console.log("outer loops (x): ", x);
//     //     x+=1;
//     //     y=1;
//     //     while (y <=1000){
//     //         console.log("Inner loops (y): ", y);
//     //         y += 1;
//     //         if(y===20 && x===10) {
//     //             console.log("Breaking out of both loops");
//     //             break labelCancelLoops; 
//     //         } else if (y > 20) {
//     //             console.log("Y is greater than 20");
//     //             break;
//     //         }
//     //     }
//     // }    

//     //continue statement

//     // for(let i=0; i < 10; i++){
//     //     if (i===3){
//     //         continue;
//     //     }
//     //     console.log(i);
//     // }


//     // let i = 0;
//     // let n = 0; 

//     //  while (i<5){
//     //      i++;
//     //      if (i === 3){
//     //          continue;
//     //      }
//     //      n += i;
//     //      console.log(n);
//     //  }

//     //  let i = 0;
//     //  let j = 10;

//     //  checkiandj:
//     //  while(i < 4){
//     //     console.log(i);
//     //     i+=1;
//     //     checkj: while( j > 4){
//     //         console.log(j)
//     //         j -= 1;
//     //         if (j % 2 == 0) {
//     //             continue checkj;
//     //         }
//     //         console.log(j, " is odd")
//     //     }
//     //     console.log("i = ", i);
//     //     console.log("j = ", j);
//     //  }

//      //for.. of statement

//     //  let arr = [3, 5, 7];

//     //  for (let i = 0; i < arr.length; i++){ 
//     //      console.log(arr[i]);
//     //  }

//     //  const name = "james";
//     //  for(let i = 0; i<name.length; i++){
//     //      console.log(name[i]);
//     //  }

//     //  let arr1 = [3, 5, 7];
//     //  for(let i of arr1){
//     //      console.log(i);
//     //  }

//     //  console.log("FOR-LOOP");
//     //  for (let i in arr1){
//     //      console.log(i);
//     //  }

//     //  //for..in statement

//     //  let car = {
//     //     make: "Toyota",
//     //     model: "Camry",
//     //     year: 2020
//     //  }
//     //  for (let key in car){
//     //     console.log(key, car[key]);
//     //  }


//     //function declaration

//     // function sum(a, b){
//     //     return a + b;
//     // }

//     // console.log(sum("james", "john"));

//     // function multiply(a, b){
//     //     const area = a * b;
//     //     return area;
//     // }

//     // console.log(multiply(2, 3));

//     // function addSquare (a,b){
//     //     function square (x){
//     //         return x * x;
//     //     }
//     //     return square(a) + square(b);
//     // }
    
//     // console.log(addSquare(2, 3));

//     // function myFunction(a, b){
//     //     console.log(a*b);
//     // }

//     // myFunction(2, 3);

//     // function countdown(n){
//     //     if (n <= 0){ /**This is the base case which is basically a condition that stops the
//     //                 recursion preventing a stack overflow due to infinite recursion **/
//     //         console.log("No countdown necessary. You're in space");
//     //         return; //this is actually what stops the recursion.
//     //     }
//     //     console.log(n);// return the countdown after checking the base condition
//     //     countdown(n-1); /**recursive call. The function calls itself with a lower value for n.
//     //                      So this will run until n hits 0 then the base condition stops it
//     //                      otherwise the condition would have run forever into the negatives**/
//     // }

//     // countdown(20);


// //     //function for getting factorials using ternary
// //     const factorial = function fac(n){
// //         return n < 2 ? 1 : n * fac(n-1);
// //     }

// //     console.log(factorial(3));
// // //function for getting factorials using if else
// //     const factorial2 = function fact(n){
// //         if (n===0 || n===1){
// //             return 1;
// //     } else {
// //         return n * factorial(n-1);
// //     }
// // }

// //     console.log(factorial2(4));

// //     function map(f,a){
// //         const result = new Array(a.length);
// //         for (let i=0; i<a.length; i++){
// //             result[i] = f(a[i]);
// //         }

// //         return result;
// //     }

// //     const cubedFunc = function cubed(x){
// //         return x * x * x; 
// //     }

// //     const numbers = [0, 1, 2, 5, 10]; 
// //     const cubedNumbers = map(cubedFunc, numbers);
// //     console.log(cubedNumbers);

// //     let newFunc;

// //     // if (num===0){
// //     //     newFunc=function(car){
// //     //         car.make= "Bugatti";
// //     //     }
// //     // }

// //     console.log(cubedFunc(2));

// //     function loop(x){
// //         if (x >= 10){
// //             return console.log("This is a loop");
// //         }
// //         loop (x + 1);
// //     }

// //     console.log(loop(0));

// //     //arrow functions
// //     const sum = (a, b) => a + b;

// //     const squares = x => x*x;
// //     const greet = () => "Hello, world!";

// //     const cubes= (x) =>{
// //         const result= x * x * x;
// //         return result
// //     }
// //     console.log(sum(3,5));
// //     console.log(squares(3));
// //     console.log(greet());
// //     console.log(cubes(3));

// //     const a = ["hydrogen", "helium", "lithium", "beryllium"]; 
// //     const a2 = a.map(function(s){
// //         return s.length;
// //     })

// //     const a3 = a.map(s =>s.length)
// //     console.log(a2);
// //     console.log(a3);

// // function multiply(multiplier, ...Args){
// //     return Args.map(x => multiplier * x);
// // }

// // const arr = multiply(2, 1, 2, 3);
// // console.log(arr);

// // function getThis(){
// //     return this;
// // }

// // const obj1 = {name: "obj1"};
// // obj1.getThis = getThis;
// // console.log(obj1);

// // //console.log(obj1.getThis());

// // function Person(){
// //     //the Person () constructor defines 'this' as itself
// //     const self = this;
// //     self.age = 0;

// //     setInterval(function growUp(){
// //         self.age++;
// //         console.log(self);
// //     }, 1000);
// //     console.log(self);  
// // }
// // const p = new Person();
// // console.log(p);

// //indexed collections aka arrays
// // const emp= ["joan" , "rude", "lazy"];  
// // console.log(emp);
// // const empire= new Array(3);
// // console.log(empire);
// // const emp2 = new Array("john", 'jude');
// // console.log(emp2);
// // console.log(emp2.length);
// // const people = {
// //     0: "Gina",
// //     1: "Rina"
// // }

// // console.log(typeof people);

// // const paragraphs = document.getElementsByTagName('p');
// // console.log(paragraphs);

// // // for (let i= 0; p; (p= paragraphs[i]); i++){
// // //     console.log(paragraphs[i]);
// // // }

// // const colors = ["red", "green", "blue"];

// // for (let color in colors){
// //     console.log(colors[color]);
// // }
// // colors.forEach(color=>console.log(color));

// // let text="";
// // let cars=["BMW", "Volvo","Saab", "Ford"];
// // for (let i = 0; i < cars.length; i++) {
// //     text += cars[i] + "<br>";
// //     console.log(cars[i]);
// //     console.log(text);  
// //   }
//                 //key  value
// //   let obj1 = {name: "John", age: 30, city: "New York"};

// // //for in loops iterate over keys
// //   for (let key in obj1){
// //       console.log(obj1[key]);
// //   }
// //    let array1 = ["John", "Doe", "Jane", "Doe"];

// //    for (let arrayKey in array1){
// //     if (arrayKey >1){
// //         break;
// //     }
// //     console.log(array1[arrayKey]);
// //    }

// // //for of loops iterate over values

// // let array2 = ["Brian", "Allan", "Me", "You"];

// // for (let value of array2){
// //     console.log(value);
// // }

// // let obj2 = {name: "John", age: 30, city: "New York"};

// // for (let value of Object.values(obj2)){
// //     console.log(obj2[value]);
// // }

// // const colors = ["red", "green", "blue"];

// // // for (let color in colors){
// // //      console.log(colors[color]);
// // //  }
// // colors.forEach(color=>console.log(color));
// // colors.forEach(function(col){
// //     console.log(col);
// // })

// // function say(greeting, firstName) {
// //     return greeting + firstName;
// //    }
 
// //    console.log(multiply(2, 3));
 
// //    console.log(say("Hello, ", "John"));
// //   //let scopeTest = '10'; //Global variable
// //   //function declaration
// //    function multiply(firstNumber, secondNumber){
// //          let scopeTest = firstNumber * secondNumber; //local variable
// //          return scopeTest;
// //    }
 
// //    //fuction expression
// //    let functionExpression = function add(number1, number2){
// //        return number1 + number2;
// //    }
 
// //    console.log(functionExpression(2, 3));
// //    console.log(functionExpression);
 
// //    //arrowfunction
// //      let arrowFunction = (number1, number2) =>
// //          number1 + number2;
 
// //      console.log(arrowFunction(2,3));
 
//      /* Javascript runs in 2 phases. IN the first phase, it goes through the entire code
//      in milliseconds.While doing this it picks up very specific things eg. function declarations
//      ** so when javascript actually starts executing line by line it already knows theres a
//      function declaration somewhere*/
 
//      //GEc => global execution context
//      //function declarations
//      //variables : var, let, const
//      //Var => undefined;
//      //let and const => ReferenceError; They are put in something called a temporal deadzone.

// //Array methods 
// //Concat method => this method is used to merge two or more arrays and returns a new array
// let myArr = ["John", "Doe", "Jane", "Doe", null, true, 5 + 1];
// let newArr = myArr.concat(1, 2, 3);

// console.log(newArr);
// console.log(myArr);

// //Join method => this method joins all elements of an array into a string
// const list = myArr.join("--");
// console.log(list);
// console.log(myArr);
// console.log(typeof(list));

// //push method
// const result = newArr.push(4,5,6);
// newArr.push(4);
// console.log(newArr);
// console.log(result);

// //pop method=> this method removes the last element of an array and returns it
// newArr.pop();
// console.log(newArr);

// //SHIFT => removes the first element of an array and returns it
// const shiftValue = newArr.shift();
// console.log(shiftValue);
// console.log(newArr);

// //UNSHIFT => kind of like the push method but it adds something to the front of the array instead
// const unshifResult = newArr.unshift("Brian", "Allan");
// console.log(newArr);
// console.log(unshifResult);

// //SLICE => the slice method extracts a section of an array and returns a new array
// const sliceValue = newArr.slice(1,7);
// console.log(newArr);
// console.log(sliceValue);

// //AT => returns the element at a specified index in an array
// const atValue = newArr.at(-2);
// console.log(atValue);

// //testing join method
// let arr2 = ["John", 10 +10];
// console.log(arr2);
// const joinValue = arr2.join(" ");
// console.log(joinValue);

// /**SPLICE => it modifies the contents of an array,removes existing elements, replaces them,
//  * or adds new elements in their place and returns the removed elements
//  */

// //syntax of splice explained
// /* splice (start) => if start > length of the array, nothing will be deleted
//  * splice (start, deletecount)
//  * splice (start, deletecount, item1)
//  * splice (sart, deletecount, item1 ....itemN) */

// //example 1
// const spliceValue = arr2.splice(1, 0, "Doe");
// console.log(arr2);
// console.log(spliceValue);

// //example2
// const months = ["Jan", "March", "April", "June"];
// const splicedMonths = months.splice(0, 2, "Feb");
// console.log(months);
// console.log(splicedMonths);

// //example3
// const myFishes = ['angel', 'clown', 'mandarin', 'sturgeon'];
// const removed = myFishes.splice(2, 3, 'drum');
// console.log(myFishes);
// console.log(removed);

// //Reverse => this method reverses the elements in an array
// const reversed = myFishes.reverse();
// console.log(reversed);
// console.log(myFishes);

// /* flat() => creates a new array with all sub-array elements concatenated
//              into it recursively up to the specified depth*/

// let numArr = [1,2,3, [4,5,[6,7,[8,9]]]];
// console.log(numArr);
// numArr = numArr.flat(2);
// console.log(numArr);

// const myObj = {
//     favoriteNumber: 42,
//     isDeveloper: true,
//     firstname: "Oh",
//     newthing: 'new'
// }

// const propDesc = Object.getOwnPropertyDescriptor(myObj, "favoriteNumber");
// console.log(propDesc);
// const anotherObj={};
// console.log(anotherObj);
// Object.defineProperty(anotherObj, "fave", propDesc);
// console.log(anotherObj);


// let myList = [23, 42, 100];
// myList[14] = "Hello";
// console.log(myList[9]);
// console.log(myList.length);

// //practising arrow functions

// let sum = (a, b) => a + b;
// console.log(sum(2, 3));
// //let age = prompt("What is your age?");
// //let welcome = (age < 18) ?
// //() => alert("Hello") :
// //() => alert("Greetings!");
// //welcome();

// //function expression

// let sum2 = function(a, b){
//     return a + b;
// }
// console.log(sum2(10,20));
// let newName = prompt("What is your name?");
// let promptTest = (newName == "John") ? () => alert("Hey there buddy!!") :
// () => alert("Intruder detected! Activating self-defence mode");
// promptTest();

//sort()

// const myArray =  ["Wind", "Rain", "Fire"];
// let sortedResult = myArray.sort();
// console.log(myArray);
// console.log(sortedResult);

// const sortFn = (a,b) => {
//     if (a[a.length-1] < b[b.length-1]){
//         return -1;//means that a should come before b
//     } else if (a[a.length - 1]> b[b.length -1]){
//         return 1;//means that a should come before b
//     }
//     return 0;
// }
// const result = myArray.sort(sortFn);
// console.log(result);

// const array1 = [1, 30, 4, 21, 1000];
// console.log(array1.sort());

// const numberArray = [40, 1, 5, 200];
// const numericStringArray = ["80", "9", "700"];
// const mixedNumericArray = ["80", "9", "700", 40 , 1, 5, 200];

// function compareNumbers (a,b){
//     return a - b;
// }

// console.log(numberArray.sort());
// console.log(numberArray.sort(compareNumbers));

// //sorting Array of objects
// const items = [
//     {name: "Edward", value: 21},
//     {name: "Sharpe", value: 37},
//     {name: "And", value: 45},
//     {name: "The", value: -12},
//     {name: "Magnetic", value: 21},
//     {name: "Zeroes", value: 37},
// ]

// //sort by value
// console.log(items.sort((a,b) => a.value - b.value));

// //sort by name
// console.log(items.sort((a,b) =>{
//     const nameA = a.name.toUpperCase();
//     const nameB = b.name.toUpperCase();
//     if (nameA < nameB){
//         return -1;
//     } else if(nameA>nameB){
//         return 1;
//     }
//     return 0;
    
// }))

// //indexOf
// const array = ["a", "b", "a", "b", "a"];

// console.log(array.indexOf("b"));
// console.log(array.indexOf("b", 2));
// console.log(array.indexOf("2"));

// //lastIndexOf()
// console.log(array.lastIndexOf("b", 4));

// //forEach => performs a specified action for each element in an array
// const arr = ["a", "b", "c"];
// const callBack = element => {
//     console.log(element.toUpperCase());
// }

// arr.forEach(callBack);

// //map method
// const mappedArr = arr.map(element => element.toUpperCase());

// console.log(arr);
// console.log(mappedArr);

// const numbers = [1,2,4];
// const root = numbers.map(elements => Math.sqrt(elements));
// console.log(numbers);
// console.log(root);  

// const kvArray = [
//     {key: 1, value: 10},
//     {key: 2, value: 20},
//     {key: 3, value: 30},
// ]

// const reformatArray = kvArray.map(({key, value}) => ({[key]: value}));
// console.log(kvArray);
// console.log(reformatArray);

//sort with map
//traverse the array once
//extract the actual value used for sorting
//sort the temp array
//transverse the temp arr to achieve the right order

const data = ["delta", "alpha", "charlie", "bravo"]

const someSlowOps = value => value.toUpperCase();

//temp arr hold obj position and sort value
const mapped = data.map((v, i) => {
    return {i, value: someSlowOps(v), length: v.length}
}); 
console.log(data);
console.log(mapped);
//sort the map arr containing the reduced val
mapped.sort((a,b) => {
    if(a.value < b.value){
        return -1;
    } else if (a.value > b.value){
        return 1;
    }
    return 0;
})
console.log(mapped);
const newResult = mapped.map((v) =>data[v.i]);
console.log(newResult);

const arrTest = ["a", "b", "c"];

arrTest.map((element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
});