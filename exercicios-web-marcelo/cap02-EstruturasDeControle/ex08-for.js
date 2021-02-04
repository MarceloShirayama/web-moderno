let contador = 1;

console.log('Contador com while:');
while (contador <= 10) {
  console.log(`Contador = ${contador}`);
  contador++;
}

console.log('========================');
console.log('Contador com for:');
for (let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`);
}

console.log('========================');
console.log('Percorrer o array com for:');
const notas = [6.7, 7.4, 9.8, 8.1, 7.7];
for (let i = 0; i < notas.length; i++) {
  console.log(`nota = ${notas[i]}`);
}
