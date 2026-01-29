const http = require('http');
const { json } = require('stream/consumers');

const port = 3000;

const server = http.createServer((req, res) => {
    if(req.url === '/home') {
        res.writeHead(200, {'Content-Type': "text/html"});
        res.end('<h1>Home Page</h1>');
    }

    if(req.url === '/users'){
        const users = [
            {
                name: "Joe Doe",
                email: "joe@gmail.com"
            }, 
            {
                name: "Maria Doe",
                email: "maria@gmail.com"  
            }
        ]
        res.writeHead(200, {'Content-Type': "application/json"});
        res.end(JSON.stringify(users));
    }
})

server.listen(port, () => console.log(`Listening at port ${port}`))