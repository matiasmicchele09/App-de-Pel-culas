'use strict'

var conn = require('./movie_connection'), //Aquí esta la conexión a MySQL
    MovieModel = () => {}


MovieModel.getAll = (cb) => {
    conn.query('SELECT * FROM movie', cb)
}

MovieModel.getOne = (id, cb) => conn.query('SELECT * FROM movie WHERE movie_id = ?', id, cb)

MovieModel.insert = (data, cb) => {
    conn.query('INSERT INTO movie set ?', data, cb)
}

MovieModel.update = (data, cb) => conn.query('UPDATE movie SET ? WHERE movie_id = ?', [data, data.movie_id], cb)

MovieModel.delete = (id, cb) => conn.query('DELETE FROM movie WHERE movie_id = ?', id, cb)

MovieModel.close = () => conn.end()

module.exports = MovieModel;