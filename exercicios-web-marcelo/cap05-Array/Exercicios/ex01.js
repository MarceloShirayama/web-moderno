function cumprimentar1(nome) {
  return 'Olá, '.concat(nome, '!');
}
console.log(cumprimentar1('Leonardo'));

function cumprimentar2(nome) {
  return `Olá, ${nome}!`;
}
console.log(cumprimentar2('Maira'));

function cumprimentar3(nome) {
  const saudacao = 'Olá';
  return [saudacao, nome].join(', ').concat('!');
}
console.log(cumprimentar3('João'));
