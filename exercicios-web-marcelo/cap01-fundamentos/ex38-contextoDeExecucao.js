/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
let a = 3;

this.c = 456;
this.d = false;
this.e = 'teste';

console.log(this.a);
console.log(globalThis.a);
console.log(this.c);
console.log(module.exports === this); // em node cada arquivo é um modulo

console.log(module.exports);
// mais comum usar:
// module.exports = { c: 456, d: false, e: 'teste' };

// criando uma variável sem var e let:
// abc = 3; não faça isso
// console.log(global.abc);
// você está criando uma variável global

// PREFIRA NUNCA CRIAR VARIÁVEIS NO ESCOPO GLOBAL
