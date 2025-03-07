// console.log("Script started");

// try {
//     console.log("Attempting to set item...");
//     localStorage.setItem("test", "Hello");
//     console.log("Storage set successfully!");

//     console.log("Retrieving item...");
//     console.log(localStorage.getItem("test"));
// } catch (error) {
//     console.error("Storage access error:", error);
// }

// console.log("Script finished running.");

// console.log(!true);
// console.log(!!"cat");


// console.log(!!"cat" == "cat");
// console.log(!!true && !"Hello");
// console.log(!NaN);
// let age = 15;
// let message = age > 18 ? "Too young" : "Old enough";
// console.log(message);



// for (let number = 0; number <= 20; number++) {
//     let isPrime = true; // Assume the number is prime

//     // Check for even and odd first
//     if (number % 2 === 0 && number !== 2) {
//         console.log(number + " - This is an even number");
//         continue; // Skip prime checking if it's even (except for 2)
//     } else if (number % 2 !== 0) {
//         console.log(number + " - This is an odd number");
//     }

//     // Prime number check (only for numbers >= 2)
//     if (number < 2) {
//         isPrime = false; // 0 and 1 are not prime
//     } else {
//         for (let i = 2; i < number; i++) { // Check divisibility
//             if (number % i === 0) {
//                 isPrime = false;
//                 break; // Exit loop early if divisible
//             }
//         }
//     }

//     if (isPrime) {
//         console.log(number + " - This is a prime number");
//     }
// }

// let myName = "Lorraine"
//  if (myName === "Emmanuel") {
//     console.log("Hello, Emmanuel!");}
//     else {
//         console.log("Hello, stranger!");
//     }
// let x = 0;
// let y = 0;
//     while (x <10) {
//         console.log(x);
//         x++;
//         y++;
//         console.log(y)
//     }

//     let animalSpecies = "human";
//     switch (animalSpecies) {
//         case "dog":
//             console.log("This is a dog");
//             break;
//         case "cat":
//             console.log("This is a cat");
//             break;
//         case "fish":
//             console.log("This is a fish");
//             break;
//         default:
//             console.log("This is an alien");
//     }

//     function getMonthName(month){
//         month = month--;
//         const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//         if(months[month]){
//             return months[month];
//         } else {
//             throw new Error ("Invalid month number");
//         }
//     }
//     try {
//         monthName = getMonthName(myMonth) //could throw an exception
//     } catch (e){
//         monthName = "unknown";
//         console.log(e.message);
//     }finally {
//         console.log("The month name is " + monthName);
//     }

//     console.log(typeof null);

//     const pets = ["cat", "Dog"];
//     pets[2] = "Bird";
//     console.log(pets);

//    console.log(0 == null);
//    console.log("hello" === "Hello");
//    console.log("hello" == "Hello");

   
//    function sayHello(name){
//        console.log("Hello, " + name);
//    }
//    let myThirdName = "Allan";
//    sayHello(myThirdName);
//    sayHello("Allan");
//     sayHello("Lorraine");
     

//     let mySpace; //initialization
//     mySpace = 10; //assignment
//     console.log(mySpace);
    
//     let myFirstName = "Evans"; //initialized and assigned
//     console.log(myFirstName);

//     let myAge = 20; //initialize and assigned
//     let myNewAge = myAge; //initialized and assigned
//     console.log(myNewAge);

//     let mySecondAge = [0, 1, 2, 3, 4];
//     let myNewSecondAge = mySecondAge;
//     console.log(myNewSecondAge);
//     console.log(mySecondAge == [0, 1, 2, 3, 4]);
//     let newString = "08808";
//     console.log(newString);

//     let newNumber = 10;
//     function timesTwo(newNumber){
//         return newNumber * 2;
//     }

//     console.log(timesTwo(newNumber));

//     console.log(timesTwo(30));

//     //testing out how referencing in non-primitive data types works
//     personAge = 20;
//     let objectPerson = {firstName : "John Doe", personAge};
//     let objectPerson2 = objectPerson;
//     console.log("Objectperson2 = ", objectPerson2.firstName);
//     objectPerson2.personAge = 30;
//     console.log("Objectperson = ", objectPerson.personAge);

//     //arrays are ordered objects so I'm testing to contrast how both work
//     let myFirstArray = ["Hello", "There"];
//     let myFIrstObject = {second: "Hello", first: "There"};
//     console.log(myFirstArray);
//     console.log(myFIrstObject);

   

//     function calculateArea(width, height){
//         let area = width * height;
//         return area;
//     }

