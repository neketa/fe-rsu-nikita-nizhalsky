function Device(name, power) {
    this.name = name;
    this.power = power;
    this.plugIn = false;
}

Device.prototype.plugInDevice = function() {
    this.plugIn = true;
};

Device.prototype.isPlugIn = function() {
    return this.plugIn;
};

Device.prototype.getName = function () {
    return this.name;
};

Device.prototype.getPower = function () {
    return this.power;
};