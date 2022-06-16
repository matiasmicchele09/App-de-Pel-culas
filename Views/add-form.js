"use strict"

const btn_Add = document.getElementById("btn-add");
const saveForm = document.getElementById("saveMovie");

btn_Add.addEventListener("click", (event) => {
    event.preventDefault()
    let movie_ID = document.getElementById("movie_id").value;
    let title_movie = document.getElementById("title_movie").value;
    let release_year = document.getElementById("release_year").value;
    let rating_movie = document.getElementById("rating_movie").value;
    let poster_movie = document.getElementById("poster_movie").value;
    //tipo objeto
    let movie = { movie_ID: movie_ID, title_movie: title_movie, release_year: release_year, rating_movie: rating_movie, poster_movie: poster_movie }
    console.log(movie);
    console.log(typeof movie);
    //tipo string
    let movieJSON = JSON.stringify(movie);
    console.log(movieJSON);
    console.log(typeof movieJSON);

    fetch('http://localhost:3000/add-movie', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: movieJSON,
    });

    //debugger;
    window.location.href = './'
})