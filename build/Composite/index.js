"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Equipment
var cabinet_1 = require("./cabinet");
exports.Cabinet = cabinet_1.Cabinet;
var floppydisk_1 = require("./floppydisk");
exports.FloppyDisk = floppydisk_1.FloppyDisk;
var hardDrive_1 = require("./hardDrive");
exports.HardDrive = hardDrive_1.HardDrive;
var memory_1 = require("./memory");
exports.Memory = memory_1.Memory;
var Equipment = /** @class */ (function () {
    function Equipment() {
    }
    Equipment.prototype.getPrice = function () {
        return this.price || 0;
    };
    Equipment.prototype.getName = function () {
        return this.name;
    };
    Equipment.prototype.setName = function (name) {
        this.name = name;
    };
    return Equipment;
}());
exports.Equipment = Equipment;
