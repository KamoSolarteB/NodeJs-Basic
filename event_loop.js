const http = require('http')

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.write('Welcome to the server')
    return response.end()
  }
  if (request.url === '/about') {
    response.write('About page')

    for (i = 0; i <= 100000; i++) {
      console.log(Math.random() * i);
    }

    return response.end()
  }
  response.end('Not found')
})
server.listen(3000)