// Событие - это простой класс для реализации MVC паттерна Observer (Наблюдатель).
function Event(sender) {
    this._sender = sender;
    this._listeners = [];
};

Event.prototype = {
    attach: function (listener) {
        this._listeners.push(listener);
    },
    notify: function (args) {
        for (var index = 0; index < this._listeners.length; index++) {
            this._listeners[index](this._sender, args);
        }
    }
};