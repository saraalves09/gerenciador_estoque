const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./routes/index');
const loginRoute = require('./routes/loginRoute');
app.use('/', index);
app.use('/loginRoute', loginRoute);
module.exports = app;