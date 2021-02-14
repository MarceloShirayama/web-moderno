console.log(typeof Array);
// eslint-disable-next-line no-array-constructor
console.log(typeof new Array());
console.log(typeof []);

console.log('===================================');

console.log('Criando Array:');

console.log();
console.log('Array constructor:');

// eslint-disable-next-line no-array-constructor
let aprovados = new Array('Bia', 'Carlos', 'Ana'); // The array literal notation [] is preferable.
console.log(aprovados);

console.log();
console.log('Array literal notation:');

aprovados = ['Ana', 'Bia', 'Carlos']; // literal notation.
console.log(aprovados);
// eslint-disable-next-line max-len

console.log('===================================');

console.log('Acesso aos elementos do Array:');

console.log(aprovados[0]); // Array é uma estrutura indexada.
console.log(aprovados[1]); // Acesso aos elementos do Array através do índice.
console.log(aprovados[2]);
console.log(aprovados[3]); // acesso a um índice fora do Array => undefined.

console.log('===================================');

console.log('Adicionado elemento ao Array:');

console.log();
console.log('Por índice:'); // mais usado para substituir um elemento.
aprovados[3] = 'Paulo';
console.log(aprovados);

console.log();
console.log('Com push, adiciona ao final do Array:');
aprovados.push('José');
console.log(aprovados);

console.log();
console.log('Adicionando um elemento, pulando índice não existentes:');
console.log(`Número de elementos do array: ${aprovados.length}`);
aprovados[6] = 'Maria'; // cria o elemento e os elementos, entre o último elemento e o elemento criado, também são criados como undefined.
console.log(aprovados);
console.log(`Número de elementos do array: ${aprovados.length}`);
console.log(`Elemento criado sem valor é undefined: ${aprovados[5] === undefined}`);
console.log(`Elemento criado sem valor é null: ${aprovados[5] === null}`);

console.log();
console.log('Com unshift, ao início do array:');
aprovados.unshift('Teresa');
console.log(aprovados);

console.log();
console.log('Com splice, em uma posição definida');
aprovados.splice(3, 1, 'João');
console.log(aprovados);

console.log('===================================');

console.log();

console.log('Outros métodos de Array:');

console.log();
console.log('sort');
aprovados.sort();
console.log(aprovados);

console.log('--------------------------------------');

console.log('Excluindo elemento do Array:');

console.log();
console.log('Com delete:');
// eslint-disable-next-line max-len
delete aprovados[1]; // deleta o elemento, mas mantém os elementos e suas posições. Na posição do elemento deletado fica undefined.
console.log(aprovados);

console.log();
console.log('Com splice:');
aprovados.splice(1, 1);
console.log(aprovados);
aprovados.splice(-1, 1);
console.log(aprovados);

console.log();
console.log('Com pop (exclui último elemento do Arary):');
aprovados.pop();
console.log(aprovados);

console.log();
console.log('Com shift (exclui primeiro elemento do Arary):');
aprovados.shift();
console.log(aprovados);

console.log('--------------------------------------');

console.log('Adicionado e removendo elementos:');

console.log();
console.log(aprovados);

console.log();
console.log('Método splice (muito versátil):');

console.log();
console.log('Removendo índice 1 e adicionado a partir da poisção 1, 2 elementos;');
aprovados.splice(1, 1, 'Pedro', 'Mariana');
console.log(aprovados);

console.log();
console.log('Adicionado a partir da posição 2, 1 elemento:');
aprovados.splice(2, 0, 'Carlos');
console.log(aprovados);

console.log('============================================');

console.log('Copiar parte de um Array:');

console.log();
console.log('Método slice:');
/*
O método slice() retorna uma cópia superficial de uma parte de uma matriz em um novo objeto
de matriz selecionado de start a end ( end não incluído) onde start e end representa o índice
de itens nessa matriz. A matriz original não será modificada.
*/

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
console.log(pilotos);

console.log();
console.log('Copiando da posição 2 até o final do Array:');
const ultimosPilotos = pilotos.slice(2);
console.log(ultimosPilotos);

console.log();
console.log('Copiando da posição 0 até a posição 2, excluindo a posição 2, do Array:');
const primeirosPilotos = pilotos.slice(0, 2);
console.log(primeirosPilotos);

console.log();
console.log('Array original continua o mesmo:');
console.log(pilotos);
