"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
exports.Car = car_1.Car;
var driver_1 = require("./driver");
exports.Driver = driver_1.Driver;
var CarProxy = /** @class */ (function () {
    function CarProxy(driver) {
        this.driver = driver;
    }
    CarProxy.prototype.drive = function () {
        return (this.driver.age < 18) ? "too young to drive" : new car_1.Car().drive();
    };
    return CarProxy;
}());
exports.CarProxy = CarProxy;
