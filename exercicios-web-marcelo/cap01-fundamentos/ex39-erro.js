function imprimirNomeGritado(obj) {
  try {
    console.log(`${obj.name.toUpperCase()} !!!`);
  } catch (error) {
    // tratarErroELancar(error);
    throw new Error('mensagem de erro pesonalizada');
  } finally {
    console.log('Final');
  }
}

const objeto = { nome: 'Roberto' };
imprimirNomeGritado(objeto);
