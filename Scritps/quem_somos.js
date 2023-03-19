let cards = [
    {
        title: "Problema",
        desc: "A desigualdade na distribuição e promoção de filmes é um problema significativo no mundo cinematográfico. No entanto, com esforços contínuos para promover a diversidade e igualdade de oportunidades, há esperança de que a indústria do entretenimento cinematográfico se torne mais inclusiva e diversificada, permitindo que todos os tipos de filmes tenham uma chance justa de serem vistos pelo público em geral. Mas que acima de tudo, a comunidade em geral que não tem as condições necessárias para ver todos os filmes em cartaz possa escolher da forma mais assertiva possível na hora de ir ao cinema.",   
    },{
        title: "Proposta",
        desc: "Para mitigar os problemas encontrados, o 'Vai Ver O Que?'' visa fornecer aos cinéfilos um ambiente online completo e fácil de usar para encontrar informações sobre recomendações de filmes semanais, bem como informações sobre os cinemas locais e as exibições em cartaz. Com recursos adicionais como avaliações e recomendações personalizadas, a plataforma permite que os usuários descubram novos filmes e expandam seus horizontes cinematográficos. Com essa iniciativa, espera-se que mais pessoas possam desfrutar do entretenimento cinematográfico de uma forma mais informada e acessível.",
    },{
        title: "Quem Somos Nós",
        desc: "Nossa equipe é formada por apaixonados por cinema, que trabalham duro para fornecer avaliações e recomendações de filmes precisas e imparciais. Nosso site é projetado para ser fácil de usar e oferece recursos como informações atualizadas sobre os cinemas locais, incluindo o que está sendo exibido e a quantidade de salas disponíveis para cada filme. Acreditamos que o cinema é uma forma poderosa de arte e entretenimento, e nosso objetivo é torná-lo acessível e agradável para todos. Estamos comprometidos em fornecer um ambiente seguro e amigável para todos os usuários do nosso site.",
    }
];

let cardsList = document.getElementById("cards-list");

// Adicionar cada filme à lista
for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    // Criar elementos HTML para cada filme
    let li = document.createElement("li");
    let h3 = document.createElement("h3");
    h3.textContent = card.title;
    let p = document.createElement("p");
    p.classList.add("cards-list");
    p.textContent = card.desc;
    
    // Adicionar elementos HTML ao li
    li.appendChild(h3);
    li.appendChild(p);

    // Adicionar li à lista de filmes
    cardsList.appendChild(li);
}