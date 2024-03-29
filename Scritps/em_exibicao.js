let movies = [
    {
        title: "Homem-Formiga e a Vespa: Quantumania",
        desc: "É a vez de Scott Lang e Hope Van Dyne explorarem o Reino Quântico, conhecer criaturas completamente novas e embarcar numa aventura que pode ter enormes consequências para o universo. Mas lá mora um tirano poderoso.",
        poster: "../Images/catalogo_filmes/em_exibicao/h_formiga.jpg",
        genero: "teste"
    },
    {
        title: "Gemini: Planeta Sombrio",
        desc: "Depois de esgotar os recursos da Terra, a sobrevivência da humanidade requer uma missão ao espaço sideral, onde algo inimaginável está à espreita.",
        poster: "../Images/catalogo_filmes/em_exibicao/planeta_sombrio.jpg",
        genero: "teste"
    },{
        title: "O Menino e o Tigre",
        desc: "O órfão Balmani resgata o filhote de tigre Mukti de caçadores cruéis e, juntos, eles partem em uma aventura para encontrar um lar seguro para o tigre.",
        poster: "../Images/catalogo_filmes/em_exibicao/o_m_e_o_tigre.jpg",
        genero: "teste"
    },
    {
        title: "Tudo em Todo Lugar ao Mesmo Tempo ",
        desc: "Uma ruptura interdimensional bagunça a realidade e uma inesperada heroína precisa usar seus novos poderes para lutar contra os perigos bizarros do multiverso.",
        poster: "../Images/catalogo_filmes/em_exibicao/tudo_em_todo_lugar.jpg",
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