function Fridge(name, power) {
    Device.apply(this, arguments);
}

Fridge.prototype = Object.create(Device.prototype);