"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Airplane = /** @class */ (function () {
    function Airplane(position, trafficTower) {
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }
    Airplane.prototype.requestPositions = function () {
        return this.trafficTower.requestPositions();
    };
    return Airplane;
}());
exports.Airplane = Airplane;
