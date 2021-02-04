const imprimirResultado = (nota) => {
  if (typeof nota === 'string') {
    console.log('Insira um número');
  } else if (nota >= 7) {
    console.log('Aprovado');
  } else {
    console.log('Reprovado');
  }
};

imprimirResultado(10);
imprimirResultado(4);
imprimirResultado('Epa');
imprimirResultado('');
imprimirResultado(' ');
