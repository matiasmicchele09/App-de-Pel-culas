'use strict'

const express = require('express'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    //restFul = require("method-override")('_method'),
    cors = require('cors'),
    routes = require('./routes/movie-router'),
    //para rutas
    faviconURL = `${__dirname}/Views/assets/img/node-favicon.png`,
    assetsDir = express.static(`${__dirname}/assets`), // directorio de la carpeta publica
    port = (process.env.PORT || 3000), //Aquí lo que dice es "dame el puerto que este en proceso, o sino, el puerto 3000"
    app = express();

//.env viene de enviroment, de entorno. Variable de entorno. En este caso, al entorno de proceso de Node (single-thread)


app
//Configurando la app
    .set('port', port) //que la app de express este escuchando la variable puerto.

//Ejecutando Middlewares
.use(favicon(faviconURL))
    .use(bodyParser.json()) //para que me permita manipular ya en el archivo donde vamos a interactuar con nuestro modelo y me permita parsearlo a formato JSON
    .use(bodyParser.urlencoded({ extended: false })) //hace que toda la info de mi formulario se parsee con el tipo de aplicación application/x-www-gorm-urlencoded
    //.use(restFul)
    .use(cors())
    .use(assetsDir)
    .use(express.json()) //esta middleware ayuda a parsear el string a JSON que viene desde el front

//Ejecutando el Middleware Enrutador
//.use('/', routes) Cuando ejecutes la raíz vas a ejecutar lo que este en el archivo de rutas
.use(routes)

module.exports = app;