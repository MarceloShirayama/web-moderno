// Função factory criar produto
// que cria produto com os atributos: nome, preço

function criarProduto(nome, preco) {
  return {
    nome,
    preco: preco.toFixed(2),
    descontoMaximo: (0.1 * preco).toFixed(2),
  };
}

const produto1 = criarProduto('pamonha', 7.00);
const produto2 = criarProduto('coxinha', 4.50);
const produto3 = criarProduto('pastel', 5.00);

console.log(produto1);
console.log(produto2);
console.log(produto3);
