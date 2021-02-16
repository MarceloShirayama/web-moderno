const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

// Instância única: importou o valor já calculado
console.log(`contadorA: ${contadorA.valor}, contadorB: ${contadorB.valor}`);
contadorA.inc();
console.log(`contadorA: ${contadorA.valor}, contadorB: ${contadorB.valor}`);
contadorA.inc();
console.log(`contadorA: ${contadorA.valor}, contadorB: ${contadorB.valor}`);
contadorA.inc();
console.log(`contadorA: ${contadorA.valor}, contadorB: ${contadorB.valor}`);
console.log(`contadorA === contadorB: ${contadorA === contadorB}`);

console.log('============================');

// Instância nova: importa uma função factory que vai retornar um novo objeto
console.log(`contadorC: ${contadorC.valor}, contadorD: ${contadorD.valor}`);
contadorC.inc();
console.log(`contadorC: ${contadorC.valor}, contadorD: ${contadorD.valor}`);
contadorC.inc();
console.log(`contadorC: ${contadorC.valor}, contadorD: ${contadorD.valor}`);
contadorC.inc();
console.log(`contadorC: ${contadorC.valor}, contadorD: ${contadorD.valor}`);
console.log(`contadorC === contadorD: ${contadorC === contadorD}`);
