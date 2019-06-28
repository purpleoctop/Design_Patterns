"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cheeseDecorator_1 = require("./cheeseDecorator");
exports.CheeseDecorator = cheeseDecorator_1.CheeseDecorator;
var Penne_1 = require("./Penne");
exports.Penne = Penne_1.Penne;
var sauseDecorator_1 = require("./sauseDecorator");
exports.SauceDecorator = sauseDecorator_1.SauceDecorator;
var Pasta = /** @class */ (function () {
    function Pasta() {
        this.price = 0;
    }
    Pasta.prototype.getPrice = function () {
        return this.price;
    };
    return Pasta;
}());
exports.Pasta = Pasta;
