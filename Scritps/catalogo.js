let movies = [
    {
        title: "Gato de Botas 2",
        desc: "O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele já gastou oito de suas nove vidas. Ele então parte em uma jornada épica para encontrar o mítico Último Desejo e restaurar suas nove vidas.",
        poster: "../Images/catalogo_filmes/gato_botas_2.jpg",
        genero: "teste"
    },
    {
        title: "M3gan",
        desc: "M3GAN é uma maravilha da inteligência artificial, uma boneca realista programada para ser a melhor amiga de uma criança. Uma robótica brilhante dá a sua jovem sobrinha um protótipo M3GAN, mas a máquina logo se torna violenta.",
        poster: "../Images/catalogo_filmes/megan-poster-nacional.jpg",
        genero: "teste"
    },
    {
        title: "Chef Jack",
        desc: "Os chefs Jack e Leonard vão cruzar as Ilhas Culinárias para completar as provas da 'Convergência de Sabores', a maior competição gastronômica do mundo e tentar vencer seus concorrentes.",
        poster: "../Images/catalogo_filmes/chef-jack-poster.jpg",
        genero: "teste"
    },
    {
        title: "Avatar",
        desc: "No exuberante mundo alienígena de Pandora vivem os Na'vi, seres que parecem ser primitivos, mas são altamente evoluídos. Como o ambiente do planeta é tóxico, foram criados os avatares, corpos biológicos controlados pela mente humana.",
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
