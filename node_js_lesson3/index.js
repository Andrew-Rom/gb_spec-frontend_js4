const express = require("express");

const app = express();

app.use(express.static('static'));

const port = 5555;
app.listen(port, () => {
  console.log(`Server listens to port ${port}`);
});
