///1. Write a JavaScript program to display the current day and time in the following format.
function formatDate() {
    var date = new Date();
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    function formatTime(time) {
        if (time < 10) {
            return "0" + time;
        } else {
            return time;
        }
    }
    console.log('Today is:' + week[date.getDay()] + ' ' + formatTime(date.getHours()) + ":" + formatTime(date.getMinutes()));
}
console.log('task1:')
formatDate();

///2. Write a JavaScript program to get the current date.
function currentDate() {
    var date = new Date();
    console.log('Today is:' + date)
}
console.log('task2:')
currentDate();

///3. Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050.
function getSunday() {
    for (var year = 2014; year < 2051; year++) {
        var date = new Date(year, 0, 1);
        if (date.getDay() === 0) {
            console.log(date);
        }
    }
}
console.log('task3:')
getSunday();

///4.Write a JavaScript program to calculate days left until next New Year.
function daysLeftUntilNewYear() {
    var now = new Date();
    var newYear = new Date(now.getFullYear(), 0, 1);
    var diff = now.getTime() - newYear.getTime();
    var days = diff / 1000 / 60 / 60 / 24;
    console.log(days);
}
console.log('task4:')
daysLeftUntilNewYear();

///5. Write a JavaScript function to check whether an `input` is an array or not.
function arrayOrNot(arr) {
    return Array.isArray(arr)
}
console.log('task5:')
console.log(arrayOrNot([1, 2, 3, 4, 5]))

///6. Write a JavaScript function to clone an array
function cloneAnArray(arr) {
    return arr.slice()
}
console.log('task6:')
console.log(cloneAnArray([1, 2, 3, 4, 5]));

///7. Write a JavaScript function to find the most frequent item of an array.
function mostFrequentItemInArray(arr) {
    var maxFrequentItem;
    var maxCount = 0;
    var currentCount = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                currentCount += 1;
            }
        }
        if (currentCount > maxCount) {
            maxCount = currentCount;
            maxFrequentItem = arr[i];
        }
        currentCount = 0;
    }

    return maxFrequentItem;
}
console.log(mostFrequentItemInArray([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));


///8. Write a JavaScript function that inverts the case of the letters of the given string and returns new string
function invertTheCase(str) {
    var result = '';

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase();
        }
    }

    return result;
}
console.log(invertTheCase('ABc'));

///9. Write a JavaScript program to remove duplicate strings from a string array (ignore case sensitivity)
function contains(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase() === str.toLowerCase()) {
            return true;
        }
    }
    return false;
}

function removeDuplicateStrings(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        var duplicate = contains(newArr, arr[i]);
        if (duplicate === false) {
            newArr.push(arr[i])
        }

    }

    return newArr;
}
console.log(removeDuplicateStrings(['Маша', 'Никита', 'МАША', 'Никита']))

//10. Write a JavaScript program to shuffle an array
function shuffleAnArray(arr) {
    var j, x, i;
    for (i = arr.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = arr[i - 1];
        arr[i - 1] = arr[j];
        arr[j] = x;
    }
    return arr;
}
console.log(shuffleAnArray([1, 2, 3, 4, 5]));

//11. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array
function removeFalsyValues(arr) {
    var newArr = [];
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeFalsyValues([1, null, 2, 0, "", false, 3, undefined, 4, NaN]));

//12. Write a JavaScript function to sort the following array of objects by title value using ‘sort’ method
function sortByTitle(arr) {
    arr.sort(function (a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
    })
    return arr;
}
var library = [

    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },

    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },

    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }

];

console.log(sortByTitle(library));

//13. Write a JavaScript function to merge two arrays and removes all duplicates elements
function mergeAnArrays(arr1, arr2) {
    var newArr = arr1.concat(arr2);
    var formatedArray = removeDuplicateStrings(newArr);
    return formatedArray;
}
console.log(mergeAnArrays(['a', 'b', 'c'], ['b', 'c', 'd', 'e', 'f']));

//14. Write a JavaScript function to remove a specific element from an array
function removeSpecificElement(arr, str) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === str) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
console.log(removeSpecificElement(['Никита', 'Валера', 'Виктор'], 'Виктор'));

//15. Write a JavaScript function to get a random item from an array
function getRandomItem(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
console.log(getRandomItem([1, 2, 3, 4, 5, 6, 7, 8]));

//16. Write a JavaScript function to move an array element from one position to another
function swap(arr, i, j) {
    var k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
    return arr;
}
console.log(swap([1, 2, 3, 4, 5, 6, 7], 1, 5));

//17. Write a JavaScript function to get difference between two dates in days
function daysBetweenTwoDates(firstDate, secondDate) {
    var diff = firstDate.getTime() - secondDate.getTime();
    var days = diff / 1000 / 60 / 60 / 24;
    return Math.abs(days);
}
console.log(daysBetweenTwoDates(new Date(2017, 10, 5), new Date(2017, 10, 10)));

//18. Write a JavaScript function to get the maximum date from an array of dates
function maxDate(arr) {
    arr.sort();
    return arr[arr.length - 1];
}
console.log(maxDate(['2015/02/01', '2015/02/02', '2015/01/03']));

//19. Write a JavaScript function to split a string and convert it into an array of words
function splitString(str) {
    var arr = str.split(' ');
    return arr;
}
console.log(splitString('Convert me to array'));

//20. Write a JavaScript function to capitalize the first letter of a string
function capitalize(str) {
    var newStr = str.substr(0, 1).toUpperCase();
    return newStr + str.substr(1);
}
console.log(capitalize('привет'));

//21. Write a JavaScript function to convert a string into camel case
function camelize(str) {
    return str.replace(/\W+(.)/g, function (match, chr) {
        return chr.toUpperCase();
    })
};
console.log(camelize("JavaScript Data"));
console.log(camelize("JavaScript data"));
console.log(camelize("JavaScriptData"));

//22. Write a JavaScript function to find the highest value in an array
function getMaxOfArray(arr) {
    return Math.max.apply(null, arr);
}
console.log(getMaxOfArray([1, 3, 6, 2, 4, -1, -9]));

//23. Write a JavaScript function to find the lowest value in an array
function getMinOfArray(arr) {
    return Math.min.apply(null, arr);
}
console.log(getMinOfArray([1, 3, 6, 2, 4, -1, -9]));

//24. Write a JavaScript function to check to check whether a variable is numeric or not
function isNumber(obj) {
    return !isNaN(parseFloat(obj));
}
console.log(isNumber(3));
console.log(isNumber('hi'))


//25. Write a JavaScript function to calculate the sum of values in an array
function getSumOfValues(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(getSumOfValues([1, 2, 3, 1]));

//26. Write a JavaScript program to get the length of a JavaScript object
function lengthOfObject(obj) {
    var objProps = Object.keys(obj);
    return objProps.length;
}
console.log(lengthOfObject({ 0: 'a', 1: 'b', 2: 'c' }));

//27. Write a JavaScript program to list the properties of a JavaScript object
function listObjProps(obj) {
    var objProps = Object.keys(obj);
    for (var i = 0; i < objProps.length; i++) {
        console.log(objProps[i], ':' , obj[objProps[i]]);
    }
}
listObjProps({ 0: 'a', 1: 'b', 2: 'c' });
