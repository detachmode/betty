const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  var x = eval("2 + 2");    
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(x + '<- Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});