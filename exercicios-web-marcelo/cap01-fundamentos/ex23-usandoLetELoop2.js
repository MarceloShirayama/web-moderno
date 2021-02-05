/* eslint-disable no-plusplus */
const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(() => console.log(i));
}

funcs[2]();
funcs[8]();
// executando com let é guardado o valor de i quando foi executada funcs
