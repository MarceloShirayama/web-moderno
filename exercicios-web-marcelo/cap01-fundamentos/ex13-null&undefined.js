const a = { name: 'Teste' };
console.log(a);

const b = a;// atribuicao por referencia
// por ser um objeto
// foi passado o endereço de memória da var a para a var b
console.log(b);

b.name = 'Opa';
console.log(a);

const c = 3;
let d = c;// por ser um elemento primitivo da linguagem
// foi feita uma cópia por valor
console.log(d);
d += 1;
console.log(`c = ${c} e d = ${d}`);

console.log(`
JavaScript é uma linguagem orientada a objetos: isso significa que a maioria das
coisas em JavaScript são Objetos. Por exemplo, as funções são Objetos.
 Os únicos elementos que não são objetos são os Dados de Tipos Primitivos:
 string, number, boolean, null e undefined. 
 Esses tipos de dados primitivos também são imutáveis, o que significa que,
 uma vez criados, eles não podem ser modificados.

Uma das diferenças entre os dois é que os dados de tipos primitivos são passados como valor
e os objetos são passados como referência.
`);

console.log('==========================================================');
console.log('undefined');
let valor;// variável declarada, mas não inicializada com um valor
console.log(valor);
// console.log(outroValor); => ReferenceError: valor2 is not defined => (nem foi declarado).

console.log('==========================================================');
console.log('null');
valor = null;// null: ausência de valor, não está apontando para um endereço de memória.
console.log(valor);// variável declarada e inicializada com ausência de valor.
console.log(`
  Dica: se quiser zerar uma variável do tipo referência que aponta para um objeto ou uma função,
  atribua null a variável.
  `);

// console.log(valor.toString()); => TypeError: Cannot read property 'toString' of null

const produto = {};
console.log(produto);
console.log(produto.preco);// => undefined
// console.log(produto.preco.a); => TypeError: Cannot read property 'a' of undefined
produto.preco = 3.50;
console.log(produto.preco);
produto.preco = undefined;// evite atribuir undefined
console.log(!!produto.preco);
console.log(produto);
produto.preco = null;
console.log(!!produto.preco);
console.log(produto);
