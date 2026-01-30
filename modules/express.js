const express = require('express');
const UserModel = require('../src/models/user.model');

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
    try{
        //pega todos os usuários
        const users = await UserModel.find({});

        res.status(200).json(users);

    }catch(error){
        res.status(500).send(error);
    }
});

app.post('/users', async (req, res) => {
    try{
        //Se não sinalizar ao express que utilizo o json nas requisições ele vai dar uma exceção
        const user = await UserModel.create(req.body);
        res.status(201).json(user);
    }catch (error){
        res.status(500).send(error.message);
    }  
})

const port = 3000;

app.listen(port, () => console.log(`Rodando com express na porta ${port}`))