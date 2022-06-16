"use strict"
const getURL = new URLSearchParams(window.location.search),
    id = getURL.get('id'),
    btnGuardarCambios = document.querySelector(".button");

/*document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();*/

let inputMovieID = document.getElementById("movie_id"),
    inputTitle = document.getElementById("title_movie"),
    inputYear = document.getElementById("release_year"),
    inputRating = document.getElementById("rating_movie"),
    inputPoster = document.getElementById("poster_movie");

fetch(`http://localhost:3000/editar/${id}`, {
        method: 'GET',
    })
    .then(data => data.json())
    .then(res => {
        //console.log(JSON.stringify(res[0]))

        inputMovieID.value = res[0].movie_id;
        inputTitle.value = res[0].title;
        inputYear.value = res[0].release_year;
        inputRating.value = res[0].rating;
        inputPoster.value = res[0].image;

        //voy a probar primero sin el override.
        btnGuardarCambios.addEventListener("click", () => {

            let movie_ID = document.getElementById("movie_id").value;
            let title_movie = document.getElementById("title_movie").value;
            let release_year = document.getElementById("release_year").value;
            let rating_movie = document.getElementById("rating_movie").value;
            let poster_movie = document.getElementById("poster_movie").value;
            let movie = { movie_ID: movie_ID, title_movie: title_movie, release_year: release_year, rating_movie: rating_movie, poster_movie: poster_movie }


            fetch(`http://localhost:3000/actualizar/${movie_ID}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(movie)
            })

            window.location.href = 'http://localhost:5000'
        })



    })
    .catch(err => console.log(err))
    //})