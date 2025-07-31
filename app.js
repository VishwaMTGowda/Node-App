const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  
  res.end('Hello, World! This is a simple Node.js application.\n');
});
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

function greet(name) {
  console.log(`Hello, ${name}!`);
}
// const bugsnag = require('@bugsnag/js')
// const bugsnagClient = bugsnag('your_bugsnag_api_key')

// Call the function
greet('Node.js Developer');