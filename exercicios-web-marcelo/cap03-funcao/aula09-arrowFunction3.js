// eslint-disable-next-line func-names
let comparaComThis = function (param) {
  console.log(this === param);
};

comparaComThis(global);
comparaComThis(globalThis);
comparaComThis(this);

console.log('=====================================');
const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(globalThis);
comparaComThis(this);
comparaComThis(obj);

console.log('=====================================');
// eslint-disable-next-line arrow-parens
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(globalThis);
comparaComThisArrow(module.exports);
comparaComThisArrow(this);

console.log('=====================================');
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);
// this em arrow function não tem variação mesmo com bind.
