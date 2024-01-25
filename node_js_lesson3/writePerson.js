const fs = require("fs");
const path = require('path');

const pathToFile = path.join(__dirname, 'person.json');

const person = {
    name: "Ivan",
    surname: "Ivanov",
    age: 30,
    city: "Moscow"
};

const personJson = JSON.stringify(person, null, 2);
fs.writeFileSync(pathToFile, personJson); 