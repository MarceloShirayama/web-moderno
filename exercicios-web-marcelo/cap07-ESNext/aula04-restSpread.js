console.log('Spread');
console.log();

console.log('Clone Object');
console.log();

const funcionario = { nome: 'Maria', salario: '5000.00' };
const cloneFuncionario = { ...funcionario, ativo: true };
cloneFuncionario.salario = 3000.00;
cloneFuncionario.nome = 'Pedro';
console.log(funcionario);
console.log(cloneFuncionario);

console.log('-----------------------');

console.log('Merge Objects');
console.log();

const obj1 = { foo: 'bar', x: 30 };
const obj2 = { foo: 'bar2', y: 20 };
const mergeObj1Obj2 = { ...obj1, ...obj2 };
console.log(obj1);
console.log(obj2);
console.log(mergeObj1Obj2);

console.log('====================================');
console.log('Spread com array');
console.log();

console.log('Concat');
console.log();

const grupoA = ['João', 'Pedro', 'Gloria'];
const grupoB = ['Maria', 'Rafaela'];
const grupoConcatAB = [...grupoA, ...grupoB];
console.log(grupoA);
console.log(grupoB);
console.log(grupoConcatAB);
