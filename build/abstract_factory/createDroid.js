"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var droidB1_1 = require("./droidB1");
var droidRx24_1 = require("./droidRx24");
function pilotDroidFactory() {
    return new droidRx24_1.Rx24();
}
exports.pilotDroidFactory = pilotDroidFactory;
function battleDroidFactory() {
    return new droidB1_1.B1();
}
exports.battleDroidFactory = battleDroidFactory;
