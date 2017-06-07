function Shape(name, type) {
    this.name = name;
    this.type = type;
}

Shape.prototype.getType = function() {
    console.log(this.type);
}

Shape.prototype.draw = function() {
    console.log(this.name + 'is drawn')
}

function Triangle(a, b, c) {
    this.type = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;
}
Triangle.prototype = Object.create(Shape.prototype);

Triangle.prototype.getPerimetr = function () {
    console.log(this.a + this.b + this.c);
}

function Square(a) {
    this.type = 'square';
    this.a = a;
}
Square.prototype = Object.create(Shape.prototype);

Square.prototype.getPerimetr = function () {
    console.log(this.a * 4);
}

function SuperSquare() {
    this.type = 'supersquare';
    this.superForse = 'can fly';
}
SuperSquare.prototype = Object.create(Square.prototype);

var superSquare = new SuperSquare();


