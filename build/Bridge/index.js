"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var acrylicInk_1 = require("./acrylicInk");
exports.AcrylicInk = acrylicInk_1.AcrylicInk;
var alcoholicInk_1 = require("./alcoholicInk");
exports.AlcoholInk = alcoholicInk_1.AlcoholInk;
var epronPrinter_1 = require("./epronPrinter");
exports.EpsonPrinter = epronPrinter_1.EpsonPrinter;
var hpPrinter_1 = require("./hpPrinter");
exports.HPprinter = hpPrinter_1.HPprinter;
var Printer = /** @class */ (function () {
    function Printer(ink) {
        this.ink = ink;
    }
    return Printer;
}());
exports.Printer = Printer;
