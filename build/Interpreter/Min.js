"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Min = /** @class */ (function () {
    function Min(left, right) {
        this.left = left;
        this.right = right;
    }
    Min.prototype.interpret = function () {
        return this.left.interpret() - this.right.interpret();
    };
    return Min;
}());
exports.Min = Min;
