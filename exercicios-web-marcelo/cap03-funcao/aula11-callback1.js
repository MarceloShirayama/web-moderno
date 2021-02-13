const fabricantes = ['Mercedez', 'Audi', 'BMW'];

function imprimir(nome, indice) {
  console.log(`${indice + 1}, ${nome}`);
}

fabricantes.forEach(imprimir);

console.log('==========================');
// eslint-disable-next-line arrow-parens
fabricantes.forEach(fabricante => console.log(fabricante));
