function Computer(name, power) {
    Device.apply(this, arguments);
}

Computer.prototype = Object.create(Device.prototype);