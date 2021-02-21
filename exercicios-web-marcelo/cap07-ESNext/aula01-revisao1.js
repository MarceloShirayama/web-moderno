/* eslint-disable vars-on-top */

console.log('Variáveis escopo:');
console.log();

{
  // eslint-disable-next-line no-var
  var a = 2;
  // eslint-disable-next-line prefer-const
  let b = 3;
  console.log(`a dentro do bloco: ${a}`);
  console.log(`b dentro do bloco: ${b}`);
}

// eslint-disable-next-line block-scoped-var
console.log(`a fora do bloco: ${a}`);

if (typeof b !== 'undefined') {
  // eslint-disable-next-line no-undef
  console.log(`b fora do bloco: ${b}`);
} else {
  console.log('variável b não declarada');
}

console.log('========================');

console.log('Template String');
console.log();

const produto = 'bala';
console.log(`${produto} é gostoso.`);

console.log();
console.log(`${produto}
é
muito
gostoso
!!!`);

console.log();
console.log(`${produto}\né\ngostoso.`);

console.log('========================');

console.log('Destructuring');
console.log();

console.log('String:');
console.log();

const [l, e, ...restante] = 'Cod3r';
console.log(l);
console.log(e);
console.log(restante);
console.log();

console.log('Array:');
console.log();

let [x, y] = [1, 2, 3];
console.log(x, y);
console.log();

[x, , y] = [1, 2, 3];
console.log(x, y);
console.log();

[x, , ...y] = [1, 2, 3];
console.log(x, y);
console.log();

console.log('Object');
console.log();

const { idade, nome } = { nome: 'Ana', idade: 9 };
console.log(nome);
console.log(idade);
console.log();

const { idade: i, nome: n } = { nome: 'Ana', idade: 9 };
console.log(n);
console.log(i);
console.log();
