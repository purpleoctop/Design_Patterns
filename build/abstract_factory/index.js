"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createDroid_1 = require("./createDroid");
function droidProducer(kind) {
    if (kind === "battle") {
        return createDroid_1.battleDroidFactory;
    }
    return createDroid_1.pilotDroidFactory;
}
exports.default = droidProducer;
