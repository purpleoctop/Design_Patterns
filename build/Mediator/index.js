"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Airplane_1 = require("./Airplane");
exports.Airplane = Airplane_1.Airplane;
var TrafficTower = /** @class */ (function () {
    function TrafficTower() {
        this.airplanes = [];
    }
    TrafficTower.prototype.requestPositions = function () {
        return this.airplanes.map(function (airplane) {
            return airplane.position;
        });
    };
    return TrafficTower;
}());
exports.TrafficTower = TrafficTower;
