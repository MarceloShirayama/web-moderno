/*
A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma
função para identificar palavras semelhantes.
Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo
parâmetro, um array de strings. A função deverá filtrar as palavras do array que contêm
nelas a string do primeiro parâmetro.

Exemplos:

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
// retornará ["programação", "profissional"]

buscarPalavrasSemelhantes("java", ["javascript", "java", "c++"])
// retornará ["javascript", "java"]
*/

console.log('Resolução 1:');
console.log();

function searchSubstringInString1(substring, String) {
  return String.filter((word) => word.includes(substring));
}

console.log(
  searchSubstringInString1('java', ['javascript', 'java', 'c++']),
);

console.log(
  searchSubstringInString1('pro', ['programação', 'mobile', 'profissional']),
);

function searchSubstringInString2(substring, String) {
  const result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const word of String) {
    if (word.includes(substring)) result.push(word);
  }
  return result;
}

console.log('========================');

console.log('Resolução 2:');
console.log();

console.log(
  searchSubstringInString2('java', ['javascript', 'java', 'c++']),
);

console.log(
  searchSubstringInString2('pro', ['programação', 'mobile', 'profissional']),
);
