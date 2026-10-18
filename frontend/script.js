const jogos = [
    {
        nome: "Minecraft",
        preco: 99.90,
        plataforma: "PC"
    },
    {
        nome:"GTA V",
        preco: 149.90,
        plataforma: "PC"
    },
    {
        nome:"Red Dead Redemption 2",
        preco: 199.90,
        plataforma: "Xbox Series X"
    }
];

const listarJogos = document.getElementById("lista-jogos");

jogos.forEach(function(jogo) {
    const produto = document.createElement("article");

    produto.innerHTML = `
        <h3>${jogo.nome}</h3>
        <p>Plataforma: ${jogo.plataforma}</p>
        <p>Preco: R$ ${jogo.preco.toFixed(2).replace(".", ",")}</p>
        <button>Adicionar ao carrinho</button>
        `;

    listarJogos.appendChild(produto);
});