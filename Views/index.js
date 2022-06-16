"use strict"

const button = document.querySelector(".button");
const buttonEdit = document.querySelector(".edit");
const tableBody = document.querySelector(".t_body");


document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(data => {
            data.forEach(res => {
                console.log(res);

                //image
                let img = document.createElement('img');
                img.classList.add('img-movie');

                //btn Edit
                /* 
                let formEdit = document.createElement('form')
                formEdit.method = 'GET';
                formEdit.action = `/editar/${res.movie_id}` */

                let btnEdit = document.createElement('input');
                btnEdit.type = 'submit';
                btnEdit.value = 'Editar';
                btnEdit.className = 'edit';

                //formEdit.appendChild(btnEdit)

                //btn Delete
                /*let formDelete = document.createElement('form')
                formDelete.method = 'POST';*/
                let btnDelete = document.createElement('input');
                btnDelete.type = 'submit';
                btnDelete.value = 'Eiminar';
                btnDelete.className = 'delete';

                //formDelete.appendChild(btnDelete)
                let tableRow = document.createElement('tr');
                let tableData1 = document.createElement('td');
                let tableData2 = document.createElement('td');
                let tableData3 = document.createElement('td');
                let tableData4 = document.createElement('td');
                let tableData5 = document.createElement('td');
                let tableData6 = document.createElement('td');
                let tableData7 = document.createElement('td');
                img.src = `${res.image}`;
                tableData1.innerHTML = `<b>${res.movie_id}</b>`;
                tableData2.innerHTML = `${res.title}`;
                tableData3.innerHTML = `${res.release_year}`;
                tableData4.innerHTML = `${res.rating}`;
                tableData5.appendChild(img)
                tableData6.appendChild(btnEdit)
                tableData7.appendChild(btnDelete)

                tableRow.appendChild(tableData1)
                tableRow.appendChild(tableData2)
                tableRow.appendChild(tableData3)
                tableRow.appendChild(tableData4)
                tableRow.appendChild(tableData5)
                tableRow.appendChild(tableData6)
                tableRow.appendChild(tableData7)

                tableBody.appendChild(tableRow)



                btnEdit.addEventListener("click", () => {
                    window.location.href = `./edit-movie.html?id=${res.movie_id}`;
                })

                btnDelete.addEventListener("click", () => {

                    fetch(`http://localhost:3000/eliminar/${res.movie_id}`, {
                        method: 'DELETE',
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(res)
                    })
                    window.location.href = './';
                })

            })
        })
        .catch(err => console.log(err))

})

button.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = './add-form.html';
})