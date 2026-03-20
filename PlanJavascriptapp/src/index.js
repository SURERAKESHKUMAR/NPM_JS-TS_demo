const { capitalize, isValidEmail, isRequired, APP_NAME, API_TIMEOUT, DEFAULT_PAGE_SIZE } = require('@mahendar8121/ts-njm-utils');

console.log('App Name:', APP_NAME);
console.log('API Timeout:', API_TIMEOUT);
console.log('Default Page Size:', DEFAULT_PAGE_SIZE);

console.log('Capitalize "hello world":', capitalize('hello world'));
console.log('Is valid email "test@example.com":', isValidEmail('test@example.com'));
console.log('Is required "value":', isRequired('value'));
console.log('Is required empty string:', isRequired(''));

