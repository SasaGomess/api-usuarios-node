const path = require("path");

// Mostra apenas o nome do arquivo
console.log(path.basename(__filename));

// Mostra o diretorio
console.log(path.dirname(__filename));

// Extensão do arquivo
console.log(path.extname(__filename));

// Cria Objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "teste", "teste.html"));
