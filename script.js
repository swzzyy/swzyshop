const produtos = [
  { id: 1, nome: "Camiseta Preta", preco: 59.90 },
  { id: 2, nome: "Calça Jeans", preco: 129.90 },
  { id: 3, nome: "New Balance 9060", preco: 179,00 },
  { id: 4, nome: "Jaqueta", preco: 199.90 }
];

let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function carregarProdutos() {
  const container = document.getElementById("produtos");
  container.innerHTML = "";

  produtos.forEach(p => {
    container.innerHTML += `
      <div class="produto">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco}</p>
        <button onclick="addCarrinho(${p.id})">Comprar</button>
      </div>
    `;
  });
}

function addCarrinho(id) {
  carrinho.push(produtos.find(p => p.id === id));
  salvarCarrinho();
}

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  atualizarCarrinho();
}

function atualizarCarrinho() {
  document.getElementById("contador").innerText = carrinho.length;

  const lista = document.getElementById("listaCarrinho");
  lista.innerHTML = "";

  carrinho.forEach(item => {
    lista.innerHTML += `<li>${item.nome} - R$ ${item.preco}</li>`;
  });
}

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("ativo");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("ativo");
}

carregarProdutos();
atualizarCarrinho();
