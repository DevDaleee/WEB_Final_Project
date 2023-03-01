let movies = [
{
    title: "Gato de Botas 2",
    desc: "Descrição do filme",
    poster: "../Images/catalogo_filmes/gato_botas_2.jpg",
    genero: "teste"
},
{
    title: "M3gan",
    desc: "Descrição do filme",
    poster: "../Images/catalogo_filmes/megan-poster-nacional.jpg",
    genero: "teste"
},{
    title: "Chef Jack",
    desc: "Descrição do filme",
    poster: "../Images/catalogo_filmes/chef-jack-poster.jpg",
    genero: "teste"
},
{
    title: "Avatar",
    desc: "Descrição do Filme",
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
    p.textContent = movie.desc;

    // Adicionar elementos HTML ao li
    li.appendChild(img);
    li.appendChild(h3);
    li.appendChild(p);

    // Adicionar li à lista de filmes
    moviesList.appendChild(li);
}