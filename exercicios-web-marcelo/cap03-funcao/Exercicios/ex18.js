/*
18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso.
Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’
*/

function numeroPorExtenso(numero) {
  switch (numero) {
    case 0:
      console.log(`${numero} por extenso: zero`);
      break;
    case 1:
      console.log(`${numero} por extenso: um`);
      break;
    case 2:
      console.log(`${numero} por extenso: dois`);
      break;
    case 3:
      console.log(`${numero} por extenso: três`);
      break;
    case 4:
      console.log(`${numero} por extenso: quatro`);
      break;
    case 5:
      console.log(`${numero} por extenso: cinco`);
      break;
    case 6:
      console.log(`${numero} por extenso: seis`);
      break;
    case 7:
      console.log(`${numero} por extenso: sete`);
      break;
    case 8:
      console.log(`${numero} por extenso: oito`);
      break;
    case 9:
      console.log(`${numero} por extenso: nove`);
      break;
    case 10:
      console.log(`${numero} por extenso: dez`);
      break;
    default:
      console.log(`${numero} fora do intervalo`);
      break;
  }
}

numeroPorExtenso(0);
numeroPorExtenso(1);
numeroPorExtenso(2);
numeroPorExtenso(3);
numeroPorExtenso(4);
numeroPorExtenso(5);
numeroPorExtenso(6);
numeroPorExtenso(7);
numeroPorExtenso(8);
numeroPorExtenso(9);
numeroPorExtenso(10);
numeroPorExtenso(11);
