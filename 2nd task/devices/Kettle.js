function Kettle(name, power) {
    Device.apply(this, arguments);
}

Kettle.prototype = Object.create(Device.prototype);