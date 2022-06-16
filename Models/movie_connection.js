'use strict'

//const { cls } = require('jade/lib/runtime')

var mysql = require('mysql'),
    conf = require('./db_config.json'),
    dbOptions = {
        host: conf.mysql.host,
        port: conf.mysql.port, //puerto predeterminado de MySQL
        user: conf.mysql.user,
        password: conf.mysql.pass,
        database: conf.mysql.db
    },
    myConn = mysql.createConnection(dbOptions)

myConn.connect((err) => {
    return (err) ? console.log(`Error al conectarse a MySQL: ${err.stack}`) : console.log(`Conexión Establecida con MySQL N°: ${myConn.threadId}`);
})

module.exports = myConn