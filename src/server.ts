var cors = require('cors');
var resolve = require('path');
var express = require('express');

//importação da  conexão do banco de dados
var databaseConnections = require("./database/connections");

//importação das routas
var routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/files", express.static(resolve(__dirname, "..", "temp", "uploads")));
app.use(routes);

app.listen(3000);
