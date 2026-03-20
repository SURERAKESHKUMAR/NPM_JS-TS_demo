const assert = require('assert');
const { greet, sum,validateEmail } = require('../src/index.js');

assert.strictEqual(greet('Mahendar'), 'Hello NJM Returning your request, Mahendar!');
assert.strictEqual(sum(2, 3), 5);
assert.strictEqual(sum(-1, 1), 0);
assert.strictEqual(validateEmail('test@example.com'), true);
assert.strictEqual(validateEmail('invalid-email'), false);

console.log('✔ All tests passed');