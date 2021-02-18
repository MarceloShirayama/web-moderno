/*
Desenvolva uma função que receba como parâmetro um número de 1 a 10. Internamente, na
função, será gerado um número aleatório de 1 a 10. A função deverá retornar se o
parâmetro de entrada foi igual ao número sorteado internamente. Se o valor fornecido
foi o sorteado, retorne "Parabéns! O número sorteado foi o X". Se não for igual,
retorne "Que pena! O número sorteado foi o X". X é o número que foi sorteado.
Exemplos:
funcaoDaSorte(10) // retornará "Parabéns! O número sorteado foi o 10"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 3"
funcaoDaSorte(5) // retornará "Que pena! O número sorteado foi o 1"
*/

function funcaoDaSorte(palpite) {
  const numSorteado = Math.trunc(Math.random() * 10);
  return numSorteado === palpite
    ? `Palpite ${palpite}. Parabéns! O número sorteado foi o ${numSorteado}.`
    : `Palpite ${palpite}. Que pena! O número sorteado foi o ${numSorteado}.`;
}

console.log(funcaoDaSorte(1));
console.log(funcaoDaSorte(2));
console.log(funcaoDaSorte(3));
console.log(funcaoDaSorte(4));
console.log(funcaoDaSorte(5));
console.log(funcaoDaSorte(6));
console.log(funcaoDaSorte(7));
console.log(funcaoDaSorte(8));
console.log(funcaoDaSorte(9));
console.log(funcaoDaSorte(10));
