var result = 0;

var Calculator = {
    add: function (addendum) {
        result += addendum;
        return Calculator.add;
    },
    substract: function (subtrahend) {
        result -= subtrahend;
        return Calculator.substract;
    },
    multiply: function (multiplier) {
        result *= multiplier;
        return calculator.multiply;
    },
    divide: function (divider) {
        result /= divider;
        return Calculator.divide;
    },
    reset: function () {
        return result = 0;
    },
    getResult: function () {
        return result;
    }
};
console.log(Calculator.getResult()) // 0

Calculator.add(4)
Calculator.substract(1)
console.log(Calculator.getResult()) // 3

console.log(Calculator.reset()) // 0


Calculator.add(4)(1)
console.log(Calculator.getResult()) // 5