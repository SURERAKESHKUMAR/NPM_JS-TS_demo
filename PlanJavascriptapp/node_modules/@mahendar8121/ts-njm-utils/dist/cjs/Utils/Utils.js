"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = capitalize;
function capitalize(value) {
    if (typeof value !== "string")
        return "";
    return value.charAt(0).toUpperCase() + value.slice(1);
}
