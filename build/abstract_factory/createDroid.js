"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var droid_1 = require("./droid");
function pilotDroidFactory() {
    return new droid_1.Rx24();
}
exports.pilotDroidFactory = pilotDroidFactory;
function battleDroidFactory() {
    return new droid_1.B1();
}
exports.battleDroidFactory = battleDroidFactory;
