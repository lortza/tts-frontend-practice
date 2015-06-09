// Basic stuff
var message = "Hello World!";
console.log(message);


// Variables
var a = "Hey";
var b = 10;

console.log(a);
console.log(b);
console.log(a + b);

var b = " is for horses";
console.log(a + b);

var a = 1,
    b = 2, 
    c = "three";

// This is a single line comment

/* This is a 
multi-line
comment */

/* ===== Data Types ===== */

// Numbers:
console.log("==== Numbers ====")

var integer_num = 1, 
    float_num = 1.23;

console.log(integer_num + float_num);

// Strings:
console.log("==== Strings ====")

var message = "Let's learn JavaScript";
console.log(message);

// Booleans:
console.log("==== Booleans ====")

var is_cool = true;
console.log(is_cool + " dat");

// Arrays:
console.log("==== Arrays ====")

var my_stuff = [integer_num, message, is_cool]
console.log(my_stuff);

// Hashes:
console.log("==== Hashes ====")

var capitals = {
  LA: "Baton Rouge",
  TX: "Austin",
  CO: "Denver",
  GA: "Atlanta"
};

console.log(capitals["LA"]);

// Null and Undefined
console.log("==== Null and Undefined ====")

var x; // This var is undefined, but it is not null

console.log(x); // This will give you an undefined error

console.log(x === null); // This will test to see if this var is null

x = null;
console.log(x); // This is now null
console.log(x === null); // This is now true
console.log(x === undefined); // This is now false

// 2 equal signs will change the value rather than compare
console.log(x == undefined); // This is 


/* ===== Variables ==== */
console.log("==== Variables ====")


// This is a global variable
var x = "I'm a global variable called x!"
console.log(x);

// This is a local variable
function someFunction() {
  var y = "I'm a local variable called y!";
  console.log(x);
  console.log(y);

  // This is bad don't do it.
  // x = "I'm now a bad local variable called x."
  // console.log(x);
  // Instead always name a variable starting with "var"
}

// Calling someFunction
someFunction();


/* ===== Operators ==== */
console.log("==== Operators ====")

var x = 10,
  y = 5;

console.log(x + y); // 15
console.log(x - y); // 5
console.log(x * y); // 50
console.log(x / y); // 2
console.log(x % y); // modulus

console.log("-------");
console.log(x > y); // true
console.log(x < y); //false
console.log(x === y); //false
console.log(x !== y); //true


/* ===== True & False ==== */
console.log("==== True * False ====")



var a = true,
    b = false;

console.log(a && b); // and --> false
console.log(a || b); // or --> true


/* ===== Conditionals ==== */
console.log("==== Conditionals ====")

var x = 10,
    y = 10;

if (x > y){
  console.log("x is greater than y");
} else if (x < y) {
  console.log("x is less than y");
} else {
  console.log("x is equal to y");
}


/* ===== Loops ==== */
console.log("==== All Loops ====");

var numbers = [1, 2, 3, 4, 5];

// C-style JS loop
console.log("==== C-style Loop ====");

for (var i = 0; i < numbers.length; i++){
  console.log(numbers[i]);
}

// For loop
console.log("==== For Loop ====");

numbers.forEach(function (element){
  console.log(element);
});

// While Loop
console.log("==== While Loop ====");

var i = 0;

while (i < numbers.length){
  console.log(numbers[i]);
  i++; // same as i += 1 in ruby
}

/* ===== Functions ==== */
console.log("==== Functions ====");

// Function with explicit number of arguments, like here, there are 2
function sumExplicity(a, b){
  console.log(a + b);
}

sumExplicity(4, 8); // calls the function and defines the values for the variables

// Function with arbitrary number of arguments
function sumImplicity(){
  var total = 0;
  for (var i = 0; i < arguments.length; i++){
    total += arguments[i];
  }
  return total // saves the results of the function
  console.log(total);
}
var x = sumImplicity(1, 2, " hey", 5, 2); // after a string, numbers just get listed as a string
var y = sumImplicity(x, sumImplicity(7,8));
console.log(y);