//     console.log(calculateArea(20, 30));

    // let x = 0;
    // let y = 0;
    // labelCancelLoops:// label for my outerloop
    // while (x <= 10) {
    //     console.log("outer loops (x): ", x);
    //     x+=1;
    //     y=1;
    //     while (y <=1000){
    //         console.log("Inner loops (y): ", y);
    //         y += 1;
    //         if(y===20 && x===10) {
    //             console.log("Breaking out of both loops");
    //             break labelCancelLoops; 
    //         } else if (y > 20) {
    //             console.log("Y is greater than 20");
    //             break;
    //         }
    //     }
    // }    

    //continue statement

    // for(let i=0; i < 10; i++){
    //     if (i===3){
    //         continue;
    //     }
    //     console.log(i);
    // }


    // let i = 0;
    // let n = 0; 

    //  while (i<5){
    //      i++;
    //      if (i === 3){
    //          continue;
    //      }
    //      n += i;
    //      console.log(n);
    //  }

    //  let i = 0;
    //  let j = 10;

    //  checkiandj:
    //  while(i < 4){
    //     console.log(i);
    //     i+=1;
    //     checkj: while( j > 4){
    //         console.log(j)
    //         j -= 1;
    //         if (j % 2 == 0) {
    //             continue checkj;
    //         }
    //         console.log(j, " is odd")
    //     }
    //     console.log("i = ", i);
    //     console.log("j = ", j);
    //  }

     //for.. of statement

    //  let arr = [3, 5, 7];

    //  for (let i = 0; i < arr.length; i++){ 
    //      console.log(arr[i]);
    //  }

    //  const name = "james";
    //  for(let i = 0; i<name.length; i++){
    //      console.log(name[i]);
    //  }

    //  let arr1 = [3, 5, 7];
    //  for(let i of arr1){
    //      console.log(i);
    //  }

    //  console.log("FOR-LOOP");
    //  for (let i in arr1){
    //      console.log(i);
    //  }

    //  //for..in statement

    //  let car = {
    //     make: "Toyota",
    //     model: "Camry",
    //     year: 2020
    //  }
    //  for (let key in car){
    //     console.log(key, car[key]);
    //  }


    //function declaration

    // function sum(a, b){
    //     return a + b;
    // }

    // console.log(sum("james", "john"));

    // function multiply(a, b){
    //     const area = a * b;
    //     return area;
    // }

    // console.log(multiply(2, 3));

    // function addSquare (a,b){
    //     function square (x){
    //         return x * x;
    //     }
    //     return square(a) + square(b);
    // }
    
    // console.log(addSquare(2, 3));

    // function myFunction(a, b){
    //     console.log(a*b);
    // }

    // myFunction(2, 3);

    // function countdown(n){
    //     if (n <= 0){ /**This is the base case which is basically a condition that stops the
    //                 recursion preventing a stack overflow due to infinite recursion **/
    //         console.log("No countdown necessary. You're in space");
    //         return; //this is actually what stops the recursion.
    //     }
    //     console.log(n);// return the countdown after checking the base condition
    //     countdown(n-1); /**recursive call. The function calls itself with a lower value for n.
    //                      So this will run until n hits 0 then the base condition stops it
    //                      otherwise the condition would have run forever into the negatives**/
    // }

    // countdown(20);


//     //function for getting factorials using ternary
//     const factorial = function fac(n){
//         return n < 2 ? 1 : n * fac(n-1);
//     }

//     console.log(factorial(3));
// //function for getting factorials using if else
//     const factorial2 = function fact(n){
//         if (n===0 || n===1){
//             return 1;
//     } else {
//         return n * factorial(n-1);
//     }
// }

//     console.log(factorial2(4));

//     function map(f,a){
//         const result = new Array(a.length);
//         for (let i=0; i<a.length; i++){
//             result[i] = f(a[i]);
//         }

//         return result;
//     }

//     const cubedFunc = function cubed(x){
//         return x * x * x; 
//     }

//     const numbers = [0, 1, 2, 5, 10]; 
//     const cubedNumbers = map(cubedFunc, numbers);
//     console.log(cubedNumbers);

//     let newFunc;

//     // if (num===0){
//     //     newFunc=function(car){
//     //         car.make= "Bugatti";
//     //     }
//     // }

//     console.log(cubedFunc(2));

//     function loop(x){
//         if (x >= 10){
//             return console.log("This is a loop");
//         }
//         loop (x + 1);
//     }

//     console.log(loop(0));

//     //arrow functions
//     const sum = (a, b) => a + b;

