/*  Lev 1_14 Booleans
console.log("-------------------")
console.log(Boolean(100))
console.log(Boolean(3.14))
console.log(Boolean(-15))
console.log(Boolean("hello"))
console.log(Boolean("false"))
console.log(Boolean(1 + 7 + 3.14))
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(NaN))
console.log(Boolean(null))
console.log(Boolean(false))
*/

/*Lev1_15 Booelans 
const num = 5
const anotherNum = 8
console.log("----------------")
console.log(num == anotherNum)
console.log(num > anotherNum)
console.log(num < anotherNum)
console.log(num >= anotherNum)
console.log(num <= anotherNum)
console.log("----------------")
console.log(num == "5")
console.log(num != 8)
console.log(num != "5") */

/* Lev2_1 HTML DOM Elements  */
let home = document.getElementById("navHome")

function changeColor() {
    home.classList.toggle("navHome");
}

/* Lev2_2 HTML DOM Elements */
let vorname = document.getElementById("vorname")
let surname = document.getElementById("nachname")
let land = document.getElementById("land")

function submit() {
    console.log("Full name: " + vorname.value + ", " + surname.value + "Land: " + land.value)
}
submit();
/* Lev2_11 Random Color */
function randomBackground() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + r + "," + g + "," + b + ")";
    console.log(bgColor)
    document.body.style.background = bgColor;
}
randomBackground();

/* Lev1_3 Data Types */
let i = 1; // btw i = √-1
console.log(typeof (i));
let lastName = "Johnson";
console.log(typeof (lastName));
let j = "2";
console.log(typeof (j));
let status = true;
console.log(typeof (true));
let hello = "hello";
console.log(typeof (hello));
let helloWorld = "hello";
console.log(typeof (helloWorld));
console.log("-----------------")
/* Lev1_4 Data Types */
console.log(typeof ("John"))   //string             
console.log(typeof (3.14))              //number     
console.log(typeof (NaN))           //number         
console.log(typeof (false))     //Boolean             
console.log(typeof ([1, 2, 3, 4]))    // object        
console.log(typeof ({ name: 'John', age: 34 })) //object
console.log(typeof (new Date()))   // object       
console.log(typeof (function () { }))   //function       
console.log(typeof (null)) //object
console.log(typeof ("")) //string
console.log(typeof (3 + 2 == 5)) //boolean
console.log(typeof (3 + "3")) //string
console.log("---------------------------")

/* Lev1_8 Arithmetic Operators */
let x = 20;
let y = 30;
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
let z = 10;
let resultOne = (x * y) / z;
console.log(resultOne);
let a = 15;
let b = 9;
let c = 20
console.log(a % b);
let resultTwo = (a + b) * c;
console.log(resultTwo);
a++;
let d = a;
b--;
let e = b;
console.log(d);
console.log(e);
let resultThree = b - a;
console.log(resultThree);
console.log(resultOne % resultTwo);

