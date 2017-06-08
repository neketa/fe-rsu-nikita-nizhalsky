function WashingMashine(name, power) {
    Device.apply(this, arguments);
}

WashingMashine.prototype = Object.create(Device.prototype);