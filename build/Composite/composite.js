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
var _1 = require(".");
// --- composite ---
var Composite = /** @class */ (function (_super) {
    __extends(Composite, _super);
    function Composite() {
        var _this = _super.call(this) || this;
        _this.equipments = [];
        return _this;
    }
    Composite.prototype.add = function (equipment) {
        this.equipments.push(equipment);
    };
    Composite.prototype.getPrice = function () {
        return this.equipments.map(function (equipment) {
            return equipment.getPrice();
        }).reduce(function (a, b) {
            return a + b;
        });
    };
    return Composite;
}(_1.Equipment));
exports.Composite = Composite;
