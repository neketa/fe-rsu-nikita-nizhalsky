function Tv(name, power) {
    Device.apply(this, arguments);
}

Tv.prototype = Object.create(Device.prototype);