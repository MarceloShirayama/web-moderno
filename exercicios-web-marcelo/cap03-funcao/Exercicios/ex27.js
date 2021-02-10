/*
27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento
anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança
menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para
as unidades de medida.
*/

function calcCresc(alturaCriancaMenor, taxaCriancaMenor, alturaCriancaMaior, taxaCriancaMaior) {
  let anos = 0;
  let alturaMenor = alturaCriancaMenor;
  let alturaMaior = alturaCriancaMaior;
  while (alturaMenor < alturaMaior) {
    alturaMenor += taxaCriancaMenor;
    alturaMaior += taxaCriancaMaior;
    anos++;
  } return anos;
}

function txCrescimento(alt1, tx1, alt2, tx2) {
  let mensagem = '';
  if (alt1 > alt2) {
    if (tx1 < tx2) {
      mensagem = `A criança 2 alcançará a criança 1 em ${calcCresc(alt2, tx2, alt1, tx1)} anos.`;
    } else {
      mensagem = 'A criança 1 sempre será maior.';
    }
  } else if (alt1 < alt2) {
    if (tx1 > tx2) {
      mensagem = `A criança 1 alcançará a criança 2 em ${calcCresc(alt1, tx1, alt2, tx2)} anos.`;
    } else {
      mensagem = 'A criança 2 sempre será maior.';
    }
  } else {
    // eslint-disable-next-line no-lonely-if
    if (tx1 > tx2) {
      mensagem = 'A criança 1 será maior no próximo ano.';
    } else if (tx1 < tx2) {
      mensagem = 'A criança 2 será maior no próximo ano.';
    } else {
      mensagem = 'As 2 crianças vão ter sempre o mesmo tamanho.';
    }
  }
  return mensagem;
}

console.log('1 comparação');
console.log(txCrescimento(1.3, 1, 1, 1.1)); // A criança 2 alcançará a criança 1 em x anos.
console.log('2 comparação');
console.log(txCrescimento(1.3, 1, 1, 1)); // A criança 1 sempre será maior.
console.log('3 comparação');
console.log(txCrescimento(1.1, 1.1, 1, 1)); // A criança 1 sempre será maior.
console.log('4 comparação');
console.log(txCrescimento(1, 1.1, 1.3, 1)); // A criança 1 alcançará a criança 1 em x anos.
console.log('5 comparação');
console.log(txCrescimento(1, 1, 1.3, 1)); // A criança 2 sempre será maior.
console.log('6 comparação');
console.log(txCrescimento(1, 1, 1.3, 1.1)); // A criança 2 sempre será maior.
console.log('7 comparação');
console.log(txCrescimento(1, 1.1, 1, 1)); // A criança 1 será maior no próximo ano.
console.log('8 comparação');
console.log(txCrescimento(1, 1, 1, 1.1)); // A criança 2 será maior no próximo ano.
console.log('9 comparação');
console.log(txCrescimento(1, 1, 1, 1)); // As 2 crianças vão ter sempre o mesmo tamanho.
