/*
39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de
modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice
versa e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar.
*/

const vetorA = [1, 2, 3];
const vetorB = [4, 5, 6];

function trocaValores(vetor1, vetor2) {
  const vetor1In = vetor1;
  const vetor2In = vetor2;
  let resultado = '';
  if (vetor1In.length === vetor2.length) {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < vetor1In.length; i++) {
      vetor1In[i] += vetor2In[i];
      vetor2In[i] -= vetor2In[i];
      vetor1In[i] -= vetor2In[i];
      resultado = `
        Novo vetor A: ${vetor1In}
        Novo vetor B: ${vetor2In}`;
    }
  } else {
    resultado = 'Vetores de tamanhos diferentes.';
  }
  return console.log(resultado);
}

trocaValores(vetorA, vetorB);
trocaValores([10, 100, 30], [115, 22, 64]);
trocaValores([10, 100], [115, 22, 64]);
trocaValores([10, 100, 30], [115, 22]);
