import { isValidEmail, capitalize, APP_NAME } from '../dist/esm/index.js';

console.log('Testing isValidEmail:');
console.log(isValidEmail('test@example.com')); // true
console.log(isValidEmail('invalid')); // false

console.log('Testing capitalize:');
console.log(capitalize('hello')); // Hello

console.log('Testing constant:');
console.log(APP_NAME); // Enterprise Applications
