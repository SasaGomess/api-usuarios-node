const express = require('express');

const app = express();

app.get("/home", (req, res) => {
    res.status(200).send('<h1>Hello World</h1>');
})

app.get("/users", (req, res) => {
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
    res.status(200).json(users)
})

const port = 3000;

app.listen(port, () => console.log(`Rodando com express na porta ${port}`))