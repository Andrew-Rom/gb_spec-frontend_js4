const express = require("express");

const app = express();

app.use(express.static('static'));

// app.get('/', (req, res) => {
//   res.send('static/index.html');
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>This is about page</h1>");
// });

const port = 5555;
app.listen(port, () => {
  console.log(`Server listens to port ${port}`);
});
