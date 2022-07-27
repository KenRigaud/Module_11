//Simple function that does console.log()
function printHello(){
    console.log("Hello there!");
}


//adds two numbers
function addition(a, b){
    return a + b;
}

//test the code:
console.log(addition(4,5));

// skill drill, addition function but auto prints statement
function addprint(a, b){
    let c = a + b;
    console.log(c);
}

//test the code
addprint(5,7);

//functions that can call other functions
function doubleAddition(c, d){
    let total = addition(c,d) * 2;
    return total;
}

// test the code:
doubleAddition(4,5);

// test the code:
doubleAddition(34,65);

//Arrow Functions

//arrow function for log statement
printHello = () => "Hello there!";

//updating addition function to an arrow function
addition = (a,b) => a+b;

//updating the doubleAddition function to an arrow function
doubleAddition = (c, d) => addition(c, d) * 2;

//End lessons 11.1 -11.3

