/* eslint-disable no-underscore-dangle */
const sequence = {
  _id: 1,
  get id() {
    // eslint-disable-next-line no-return-assign
    return this._id += 1;
  },
};

const produtos = {};

function salvarProduto(produto) {
  // eslint-disable-next-line no-param-reassign
  if (!produto.id) produto.id = sequence.id;
  produtos[produto.id] = produto;
  return produto;
}

function getProduto(id) {
  return produtos[id] || {};
}

function getProdutos() {
  return Object.values(produtos);
}

function excluirProduto(id) {
  const produto = produtos[id];
  delete produtos[id];
  return produto;
}

module.exports = {
  salvarProduto, getProduto, getProdutos, excluirProduto,
};
