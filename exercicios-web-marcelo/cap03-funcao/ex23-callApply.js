function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco, // associa esse atributo a função
};

globalThis.preco = 20;
globalThis.desc = 0.1;
console.log(`Preço do produto:${produto.preco}`);
console.log(`Taxa de desconto: ${produto.desc}`);
console.log(`Desconto: ${getPreco()}`);
console.log(`Preço final: ${produto.getPreco()}`);

console.log('==============================================');
// call
console.log('getPreco com call');
const carro = { preco: 49990, desc: 0.2 };
let precoComDesconto = getPreco.call(carro);
console.log(`Preço do carro com desconto: ${precoComDesconto}`);

console.log('==============================================');
// apply
console.log('getPreco com aplly');
precoComDesconto = getPreco.apply(carro);
console.log(`Preço do carro com desconto: ${precoComDesconto}`);

console.log('==============================================');
console.log('getPreco com call passando os parametros');
// parâmetros direto na função
precoComDesconto = getPreco.call(carro, 0.17, '$');
console.log(`Preço do carro com desconto: ${precoComDesconto}`);

console.log('==============================================');
console.log('getPreco com apply passando os parametros');
// parâmetros em um array
precoComDesconto = getPreco.apply(carro, [0.17, '$']);
console.log(`Preço do carro com desconto: ${precoComDesconto}`);
