/* eslint-disable no-lone-blocks */
/* eslint-disable vars-on-top */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
{
  {
    {
      {
        var sera = 'Será???'; // visível fora do bloco
      }
    }
  }
}
// eslint-disable-next-line block-scoped-var
console.log(sera);

function teste() {
  var local = 123;// visível só dentro da função
}
// console.log(local); => ReferenceError: local is not defined

// variável declarada com var só tem 2 escopos:
// global e de função
