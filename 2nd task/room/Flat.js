function Flat(name, rooms, devices) {
    this.rooms = rooms;
    Room.call(this, name, devices);
}

Flat.prototype = Object.create(Room.prototype);

Flat.prototype.getPowerInHouse = function() {
    var totalPower = 0;
    this.rooms.forEach(function (room) {
        totalPower += room.getPower();
    }, this);
    return totalPower;
}

Flat.prototype.findDeviceInHouse = function(nameOfDevice) {
    return this.rooms.forEach(function(room) {
        room.findDevice(nameOfDevice);
    });
}
