const jogos = [
    {
        nome: "Minecraft",
        preco: 99.90,
        estoque: 10,
        plataforma: ["PC", "Xbox", "PlayStation", "Nintendo Switch"],
        genero: "Aventura",
        formato: "Virtual"
    },
    {
        nome: "GTA V",
        preco: 149.90,
        estoque: 5,
        plataforma: ["PC", "Xbox 360", "PlayStation 3"],
        genero: "Ação",
        formato: "Mídia física"
    },
    {
        nome:"Red Dead Redemption 2",
        preco: 199.90,
        estoque: 0,
        plataforma: ["PC", "Xbox 360", "PlayStation 3"],
        genero: "Ação",
        formato: "Mídia física"
    }
];


const listarJogos = document.getElementById("lista-jogos");

jogos.forEach(function(jogo) {
    const produto = document.createElement("article");

    produto.classList.add("card-produto");

    produto.innerHTML = `
        <div class="info-produto">
            <h3>${jogo.nome}</h3>
            <p class="plataforma">Plataforma: ${jogo.plataforma.join(", ")}</p>
            <p>Gênero: ${jogo.genero}</p>
            <p>Formato: ${jogo.formato}</p>
            <p>Estoque: ${jogo.estoque ?? 0}</p>
            <p class="preco">R$ ${jogo.preco.toFixed(2).replace(".", ",")}</p>
            <button ${!jogo.estoque ? "disabled" : ""}>
                ${jogo.estoque ? "Adicionar ao carrinho" : "Indisponível"}
            </button>
        </div>
    `;

    listarJogos.appendChild(produto);
});
