"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const BusinesscontactsSchema = new Schema({
    Name: String,
    Brand: String,
    Category: String,
    Colour: String,
    Size: String,
    Price: Number
}, {
    collection: "businesscontacts"
});
const Model = mongoose_1.default.model("Businesscontacts", BusinesscontactsSchema);
exports.default = Model;
//# sourceMappingURL=businesscontacts.js.map