"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Iterator = /** @class */ (function () {
    function Iterator(el) {
        this.index = 0;
        this.elements = el;
    }
    Iterator.prototype.next = function () {
        return this.elements[this.index++];
    };
    Iterator.prototype.hasNext = function () {
        return this.index < this.elements.length;
    };
    return Iterator;
}());
exports.default = Iterator;
