const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Welcome to the server");
    return response.end();
  }

  if (request.url === "/about") {
    response.write("Welcome to about");
    return response.end();
  }

  console.log(request.url);
  response.write(`
    <h1>Error not found</h1>
    <p>This page was not found</p>
    <a href='/'>Return to main page</a>
  `);
  response.end();
});
server.listen(3000);

console.log("Servidor en el puerto 3000");
