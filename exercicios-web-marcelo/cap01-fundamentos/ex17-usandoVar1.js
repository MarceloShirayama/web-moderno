{
  {
    {
      {
        var sera = 'Será???'// visível fora do bloco
      }
    }
  }
}
console.log(sera);

function teste() {
  var local = 123// visível só dentro da função
}
// console.log(local); => ReferenceError: local is not defined

// variável declarada com var só tem 2 escopos:
// global e de função
