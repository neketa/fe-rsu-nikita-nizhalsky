function Application() {

}

Application.prototype.start = function () {
    var fridge = new Fridge('Atlant', 500);
    var kettle = new Kettle('Bosh', 300);
    var tv = new Tv('Samsung', 350);
    var computer = new Computer('ASUS', 300);
    var microwave = new Microwave('LG', 900);
    var kitchen = new Room('kitchen', [fridge, kettle, microwave]);
    var livingRoom = new Room('living room', [tv, computer]);
    
    var myFlat = new Flat('My flat', [kitchen, livingRoom]);

    fridge.plugInDevice();
    kettle.plugInDevice();
    tv.plugInDevice();
    computer.plugInDevice();
    microwave.plugInDevice();

    console.log('Power kitchen is: ' + kitchen.getPower());
    kitchen.findDevice('LG');
    
    console.log('Power in flat is: ' + myFlat.getPowerInHouse());
    myFlat.findDeviceInHouse('ASUS');

    console.log('Device name is: ' + fridge.getName());
};