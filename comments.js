// Create web server
// 1. Create web server
// 2. Create server object
// 3. Listen on port
// 4. Create a route for GET request
// 5. Create a route for POST request
// 6. Create a route for PUT request
// 7. Create a route for DELETE request
// 8. Export server object

// 1. Create web server
const http = require('http');

// 2. Create server object
const server = http.createServer((req, res) => {
    // 4. Create a route for GET request
    if (req.method === 'GET' && req.url === '/comments') {
        res.write('GET comments');
        res.end();
    }
    // 5. Create a route for POST request
    else if (req.method === 'POST' && req.url === '/comments') {
        res.write('POST comments');
        res.end();
    }
    // 6. Create a route for PUT request
    else if (req.method === 'PUT' && req.url === '/comments') {
        res.write('PUT comments');
        res.end();
    }
    // 7. Create a route for DELETE request
    else if (req.method === 'DELETE' && req.url === '/comments') {
        res.write('DELETE comments');
        res.end();
    }
    // 3. Listen on port
    else {
        res.write('Hello world');
        res.end();
    }
});

// 8. Export server object
module.exports = server;