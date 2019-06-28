"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Num_1 = require("./Num");
exports.Num = Num_1.Num;
var Min_1 = require("./Min");
exports.Min = Min_1.Min;
var Sum = /** @class */ (function () {
    function Sum(left, right) {
        this.left = left;
        this.right = right;
    }
    Sum.prototype.interpret = function () {
        return this.left.interpret() + this.right.interpret();
    };
    return Sum;
}());
exports.Sum = Sum;
