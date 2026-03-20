export function isValidEmail(email) {
    if (typeof email !== "string")
        return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
}
export function isRequired(value) {
    return value !== null && value !== undefined && value !== "";
}
