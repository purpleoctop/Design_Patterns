"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var ColorFactory = /** @class */ (function () {
    function ColorFactory(name) {
        this.colors = {};
    }
    ColorFactory.prototype.create = function (name) {
        var color = this.colors[name];
        if (color) {
            return color;
        }
        this.colors[name] = new index_1.Color(name);
        return this.colors[name];
    };
    return ColorFactory;
}());
exports.ColorFactory = ColorFactory;
