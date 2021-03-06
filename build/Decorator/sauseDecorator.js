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
var pastaDecorator_1 = require("./pastaDecorator");
var SauceDecorator = /** @class */ (function (_super) {
    __extends(SauceDecorator, _super);
    function SauceDecorator(pasta) {
        return _super.call(this, pasta) || this;
    }
    SauceDecorator.prototype.getPrice = function () {
        return _super.prototype.getPrice.call(this) + 5;
    };
    return SauceDecorator;
}(pastaDecorator_1.PastaDecorator));
exports.SauceDecorator = SauceDecorator;
