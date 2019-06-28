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
var composite_1 = require("./composite");
var Cabinet = /** @class */ (function (_super) {
    __extends(Cabinet, _super);
    function Cabinet() {
        var _this = _super.call(this) || this;
        _this.setName("cabinet");
        return _this;
    }
    return Cabinet;
}(composite_1.Composite));
exports.Cabinet = Cabinet;
