const escola = 'cod3r'

console.log(escola.charAt(4));  /* retorna o caractere na posição 4 da string
                                                        , no caso 'r'.*/

console.log(escola.charAt(10));  // retorna uma string vazia.

const valorPosicaoForaDaString = escola.charAt(10);
console.log(typeof valorPosicaoForaDaString);

console.log(escola.charCodeAt(3));  // retorna o valor UTF-16 do caracter na posição fornecida.

console.log(escola.indexOf('d'));  // retorna a posição no índice do caractere.

console.log(escola.substring(1));  // retorna uma string a partir da posição escolhida até o final.

console.log(escola.substring(1, 3));  /* retorna uma string a partir da posição inicial escolhida até a posição final escolhida
                                                            sem incluir a posição final. */

console.log('Escola '. concat(escola).concat('!'));
console.log('Escola ' + escola + '!');

console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\d/, 'e'));

console.log('Ana, Maria, Pedro'.split(', '));  // converte string em array
