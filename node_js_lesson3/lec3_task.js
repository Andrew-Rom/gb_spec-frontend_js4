const express = require("express");
const path = require("path");

const app = express();

app.use((req, res, next) => {
  console.log("Got request", req.method, req.url);
  next();
});

app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.sendFile('static/page.html');
// });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to my site</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>This is about page</h1>");
});

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'static/page.html'));
    res.sendFile('static/page.html');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server listen to port ${port}`);
});
