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
const btnCarrinho = document.getElementById("carrinho_compra");
const modalCarrinho = document.getElementById("modal-carrinho");
const btnFecharModal = document.getElementById("fechar-modal");
const contadorCarrinhoEl = document.getElementById("contador-carrinho");
const containerItensCarrinho = document.getElementById("itens-carrinho");
const totalCarrinhoEl = document.getElementById("total-carrinho");
const btnPerfil = document.getElementById("perfil_usuario")
const modalPerfil = document.getElementById("modal-perfil");
const btnFecharModal2 = document.getElementById("fechar-modal2");

let carrinho = [];

function adicionarAoCarrinho(jogo) {
    if (!jogo.estoque || jogo.estoque <= 0) {
        alert("Este jogo está indisponível no momento.");
        return;
    }
    const itemExistente = carrinho.find(function(item) {
        return item.nome === jogo.nome;
    });
    if(itemExistente) {
        if(itemExistente.quantidade >= jogo.estoque) {
            alert("Não é possível adicionar mais unidades deste jogo ao carrinho. Estoque insuficiente.");
        }
        else{ 
            itemExistente.quantidade +=1;
        }
    } else {
        carrinho.push({
            nome: jogo.nome,
            preco: jogo.preco,
            quantidade: 1
        });    
    }
    atualizarCarrinho();
}

// NOVA FUNÇÃO: Diminui 1 unidade ou remove o item se chegar a 0
function removerDoCarrinho(nomeJogo) {
  const index = carrinho.findIndex(function(item) {
    return item.nome === nomeJogo;
  });

  if (index !== -1) {
    if (carrinho[index].quantidade > 1) {
      carrinho[index].quantidade -= 1;
    } else {
      carrinho.splice(index, 1);
    }
  }
  atualizarCarrinho();
}

function atualizarCarrinho() {
  let totalItens = 0;
  carrinho.forEach(function(item) {
    totalItens += item.quantidade;
  });
  contadorCarrinhoEl.textContent = totalItens;
  containerItensCarrinho.innerHTML = "";

    // Exibe a mensagem novamente se o carrinho ficar vazio
  if (carrinho.length === 0) {
    containerItensCarrinho.innerHTML = "<p>Seu carrinho está vazio.</p>";
    totalCarrinhoEl.textContent = "R$ 0,00";
    return;
  }

  carrinho.forEach(function(item) {
    const itemCarrinho = document.createElement("div");
    itemCarrinho.classList.add("item-carrinho");

    // Botão posicionado logo antes (à esquerda) do span de Preço
    itemCarrinho.innerHTML = `
      <span>${item.nome}</span>
      <span>Quantidade: ${item.quantidade}</span>
      <button class="btn-remover" type="button">Remover</button>
      <span>Preço: R$ ${(item.preco * item.quantidade).toFixed(2).replace(".", ",")}</span>
    `;

    // Evento de clique para remover o item
    const btnRemover = itemCarrinho.querySelector(".btn-remover");
    btnRemover.addEventListener("click", function() {
      removerDoCarrinho(item.nome);
    });

    containerItensCarrinho.appendChild(itemCarrinho);
  });

  let totalPreco = 0;
  carrinho.forEach(function(item) {
    totalPreco += item.preco * item.quantidade;
  });
  totalCarrinhoEl.textContent = `R$ ${totalPreco.toFixed(2).replace(".", ",")}`;
}

modalCarrinho.addEventListener("click", function(event) {
    if(event.target === modalCarrinho) {
        modalCarrinho.classList.add("escondido");
    }
});

btnCarrinho.addEventListener("click", function() {
    modalCarrinho.classList.remove("escondido");
});

btnFecharModal.addEventListener("click", function() {
    modalCarrinho.classList.add("escondido");
});

modalPerfil.addEventListener("click", function(event) {
    if(event.target === modalPerfil) {
        modalPerfil.classList.add("escondido");
    }
});

btnPerfil.addEventListener("click", function() {
    modalPerfil.classList.remove("escondido");
});

btnFecharModal2.addEventListener("click", function(event) {
    modalPerfil.classList.add("escondido");
});

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

        const botao = produto.querySelector("button");
        botao.addEventListener("click", function() {
            adicionarAoCarrinho(jogo);
        });

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
