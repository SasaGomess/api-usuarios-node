const { error } = require('console');
const fs = require('fs');
const path = require('path'); 

// Criar uma pasta

// fs.mkdir(path.join(__dirname, '/teste'), (error) => {
//     if (error) {
//         console.log("Erro: " + error);
//     }
//     console.log("Pasta criada com sucesso");
// } );

//Cria arquivo
fs.writeFile(path.join(__dirname, '/teste', 'teste.html'), 'Hello Node', (error) =>{
    if (error) {
        console.log("Erro: " + error);
    }
    console.log("Arquivo criado com sucesso");
});