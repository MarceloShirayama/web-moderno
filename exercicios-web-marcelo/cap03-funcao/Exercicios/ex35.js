/*
35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha
conterá cinco elementos inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores
contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha e mostrá-los no console.
É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao final
das operações imprima os vetores no console.
*/

const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];

function adiciona(vetorRecebe, vetorEnvia) {
  for (let i = 0; i < vetorEnvia.length; i++) {
    vetorRecebe.push(vetorEnvia[i]);
    console.log(vetorEnvia[i]);
  }
  console.log(`vetor adicionado: ${vetorEnvia}`);
  console.log(`vetor resultado: ${vetorRecebe}`);
}

adiciona(vetorPilha, vetorAdiciona);
