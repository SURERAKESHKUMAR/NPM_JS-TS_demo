const assert = require('assert');
//const { greet, sum,validateEmail } = require('../src/index.js');
const { appName } = require('../src/index.js');


assert.strictEqual(appName, 'Enterprise Application');