const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// IMPORTANTE - CORS = primero lo requerimos
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api')
//{dbConnection} permite requerir la funcion conectora a la base de datos. Llamamos a {dbConnection} abajo de todo y antes del exportar app. ACLARACION: la conexion se genera en app.js o en www xq son los primeros archivos que se ejecutan al levantar el servidor. Por este motico se llama al final del presente a la conexion como dbConnection()
const {dbConnection} = require('./db/db');

const app = express();

app.use(logger('dev'));
app.use(express.json());
//luego pasamos a cors dentro de app.use expresado como funcion sin parametro (metodo)
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
dbConnection();

module.exports = app;
