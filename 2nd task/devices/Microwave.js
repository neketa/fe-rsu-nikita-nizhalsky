function Microwave(name, power) {
    Device.apply(this, arguments);
}

Microwave.prototype = Object.create(Device.prototype);