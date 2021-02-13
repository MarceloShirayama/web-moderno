/* eslint-disable no-use-before-define */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
console.log('a = ', a);

var a = 2;

console.log('a = ', a);

function teste() {
  console.log('b = ', b);
  var b = 2;
  console.log('b = ', b);
}

teste();

// hoisting só acontece com variáveis declaradas com var
