function Calculator() {
    this.result = 0;
}

Calculator.prototype.add = function (addendum) {
    this.result += addendum;
    return this;
};

Calculator.prototype.substract = function (subtrahend) {
    this.result -= subtrahend;
    return this;
};

Calculator.prototype.multiply = function (multiplier) {
    this.result *= multiplier;
    return this;
};

Calculator.prototype.divide = function (divider) {
    this.result /= divider;
    return this;
};

Calculator.prototype.reset = function () {
    this.result = 0;
    return this;
};

Calculator.prototype.getResult = function () {
    return this.result;
};

Calculator.prototype.getInitialState = function getInitialState(callback) {
    setTimeout(function setResult () {
        this.result = 5;
        callback();
    }.bind(calculator), 500);
};


function bind(func, context) {
  return function() {
    return func.apply(context, arguments);
  };
}

var calculator = new Calculator();




calculator.getInitialState(function () {
    console.log(calculator.getResult()) // 5
});

console.log(calculator.getResult()) // 0

calculator.add(4)
calculator.substract(1)
console.log(calculator.getResult()) // 3

console.log(calculator.add(4).reset().add(1).getResult()) // 1