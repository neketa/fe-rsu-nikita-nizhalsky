function isNumber(val) {
    return typeof val === 'number';
}

function isAllTrue(source, filterFn) {
    for (i = 0; i < source.length; i++) {
        if (filterFn(source[i]) === false) {
            return false;
        }
    }
    return true;
}

var allNumbers = [1, 2, 4, 5, 6, 7, 8],

    someNumbers = [1, 2, 'привет', 4, 5, 'ololo', 6, 7, 8],

    noNumbers = ['это', 'массив', 'без', 'чисел'];

console.log(isAllTrue(allNumbers, isNumber)); //вернет true

console.log(isAllTrue(someNumbers, isNumber)); //вернет false

console.log(isAllTrue(noNumbers, isNumber)); //вернет false
