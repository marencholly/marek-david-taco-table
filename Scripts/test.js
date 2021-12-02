// alert("Hey there!");
console.log("Hello World!");

// Variables strings are bunches of characters, integers are numbers
let firstName = "Marek";
console.log(firstName);
let lastName = "Holly";
console.log(lastName);
console.log(firstName + lastName);

// Concatenate
console.log("My name is " + firstName + " " + lastName);
let classNumber = 6;
let className = "Web Design Part 6";
// New Concatenation
console.log(`My name is ${firstName} ${lastName}.`);

// Constants
const idNumber = 64827284382;

// Getting Elements
const header = document.querySelector("header");
console.log(header);
const links = document.querySelectorAll(".nav-link");
console.log(links);

// Arrays (Lists)
const navButtonOne = links[0];
console.log(navButtonOne);
let studentNames = ["Nyima", "David", "Aanya", "Eileen", "Michelle"];
let student2 = studentNames[1];
// older javascript will see us using var instead of let
// don't use var anymore

// Length
let numberOfStudents = studentNames.length;
console.log(numberOfStudents);

// Change our HTML
const h1 = document.querySelector("h1");
h1.innerHTML = "Nyima and David's Taco Table";

const ctaButton = document.querySelector(".cta-button");
ctaButton.innerHTML = `Make a Reservation Here`;

// Adding and Removing Classes
const ctaHeader = document.querySelector(".cta-header");
ctaHeader.classList.add("red-font"); //classList does not take in periods
ctaHeader.classList.remove("red-font");
console.log(ctaHeader.classList.contains("red-font"));
// extra classList method ... toggle
// ctaHeader.classList.toggle("red-font");

// Functions
function redToggle() {
    ctaHeader.classList.toggle("red-font");
}

// Event Listeners
ctaHeader.addEventListener('click', redToggle);

// Functions with Loops
// If Loops

function sayHello() {
    // this function will give the correct greeting based on the time of day
    let currentTime = 20;
    if(currentTime < 12) {
        console.log("Good Morning!");
    } else if(currentTime < 18) {
        console.log("Good Afternoon!");
    } else {
        console.log("Good Night!");
    }
}

// While Loops

function multiTable() {
    //console.log(`1 x ${multiplier} = ${multiplier*1}`);
    //console.log("2 x " + multiplier + " = " + multiplier*2);
    let multiplier = 5;
    let counter = 1;
    while(counter <= 20) {
        console.log(`${counter} x ${multiplier} = ${counter*multiplier}`);
        counter = counter + 1;
    }
}

// For Loops
function multiTableFor() {
    let multiplier = 6;
    for(let counter = 1; counter <= 20; counter++) {
        console.log(`${counter} x ${multiplier} = ${counter*multiplier}`);
    }
}