//     const squares = x => x*x;
//     const greet = () => "Hello, world!";

//     const cubes= (x) =>{
//         const result= x * x * x;
//         return result
//     }
//     console.log(sum(3,5));
//     console.log(squares(3));
//     console.log(greet());
//     console.log(cubes(3));

//     const a = ["hydrogen", "helium", "lithium", "beryllium"]; 
//     const a2 = a.map(function(s){
//         return s.length;
//     })

//     const a3 = a.map(s =>s.length)
//     console.log(a2);
//     console.log(a3);

// function multiply(multiplier, ...Args){
//     return Args.map(x => multiplier * x);
// }

// const arr = multiply(2, 1, 2, 3);
// console.log(arr);

// function getThis(){
//     return this;
// }

// const obj1 = {name: "obj1"};
// obj1.getThis = getThis;
// console.log(obj1);

// //console.log(obj1.getThis());

// function Person(){
//     //the Person () constructor defines 'this' as itself
//     const self = this;
//     self.age = 0;

//     setInterval(function growUp(){
//         self.age++;
//         console.log(self);
//     }, 1000);
//     console.log(self);  
// }
// const p = new Person();
// console.log(p);

//indexed collections aka arrays
// const emp= ["joan" , "rude", "lazy"];  
// console.log(emp);
// const empire= new Array(3);
// console.log(empire);
// const emp2 = new Array("john", 'jude');
// console.log(emp2);
// console.log(emp2.length);
// const people = {
//     0: "Gina",
//     1: "Rina"
// }

// console.log(typeof people);

// const paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs);

// // for (let i= 0; p; (p= paragraphs[i]); i++){
// //     console.log(paragraphs[i]);
// // }

// const colors = ["red", "green", "blue"];

// for (let color in colors){
//     console.log(colors[color]);
// }
// colors.forEach(color=>console.log(color));

// let text="";
// let cars=["BMW", "Volvo","Saab", "Ford"];
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
//     console.log(cars[i]);
//     console.log(text);  
//   }
                //key  value
//   let obj1 = {name: "John", age: 30, city: "New York"};

// //for in loops iterate over keys
//   for (let key in obj1){
//       console.log(obj1[key]);
//   }
//    let array1 = ["John", "Doe", "Jane", "Doe"];

//    for (let arrayKey in array1){
//     if (arrayKey >1){
//         break;
//     }
//     console.log(array1[arrayKey]);
//    }

// //for of loops iterate over values

// let array2 = ["Brian", "Allan", "Me", "You"];

// for (let value of array2){
//     console.log(value);
// }

// let obj2 = {name: "John", age: 30, city: "New York"};

// for (let value of Object.values(obj2)){
//     console.log(obj2[value]);
// }

// const colors = ["red", "green", "blue"];

// // for (let color in colors){
// //      console.log(colors[color]);
// //  }
// colors.forEach(color=>console.log(color));
// colors.forEach(function(col){
//     console.log(col);
// })

//Array methods 
//Concat method => this method is used to merge two or more arrays and returns a new array
let myArr = ["John", "Doe", "Jane", "Doe", null, true, 5 + 1];
let newArr = myArr.concat(1, 2, 3);

console.log(newArr);
console.log(myArr);

//Join method => this method joins all elements of an array into a string
const list = myArr.join("--");
console.log(list);
console.log(myArr);
console.log(typeof(list));

//push method
const result = newArr.push(4,5,6);
newArr.push(4);
console.log(newArr);
console.log(result);

//pop method=> this method removes the last element of an array and returns it
newArr.pop();
console.log(newArr);

//SHIFT => removes the first element of an array and returns it
const shiftValue = newArr.shift();
console.log(shiftValue);
console.log(newArr);

//UNSHIFT => kind of like the push method but it adds something to the front of the array instead
const unshifResult = newArr.unshift("Brian", "Allan");
console.log(newArr);
console.log(unshifResult);

//SLICE => the slice method extracts a section of an array and returns a new array
const sliceValue = newArr.slice(1,7);
console.log(newArr);
console.log(sliceValue);

//AT => returns the element at a specified index in an array
const atValue = newArr.at(-2);
console.log(atValue);

//testing join method
let arr2 = ["John", 10 +10];
console.log(arr2);
const joinValue = arr2.join(" ");
console.log(joinValue);

/**SPLICE => it modifies the contents of an array,removes existing elements, replaces them,
 * or adds new elements in their place and returns the removed elements
 */

const spliceValue = arr2.splice(1, 0, "Doe");
console.log(arr2);
console.log(spliceValue);