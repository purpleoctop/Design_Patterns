"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fees = /** @class */ (function () {
    function Fees() {
    }
    Fees.prototype.calc = function (value) {
        return value * 1.05;
    };
    return Fees;
}());
exports.Fees = Fees;
