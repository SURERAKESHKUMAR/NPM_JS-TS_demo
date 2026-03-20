#  Packaging  Common Javascript  Projects References into Git Hub NPM Packages  

##  Overview

The NJM Core Libraries Repository is an enterprise solution designed to centralize reusable Javascript components and distribute them as private GiHub NPM packages across multiple applications.

This approach enables:

- Centralized library management

- Reusable enterprise components

- Version-controlled packages

- Faster development across teams

- Standardized architecture  

All libraries are packaged and distributed using GitHub NuGet Package.

### Prerequisites

| Component                    | Requirement                   | Purpose                               |
| ---------------------------- | ----------------------------- | ------------------------------------- |
| Node & NPM                   |                               | Required to build and pack libraries  |
| Visual Studio Code           |                               | Development and debugging             |
| Git                          | Latest Version                | Source control                        |
| GitHub Account               | Package Registry enabled      | Hosting NuGet packages                |
| GitHub Personal Access Token | Packages Read/Write           | Authentication for package publishing |
| NPM Config                   | Configured with GitHub source | Allows package push                   |


#  Solution Architecture 



```
NJM-NPM-demo
│
├── NPM_pacakage
│   ├── src.index.js (constant,Utils, Validation)
│   └── package.json
│
├── React Applciaiotn
│   ├── VM_React_ts
│   │   ├── src/app.tsx

```


The solution contains **three major sections**:



1. Build & Packaging Scripts.
2. Use as NPM pacakage

---



# NuGet Package Publishing Workflow

This repository follows a standardized workflow to build reusable libraries and distribute them through a private GitHub NPM feed.

---

## Workflow Overview

The process for creating and consuming internal NPM packages is outlined below.

### Step 1 – Developer Creates Library
Developers create reusable class libraries inside the `src` folder.

These libraries contain shared functionality such as:

- Index.js


Example:

```
src/
 └── index.js
```

---

### Step 2 – Developer Builds the Library

Add .package.json .

```bash
mkdir shared-core 

cd shared-core 

npm init -y
```

This step generates .package.json.
add   
"publishConfig": { 

    "registry": "https://npm.pkg.github.com/" 

  }
---

### Step 3 – Generate NuGet Package

The project is packaged into a NPM package using the following command:
add .npmrc

```bash
npm publish 
```

It will genearates a NPM pacakage 
---

### Step 5 – Applications Consume the Package

Applications can install the package using the terminal.

Example command:

```bash
npm install @mahendar8121/NJM_utils  --version 1.0.0
```
or 


Once installed, the library can be used directly within the application.

Example:

```csharp
import {funaction names} @mahendar8121/NJM_utils;
```

## Benefits of This Approach

- Centralized management of shared libraries
- Version-controlled dependency management
- Simplified reuse across multiple applications
- Secure internal package distribution

---

#  Future Enhancements

Potential improvements include:

* Automated package publishing using GitHub Actions

* Automated version management



