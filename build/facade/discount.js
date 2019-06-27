"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Discount = /** @class */ (function () {
    function Discount() {
    }
    Discount.prototype.calc = function (value) {
        return value * 0.9;
    };
    return Discount;
}());
exports.Discount = Discount;
