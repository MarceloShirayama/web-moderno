const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]);
console.log(valores[4]);

valores[4] = 10;
console.log(valores[4]);

console.log(valores.length);

valores.push({ id: 3 }, false, null, 'teste');// adiona um item ao final do array
console.log(valores);

console.log(valores.pop());// exclui o último item de um array
console.log(valores);

delete valores[0];// exclui o item de um array na posição especificada
console.log(valores);// a posição em que o itm estava fica vazia
console.log(valores[0]);
console.log(valores.length);

console.log(typeof valores);// em JS array é um objeto
