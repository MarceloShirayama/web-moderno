let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 0;
console.log(!!isAtivo);

isAtivo = 1;
console.log(!!isAtivo);

console.log('----------------------------');
console.log('Verdadeiros:');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('----------------------------');
console.log('Falsos:');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('----------------------------');
console.log('Ou:');
console.log(!!('' || null || 0 || ' '));
console.log(('' || null || 0 || 'epa'));

console.log('Exemplo prático de ou:');
console.log('Valor padrão para uma variável');
let nome = '';
console.log(nome || 'desconhecido');
nome = 'Lucas';
console.log(nome || 'desconhecido');
