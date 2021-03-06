/*
11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano
bissexto, imprimindo no console a mensagem e retornando true ou false.
*/

const verificaAnoBissexto = (ano) => {
  if (ano % 400 === 0) {
    return `O ano ${ano} é bissexto`;
  } if (ano % 4 === 0 && ano % 100 !== 0) {
    return `O ano ${ano} é bissexto`;
  }
  return `O ano ${ano} não é bissexto`;
};

const listaDeAnos = [];

// eslint-disable-next-line no-plusplus
for (let i = 1900; i <= 2100; i++) {
  listaDeAnos.push(i);
}

// eslint-disable-next-line no-plusplus
for (let i = 0; i < listaDeAnos.length; i++) {
  console.log(verificaAnoBissexto(listaDeAnos[i]));
}
