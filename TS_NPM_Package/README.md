# @mahendar8121/ts-njm-utils

A TypeScript utility package compiled to JavaScript with dual CommonJS/ES module support, providing common helper functions for validation, string manipulation, and constants.

## Installation

```bash
npm install @mahendar8121/ts-njm-utils
```

## File Structure

```
TS_NPM_Package/
├── package.json
├── tsconfig.json
├── tsconfig.cjs.json
├── tsconfig.esm.json
├── tsconfig.types.json
├── src/
│   ├── index.ts
│   ├── Constants/
│   │   └── Constants.ts
│   ├── Utils/
│   │   └── Utils.ts
│   └── Validation/
│       └── Validation.ts
├── test/
│   ├── index.test.js
│   └── test/
│       └── commonjs.test.js
└── dist/
    ├── cjs/
    ├── esm/
    └── types/
```

## Basic Functionality

### Constants
- `APP_NAME`: Application name constant
- `API_TIMEOUT`: Default API timeout in milliseconds
- `DEFAULT_PAGE_SIZE`: Default pagination page size

### Utils
- `capitalize(value: string): string`: Capitalizes the first letter of a string

### Validation
- `isValidEmail(email: string): boolean`: Validates email format
- `isRequired(value: any): boolean`: Checks if a value is not null, undefined, or empty

## Usage

### ES Modules (Recommended)
```javascript
import { capitalize, isValidEmail, isRequired, APP_NAME } from '@mahendar8121/ts-njm-utils';

console.log(APP_NAME); // "Enterprise Application"
console.log(capitalize('hello world')); // "Hello world"
console.log(isValidEmail('test@example.com')); // true
console.log(isRequired('value')); // true
```

### CommonJS
```javascript
const { capitalize, isValidEmail, isRequired, APP_NAME } = require('@mahendar8121/ts-njm-utils');

console.log(APP_NAME); // "Enterprise Application"
console.log(capitalize('hello world')); // "Hello world"
console.log(isValidEmail('test@example.com')); // true
console.log(isRequired('value')); // true
```

## Building

Build all targets (ESM, CommonJS, and TypeScript definitions):

```bash
npm run build
```

Build individual targets:
```bash
npm run build:esm      # ES modules
npm run build:cjs      # CommonJS
npm run build:types    # TypeScript definitions
```

## Testing

Run the test suite:

```bash
npm test
```

## Publishing

1. Ensure you have an npm account and are logged in
2. Update the version in `package.json`
3. Build the package:

```bash
npm run build
```

4. Publish to npm:

```bash
npm publish
```

For GitHub Package Registry:

```bash
npm publish
```

Make sure your `package.json` has the correct `publishConfig` registry set.

## TypeScript Configuration

The package uses multiple TypeScript configurations:
- `tsconfig.json`: Base configuration
- `tsconfig.esm.json`: ES modules build
- `tsconfig.cjs.json`: CommonJS build
- `tsconfig.types.json`: TypeScript definitions build

This ensures optimal compatibility across different module systems and provides full TypeScript support.</content>
<parameter name="filePath">c:\Users\Rakesh64\source\repos\Githibpush\NPM_demo\NPM_JS-TS_demo\TS_NPM_Package\README.md