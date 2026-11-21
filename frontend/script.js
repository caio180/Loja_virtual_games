const jogos = [
    {
        nome: "Minecraft",
        preco: 99.90,
        estoque: 10,
        plataforma: [
            "PC", "Xbox 360", "Xbox One", "Xbox Series X/S",
            "PlayStation 3", "PlayStation 4", "PlayStation 5",
            "Nintendo Wii U", "Nintendo 3DS", "Nintendo Switch"
        ],
        genero: "Aventura",
        formato: "Virtual"
    },
    {
        nome: "GTA V",
        preco: 149.90,
        estoque: 5,
        plataforma: [
            "PC", "Xbox 360", "Xbox One", "Xbox Series X/S",
            "PlayStation 3", "PlayStation 4", "PlayStation 5"
        ],
        genero: "Ação",
        formato: "Mídia física"
    },
    {
        nome: "Red Dead Redemption 2",
        preco: 199.90,
        estoque: 0,
        plataforma: [
            "PC", "Xbox One", "Xbox Series X/S",
            "PlayStation 4", "PlayStation 5"
        ],
        genero: "Ação",
        formato: "Mídia física"
    },
    {
        nome: "GTA 6",
        preco: 299.90,
        estoque: 5,
        plataforma: [
            "PlayStation 5", "PlayStation 5 Pro",
            "Xbox Series X", "Xbox Series S"
        ],
        genero: "Ação",
        formato: "Virtual"
    },
    {
        nome: "Call of Duty",
        preco: 199.90,
        estoque: 8,
        plataforma: [
            "PC", "Xbox", "Xbox 360", "Xbox One",
            "Xbox Series X/S", "PlayStation 2",
            "PlayStation 3", "PlayStation 4", "PlayStation 5"
        ],
        genero: "Tiro",
        formato: "Mídia física"
    },
    {
        nome: "Red Dead Redemption",
        preco: 149.90,
        estoque: 6,
        plataforma: [
            "PC", "Xbox 360", "Xbox One", "Xbox Series X/S",
            "PlayStation 3", "PlayStation 4",
            "Nintendo Switch"
        ],
        genero: "Ação",
        formato: "Mídia física"
    },
    {
        nome: "Mario Kart",
        preco: 199.90,
        estoque: 7,
        plataforma: [
            "Super Nintendo", "Nintendo 64",
            "Nintendo Wii", "Nintendo Wii U",
            "Nintendo Switch"
        ],
        genero: "Corrida",
        formato: "Mídia física"
    }
];


const listarJogos = document.getElementById("lista-jogos");

function renderizarJogos(lista) {
    listarJogos.innerHTML = "";

    if(lista.length === 0) {
        listarJogos.innerHTML = "<p>Nenhum jogo encontrado.</p>";
        return;
    }

    lista.forEach(function(jogo) {
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
}
const campoBusca = document.getElementById("campo-busca");

campoBusca.addEventListener("input", function() {
    const termo = campoBusca.value.toLowerCase().trim();

    const jogosFiltrados = jogos.filter(function(jogo) {
        return jogo.nome.toLowerCase().includes(termo);
    });

    renderizarJogos(jogosFiltrados);
});

renderizarJogos(jogos);