function getinteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao;

do {
  opcao = getinteiroAleatorioEntre(-1, 10);
  console.log(`Opção escolhida foi ${opcao}`);
} while (opcao !== -1);

console.log('Até a próxima');
