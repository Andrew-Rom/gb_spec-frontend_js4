const host = "localhost";
const port = 3000;
let counterMainPage = 0;
let counterAboutPage = 0;

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    ++counterMainPage;
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(
      `<h1>Корневая страница</h1>
      <br>
      <p>Просмотров: ${counterMainPage}</p>
      <br>
      <a href="http://${host}:${port}/about">Ссылка на страницу /about</a>`
    );
  } else if (req.url === "/about") {
    ++counterAboutPage
    res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(
      `<h1>Страница about</h1>
      <br>
      <p>Просмотров: ${counterAboutPage}</p>
      <br>
      <a href="http://${host}:${port}/">Ссылка на страницу /</a>`
    );
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
    res.end(`<h1 style="font-size: 40px; color: red">Page not found</h1>`);
  }
});

server.listen(port, host, () => {
  console.log(`Server is listening ${port} port`);
});
