const nums = [1, 2, 3, 4, 5];

const dobroNums = nums.map((el) => el * 2);
console.log(dobroNums);

// eslint-disable-next-line func-names
const numInLetra = function (num) {
  switch (num) {
    case 1:
      return 'A';
    case 2:
      return 'B';
    case 3:
      return 'C';
    case 4:
      return 'D';
    case 5:
      return 'E';
    default:
      return 'Fora do intervalo.';
  }
};

const alterar = nums.map((el) => numInLetra(el));
console.log(alterar);

const soma10 = (el) => el + 10;
console.log(nums.map(soma10));

const triplo = (el) => el * 3;
console.log(nums.map(triplo));

const paraDinheiro = (el) => `R$ ${parseFloat(el).toFixed(2).replace('.', ',')}`;
const resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
