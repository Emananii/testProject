
console.log("Script started");

try {
    console.log("Attempting to set item...");
    localStorage.setItem("test", "Hello");
    console.log("Storage set successfully!");

    console.log("Retrieving item...");
    console.log(localStorage.getItem("test"));
} catch (error) {
    console.error("Storage access error:", error);
}

console.log("Script finished running.");

console.log(!true);
console.log(!!"cat");


console.log(!!"cat" == "cat");
console.log(!!true && !"Hello");
console.log(!NaN);
let age = 15;
let message = age > 18 ? "Too young" : "Old enough";
console.log(message);



for (let number = 0; number <= 20; number++) {
    let isPrime = true; // Assume the number is prime

    // Check for even and odd first
    if (number % 2 === 0 && number !== 2) {
        console.log(number + " - This is an even number");
        continue; // Skip prime checking if it's even (except for 2)
    } else if (number % 2 !== 0) {
        console.log(number + " - This is an odd number");
    }

    // Prime number check (only for numbers >= 2)
    if (number < 2) {
        isPrime = false; // 0 and 1 are not prime
    } else {
        for (let i = 2; i < number; i++) { // Check divisibility
            if (number % i === 0) {
                isPrime = false;
                break; // Exit loop early if divisible
            }
        }
    }

    if (isPrime) {
        console.log(number + " - This is a prime number");
    }
}

let myName = "Lorraine"
 if (myName === "Emmanuel") {
    console.log("Hello, Emmanuel!");}
    else {
        console.log("Hello, stranger!");
    }
let x = 0;
let y = 0;
    while (x <10) {
        console.log(x);
        x++;
        y++;
        console.log(y)
    }

    let animalSpecies = "human";
    switch (animalSpecies) {
        case "dog":
            console.log("This is a dog");
            break;
        case "cat":
            console.log("This is a cat");
            break;
        case "fish":
            console.log("This is a fish");
            break;
        default:
            console.log("This is an alien");
    }

    function getMonthName(month){
        month = month--;
        const months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        if(months[month]){
            return months[month];
        } else {
            throw new Error ("Invalid month number");
        }
    }
    try {
        monthName = getMonthName(myMonth) //could throw an exception
    } catch (e){
        monthName = "unknown";
        console.log(e.message);
    }finally {
        console.log("The month name is " + monthName);
    }

    console.log(typeof null);

    const pets = ["cat", "Dog"];
    pets[2] = "Bird";
    console.log(pets);

    console.log(0 == null);
   console.log("hello" === "Hello");
   console.log("hello" == "Hello");

   document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {  // When the user presses "Enter"
        let name = prompt("What is your name?");  // Ask for input
        sayHello(name);  // Call the function with the input
    }
});

   function sayHello(name){
       console.log("Hello, " + name);
   }
    sayHello("Lorraine");
     