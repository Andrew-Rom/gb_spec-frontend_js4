const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const host = "localhost";
const port = 5555;
const pathToFile = path.join(__dirname, "counters.json");
let counters = {};

fs.access(pathToFile, (e) => {
  if (e) {
    console.log("Counters created");
    counters = {
      counterMainPage: 0,
      counterAboutPage: 0,
    };
  } else {
    counters = JSON.parse(fs.readFileSync(pathToFile));
  }
});

app.get("/", (req, res) => {
  counters.counterMainPage += 1;
  const countersJson = JSON.stringify(counters, null, 2);
  fs.writeFileSync(pathToFile, countersJson);
  res.send(
    `<h1>Корневая страница</h1>
      <br>
      <p>Просмотров: ${counters.counterMainPage}</p>
      <br>
      <a href="http://${host}:${port}/about">Ссылка на страницу /about</a>`
  );
});

app.get("/about", (req, res) => {
  counters.counterAboutPage += 1;
  const countersJson = JSON.stringify(counters, null, 2);
  fs.writeFileSync(pathToFile, countersJson);
  res.send(
    `<h1>Страница about</h1>
      <br>
      <p>Просмотров: ${counters.counterAboutPage}</p>
      <br>
      <a href="http://${host}:${port}/">Ссылка на страницу /</a>`
  );
});

app.listen(port, () => {
  console.log(`Server is listening ${port} port`);
});
