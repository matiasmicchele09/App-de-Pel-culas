'use strict'

const MovieController = require('../Controllers/movie-controller'),
    express = require('express'),
    router = express.Router(); //módulo del core de express

router.get('/', MovieController.getAll)
    .get('/editar/:movie_id', MovieController.getOne)
    .post('/add-movie', MovieController.insert)
    .put('/actualizar/:movie_id', MovieController.update)
    .delete('/eliminar/:movie_id', MovieController.delete)

module.exports = router;