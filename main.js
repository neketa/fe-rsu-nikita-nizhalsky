var a = 1;
var b = 'string';

console.log('a = ' + a);
console.log('b = ' + b);

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

function numberCheck(num) {
    if (num > 0) {
        console.log(num + ' > 0');
    } else if (num < 0) {
        console.log(num + ' < 0');
    } else {
        console.log(num + ' = 0');
    }
};

function factorial(num) {
    var result = 1;

    for(var i = 1; i < num + 1; i++) {
        result = result * i;
    }

    return result;
};

console.log(factorial(4));

function triangleAria(a, b, c) {
    var perimeter = a + b + c;

    perimeter = perimeter / 2;
    
    return Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c)); 
}

console.log(triangleAria(2, 3, 4));