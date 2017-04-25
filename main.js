
//Declare two variables and show them
var a = 1;
var b = 'string';

console.log('a = ' + a);
console.log('b = ' + b);

//Write a function that reverse the given array using three kind of loops

var myArray = [1, 2, 3, 4];

function reverseArrayViaWhile(arr) {
    var result = [];
    var length = arr.length;

    while (length--) {
        result.push(arr[length]);
    }

    return result;
};

function reverseArrayViaFor(arr) {
    var result = [];

    for(var i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
};

function reverseArrayViaDoWhile(arr) {
    var result = [];
    var length = arr.length;

    do {
        result.push(arr[--length]);
    } while(length);

    return result;
};

//Explain the difference between ++i and i++ with example
var i = 3;
a = i++ * 2;

var i = 3;
b = ++i * 2;
console.log("i = 3");
console.log("a = i++ * 2 = " + a);
console.log("b = ++i * 2 = " + b);


//Write a function that checks if the given arguments is positive number or negative number or is 0
function numberCheck(num) {
    if (num > 0) {
        console.log(num + ' > 0');
    } else if (num < 0) {
        console.log(num + ' < 0');
    } else {
        console.log(num + ' = 0');
    }
};

//Write a function that calculates factorial

function factorial(num) {
    var result = 1;

    for(var i = 1; i < num + 1; i++) {
        result = result * i;
    }

    return result;
};

console.log(factorial(4));

//Create a page that asks the user his name and alert it back
var name = prompt("Your name?");
alert("Your name is " + name);

//Write a function that can find triangle's area

function triangleAria(a, b, c) {
    var perimeter = a + b + c;

    perimeter = perimeter / 2;
    
    return Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c)); 
}

console.log(triangleAria(2, 3, 4));