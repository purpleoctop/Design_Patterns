"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var EpsonPrinter = /** @class */ (function (_super) {
    __extends(EpsonPrinter, _super);
    function EpsonPrinter(ink) {
        return _super.call(this, ink) || this;
    }
    EpsonPrinter.prototype.print = function () {
        return "Printer: Epson, Ink: " + this.ink.get();
    };
    return EpsonPrinter;
}(index_1.Printer));
exports.EpsonPrinter = EpsonPrinter;
