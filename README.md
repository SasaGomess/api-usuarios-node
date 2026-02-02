# <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Technologist.png" alt="Technologist" width="55" height="55" /> API REST de Gerenciamento de Usuários  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-2D3748?style=for-the-badge&logo=mongoose&logoColor=white)
![MongoDb](https://img.shields.io/badge/MongoDb-003023?style=for-the-badge&logo=mongoDb&logoColor=white)

##

Uma API REST com foco em explorar operações CRUD utilizando banco de dados MongoDB. A aplicação oferece funcionalidades de listar, criar e atualizar usuários.

## 

## ⚙️ Funcionalidades

-  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Busts%20in%20Silhouette.png" alt="Busts in Silhouette" width="25" height="25" /> **Listar todos os usuários** - Visualize todos os usuários cadastradas
- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Person%20Raising%20Hand.png" alt="Person Raising Hand" width="25" height="25" /> **Buscar usuário específico** - Encontre um usuário pelo ID
-  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Girl.png" alt="Girl" width="25" height="25" /> **Cadastra um novo usuário** - Cadastre novos usuários no sistema
- <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Technologist.png" alt="Woman Technologist" width="25" height="25" /> **Atualizar um Usuário** - Modifique qualquer campo do usuário
- 🗑️ **Deletar Usuário** - Remova usuários

##

## 🔌 Endpoints da API

**Cria usuário**
````http
POST /users 
````

##

**Lista usuários**
````http
GET /users 
````

##

**Acha um usuário**
````http
GET /users/:id
````

##

**Atualiza alguma informação de um usuário**
````http
PATCH /users/:id
````
**Body do e-mail para atualizar**
````json
{
  "email": "joão123@gmail.com"
}
````

## 

**Deleta um usuário**
````http
DELETE /users/:id
````

##

## 🛠️ Tecnologias utilizadas
- **Node.js** - Runtime Javascript fora do navegador
- **MongoDB** - Banco de dados orientado a documentos
- **Express** - Framework web minimalista 
- **Nodemoon** - Reinicialização automática durante desenvolvimento
- **Mongoose** - Biblioteca de ODM (modelagem de dados) para o MongoDB, converte objetos em documentos

## 

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request
