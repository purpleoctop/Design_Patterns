"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var discount_1 = require("./discount");
var fees_1 = require("./fees");
var shipping_1 = require("./shipping");
var ShopFacade = /** @class */ (function () {
    function ShopFacade() {
        this.discount = new discount_1.Discount();
        this.shipping = new shipping_1.Shipping();
        this.fees = new fees_1.Fees();
    }
    ShopFacade.prototype.calc = function (price) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    };
    return ShopFacade;
}());
exports.default = ShopFacade;
