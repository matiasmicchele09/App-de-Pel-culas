'use strict'

const MovieModel = require('../Models/movie_model'),
    MovieController = () => {} //Prototipo


MovieController.getAll = (req, res) => {
    //console.log('Me esta llegando algo desde el FRONT');
    //res.end('e esta llegando algo desde el FRONT')

    MovieModel.getAll((err, rows) => {
        if (err) {
            console.log(err);
        } else {
            let data = Object.values(JSON.parse(JSON.stringify(rows)));
            //console.log(data);
            /*Aparentemente no hace falta hacer el object.values(JSON.parse....), en el front y en en el back
            (pero en la pantalla del localhost:3000) se visualiza bien */
            //console.log(rows);
            res.end(JSON.stringify(rows))
        }
    })




}

MovieController.getOne = (req, res) => {
    //console.log(`Me esta llegando /editar desde el FRONT`);

    //res.redirect('http://127.0.0.1:5000/edit-movie.html');
    //let movie_id = req.body.movie_id;
    //res.redirect(`/edit-movie.html`)
    /*MovieModel.getOne(movie_id, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
            console.log(__dirname);
            //res.end(JSON.stringify(rows))
            //res.redirect('https://www.google.com/');
            //res.redirect(`http://127.0.0.1:5000/edit-movie.html/${movie_id}`);
            //res.sendFile('file:///C:/Users/usuario/Desktop/App_Peliculas/Views/edit-movie.html')
        }
    })*/


    /* ORIGINAL */
    let movie_id = req.params.movie_id;
    MovieModel.getOne(movie_id, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
            res.end(JSON.stringify(rows))
        }
    })

}

MovieController.insert = (req, res) => {

    //deben llevar el mismo nombre que las columnas de la base!!!
    let movie = {
            movie_id: req.body.movie_ID,
            title: req.body.title_movie,
            release_year: req.body.release_year,
            rating: req.body.rating_movie,
            image: req.body.poster_movie
        }
        //console.log("movie", movie);

    MovieModel.insert(movie, (err) => {
        console.log(err);
    })

}

MovieController.update = (req, res, next) => {

    let movie = {
        movie_id: req.body.movie_ID,
        title: req.body.title_movie,
        release_year: req.body.release_year,
        rating: req.body.rating_movie,
        image: req.body.poster_movie
    }

    //console.log(movie);

    MovieModel.update(movie, (err) => {
        if (err) {
            console.log(err)
        }
    })
}

MovieController.delete = (req, res, next) => {
    let movie_id = req.params.movie_id //requerir del formulario. El ID viene del index.jade
    MovieModel.delete(movie_id, (err, rows) => {

        if (err) {
            console.log(err);
        }
    })

}

module.exports = MovieController;