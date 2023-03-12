let movies = [
    {
        title: "Gato de Botas 2",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        poster: "../Images/catalogo_filmes/gato_botas_2.jpg",
        genero: "teste"
    },
    {
        title: "M3gan",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        poster: "../Images/catalogo_filmes/megan-poster-nacional.jpg",
        genero: "teste"
    },
    {
        title: "Chef Jack",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        poster: "../Images/catalogo_filmes/chef-jack-poster.jpg",
        genero: "teste"
    },
    {
        title: "Avatar",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        poster: "../Images/catalogo_filmes/avatar.jpg",
        genero: "teste"
    }
];

let moviesList = document.getElementById("movies-list");

// Adicionar cada filme à lista
for (let i = 0; i < movies.length; i++) {
    let movie = movies[i];

    // Criar elementos HTML para cada filme
    let li = document.createElement("li");
    li.dataset.genre = movie.genero;
    let img = document.createElement("img");
    img.src = movie.poster;
    img.alt = movie.title;
    let h3 = document.createElement("h3");
    h3.textContent = movie.title;
    let p = document.createElement("p");
    p.classList.add("movie-description");
    p.textContent = movie.desc.substring(0, 50) + "...";
    p.dataset.expanded = "false";
    let showMoreBtn = document.createElement("button");
    showMoreBtn.classList.add("show-more-button"); // Adicionando a classe show-more-button
    showMoreBtn.textContent = "Mostrar mais";
    showMoreBtn.addEventListener("click", function () {
        if (p.dataset.expanded === "false") {
            p.textContent = movie.desc;
            showMoreBtn.textContent = "Mostrar menos";
            p.dataset.expanded = "true";
        } else {
            p.textContent = movie.desc.substring(0, 50) + "...";
            showMoreBtn.textContent = "Mostrar mais";
            p.dataset.expanded = "false";
        }
    });

    // Adicionar elementos HTML ao li
    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(showMoreBtn);

    // Adicionar li à lista de filmes
    moviesList.appendChild(li);
}
