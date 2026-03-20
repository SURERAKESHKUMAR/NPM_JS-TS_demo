const { isValidEmail, capitalize, APP_NAME } = require('../dist/cjs/index.cjs');

console.log('CommonJS Testing isValidEmail:');
console.log(isValidEmail('test@example.com')); // true
console.log(isValidEmail('invalid')); // false

console.log('CommonJS Testing capitalize:');
console.log(capitalize('hello')); // Hello

console.log('CommonJS Testing constant:');
console.log(APP_NAME); // Enterprise Application
