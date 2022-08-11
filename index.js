// Modules
const http = require('http');
const fs = require('fs');

// Dependencies
const port = 3000;
const hostName = '127.0.0.1';

// Server Response
const handleReadFile = (fileLocation, statusCode, req, res, next) => {
    fs.readFile(fileLocation, (err, data) => {
        res.writeHead(statusCode, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}

// Server
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        handleReadFile("./pages/index.html", 200, req, res);
    } 
    else if(req.url === '/about'){
        handleReadFile("./pages/about.html", 200, req, res);
    }
    else if(req.url === '/contact'){
        handleReadFile("./pages/contact.html", 200, req, res);
    }
    else {
        handleReadFile("./pages/error.html", 400, req, res);
    }
    // res.end("Welcome to the server!");
});
server.listen(port, hostName, (err, result) => {
    console.log(`server is running at ${hostName}:${port}`);
});