const express = require('express');
const routes = require('./src/routes'); 
const cors = require('cors');
require('./src/database');
//iniciação do app
const app = express();
app.use(cors());
//serve para força o envio para api atravez de JSON
app.use(express.json());
app.use('/api', routes);

//usando cors para que outra aplicações possam acessar minha API

app.listen(3001);