const mongoose = require('mongoose');

const conectToDatabase = async () => {
    try{
        await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.rutvbgv.mongodb.net/?appName=Cluster0`
        );
        

        console.log("Conexão com o banco de dados realizada com sucesso!");
    }catch (error){ 
        console.log("Ocorreu um erro ao se conectar com o banco de dados: " + error.message); 

    }
}

module.exports = conectToDatabase;