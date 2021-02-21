console.log('Declaração do Map:');

const tecnologias = new Map();

console.log(tecnologias);

console.log('------------------------------');

console.log();

console.log('Inserindo elementos no Map:');

tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log('------------------------------');

console.log('Acessando elementos do Map:');

console.log(tecnologias);
console.log(tecnologias.react); // não funciona como o Object
console.log(tecnologias.get('react')); // tem que usar o get
console.log(tecnologias.get('react').framework);

console.log('=========================');

console.log('Declarando o Map e já inserindo elementos:');

const chavesVariadas = new Map([
  [function funcaoQualquer() { }, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número'],
]);

console.log(chavesVariadas);

console.log();

chavesVariadas.forEach((vl, ch) => console.log(ch, vl));

console.log('------------------------------');
console.log('has função que diz se o elemento está contido no Map:');
console.log(chavesVariadas.has(123));

console.log('------------------------------');
console.log('Deletar elemento do Map:');
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));

console.log('------------------------------');
console.log('função size diz quantos elementos tem no Map:');
console.log(chavesVariadas.size);

console.log('------------------------------');
console.log('Não aceita chaves duplicadas:');
chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b'); // mantém o valor declarado para a chave
console.log(chavesVariadas);
