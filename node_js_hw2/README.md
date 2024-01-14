# Andy Number Generator

The package helps to generate random numeric data (number, bigint or string).

## Installation
```
npm i andy_number_generator
```

## Usage
Start with 
`
const ranbom = require('randNumber');
`

`random (10);` 
returns string with length (10) contains random digits;

`random (100);` 
returns string with length (100) contains random digits;

`random (16, true);` 
returns number with length (10) contains random digits;

`random (20, true);` 
returns bigInt with length (20) contains random digits.