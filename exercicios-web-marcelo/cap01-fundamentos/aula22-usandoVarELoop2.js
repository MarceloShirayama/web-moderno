/* eslint-disable no-loop-func */
/* eslint-disable no-plusplus */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
const funcs = [];

for (var i = 0; i < 10; i++) {
  funcs.push(() => console.log(i));
}

funcs[2]();
funcs[8]();
