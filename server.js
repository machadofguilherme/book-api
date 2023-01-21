const express = require('express');
const { bookRouter } = require('./src/routes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(bookRouter.router);

app.listen(PORT, () => console.log('Rodando...'));