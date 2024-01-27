const fs = require('fs');
const path = require('path');
const express = require('express');
const { userIdScheme, userDataScheme } = require('./validation/scheme');
const { checkParams, checkBody } = require('./validation/validator');

const app = express();

let uniqueID = 0;
const pathToUsersDB = path.join(__dirname, 'users.json');

app.use(express.json());

app.get('/users', (req, res) => {
    res.send(fs.readFileSync(pathToUsersDB));
});

app.get('/users/:id', checkParams(userIdScheme), (req, res) => {
    const user = JSON.parse(fs.readFileSync(pathToUsersDB)).find((user) => user.id === Number(req.params.id));
    if (user) {
        res.send({user});
    } else {
        res.status(404).send({user: null});
    }
});

app.post('/users', checkBody(userIdScheme), (req, res) => {
    const users = JSON.parse(fs.readFileSync(pathToUsersDB));
    for (let i = 0; i < users.length; i++) {
        if (Number(users[i].id) > uniqueID) {
            uniqueID = Number(users[i].id);
        }
    }
    uniqueID += 1;
    users.push({
        id: uniqueID,
        ...req.body
    });
    fs.writeFileSync(pathToUsersDB, JSON.stringify(users, null, 2));
    res.send({
        id: uniqueID,
    });
});

app.put('/users/:id', checkParams(userIdScheme), checkBody(userDataScheme), (req, res) => {
    const users = JSON.parse(fs.readFileSync(pathToUsersDB));
    const user = users.find((user) => user.id === Number(req.params.id));
    if (user) {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.age = req.body.age;
        user.city = req.body.city;
        fs.writeFileSync(pathToUsersDB, JSON.stringify(users, null, 2));
        res.send({user});
    } else {
        res.status(404).send({user: null});
    }
});

app.delete('/users/:id', checkParams(userIdScheme), (req, res) => {
    const users = JSON.parse(fs.readFileSync(pathToUsersDB));
    const user = users.find((user) => user.id === Number(req.params.id));
    if (user) {
        const userIndex = users.indexOf(user);
        users.splice(userIndex, 1);
        fs.writeFileSync(pathToUsersDB, JSON.stringify(users, null, 2));
        res.send({user});
    } else {
        res.status(404).send({user: null});
    }
});

app.use((req, res) => {
    res.status(400).send({
        message: 'URL not found'
    })
});

const port = 5555;
app.listen(port, () => {
    console.log(`Server is listening ${port} port`);
});