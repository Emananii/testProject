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
//         area = width * height;
//         return area;
//     }

//     console.log(calculateArea(20, 30));

    let x = 0;
    let y = 0;
    labelCancelLoops:// label for my outerloop
    while (x <= 10) {
        console.log("outer loops (x): ", x);
        x+=1;
        y=1;
        while (y <=1000){
            console.log("Inner loops (y): ", y);
            y += 1;
            if(y===20 && x===10) {
                console.log("Breaking out of both loops");
                break labelCancelLoops; 
            } else if (y > 20) {
                console.log("Y is greater than 20");
                break;
            }
        }
    }    