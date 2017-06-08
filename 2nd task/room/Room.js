function Room(name, devices) {
    this.name = name;
    this.devices = devices;
}

Room.prototype.getName = function () {
    return this.name;
};

Room.prototype.findDevice = function(nameOfDevice) {
    this.devices.forEach(function(device) {
        if (device.getName().toLowerCase().indexOf(nameOfDevice.toLowerCase()) > -1) {
            console.log('"' + nameOfDevice + '" was found in "' + this.getName() + '"');
        }
    }, this);
};

Room.prototype.getPower = function() {
    var totalPower = 0;
    this.devices.forEach(function(device){
        if (device.isPlugIn())
            totalPower += device.getPower();
    });
    return totalPower;
};