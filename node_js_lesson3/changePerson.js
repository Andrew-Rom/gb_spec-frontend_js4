const fs = require("fs");
const path = require('path');

const pathToFile = path.join(__dirname, 'person.json');

const person = JSON.parse(fs.readFileSync(pathToFile));
person.age -= 10;
person.city = "Novgorod";

const personJson = JSON.stringify(person, null, 2);
fs.writeFileSync(pathToFile, personJson); 