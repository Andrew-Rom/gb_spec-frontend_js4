const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const host = "localhost";
const port = 5555;
const pathToFile = path.join(__dirname, 'counters.json');
let counters = {}

if (fs.existsSync(pathToFile)) {
  counters = JSON.parse(fs.readFileSync(pathToFile));
} else {
  counters = {
    counterMainPage: 0,
    counterAboutPage: 0
  };
};

app.get("/", (req, res) => {
  ++counters.counterMainPage;
  res.send(
    `<h1>Корневая страница</h1>
      <br>
      <p>Просмотров: ${counters.counterMainPage}</p>
      <br>
      <a href="http://${host}:${port}/about">Ссылка на страницу /about</a>`
  );
  const personJson = JSON.stringify(person, null, 2);
  fs.writeFileSync(pathToFile, personJson); 
});

app.get("/about", (req, res) => {
  ++counters.counterAboutPage;
  res.send(
    `<h1>Страница about</h1>
      <br>
      <p>Просмотров: ${counters.counterAboutPage}</p>
      <br>
      <a href="http://${host}:${port}/">Ссылка на страницу /</a>`
  );
  const personJson = JSON.stringify(person, null, 2);
  fs.writeFileSync(pathToFile, personJson);
});


app.listen(port, () => {
  console.log(`Server is listening ${port} port`);
});