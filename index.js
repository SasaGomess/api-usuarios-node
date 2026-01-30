const dotenv = require("dotenv");
const conectToDatabase = require("./src/database/conect");

dotenv.config();

conectToDatabase();

require('./modules/express');