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
var index_1 = require("./index");
var FloppyDisk = /** @class */ (function (_super) {
    __extends(FloppyDisk, _super);
    function FloppyDisk() {
        var _this = _super.call(this) || this;
        _this.setName("Floppy Disk");
        _this.price = 70;
        return _this;
    }
    return FloppyDisk;
}(index_1.Equipment));
exports.FloppyDisk = FloppyDisk;
