// Crie uma função que irá receber dois valores, o dividendo e o divisor.
// A função deverá imprimir o resultado e o resto da divisão destes dois valores.

const restoDivisao = (x, y) => {
  console.log(`Resultado inteiro: ${Math.floor(x / y)}`);
  console.log(`Resto: ${x % y}`);
};

restoDivisao(10, 2);
restoDivisao(10, 3);
restoDivisao(10, 4);
restoDivisao(10, 6);
