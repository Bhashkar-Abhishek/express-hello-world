const http = require('http');
const axios = require('axios');

const server = http.createServer(async (req, res) => {
  if (req.url === '/api') {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const data = response.data;

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('An error occurred while fetching data from the API.');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route not found.');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
