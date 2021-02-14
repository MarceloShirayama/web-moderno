// eslint-disable-next-line no-extend-native, func-names
Array.prototype.forEach2 = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);
  }
};

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

// eslint-disable-next-line prefer-arrow-callback, func-names
aprovados.forEach2(function (nome, indice, array) {
  console.log(`${array} -> ${indice + 1} ${nome}`);
});
