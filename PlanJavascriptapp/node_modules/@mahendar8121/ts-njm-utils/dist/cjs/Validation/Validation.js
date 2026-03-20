"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidEmail = isValidEmail;
exports.isRequired = isRequired;
function isValidEmail(email) {
    if (typeof email !== "string")
        return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
}
function isRequired(value) {
    return value !== null && value !== undefined && value !== "";
}
