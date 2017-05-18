function consoleRec(arr) {
    if (arr.length > 0) {
        console.log(arr[0]);
        consoleRec(arr.slice(1));
    }
}
consoleRec(['я', 'умею', 'писать', 'рекурсивные', 'функции']);

