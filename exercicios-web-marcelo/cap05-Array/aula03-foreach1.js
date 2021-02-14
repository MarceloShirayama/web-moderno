const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

function logArrayElements(element, index) {
  console.log(`a[${index}] = ${element}`);
}

aprovados.forEach(logArrayElements);

aprovados.forEach((el, i) => console.log(`índice: ${i} -> valor: ${el}`));

aprovados.forEach((el) => console.log(`nome: ${el}`));

aprovados.forEach((el, i, array) => console.log(`[${array}] => índice: ${i} -> valor: ${el}`));
