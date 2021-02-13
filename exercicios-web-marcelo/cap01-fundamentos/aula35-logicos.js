console.log(`
operadores binários:

and
true and true => true
? and false => false
false and ? => false

or
true or true => true
true or false => true
false or true => true
false or false => false

xor ( ou exclusivo)
true xor true => false
true xor false => true
false xor true => true
false xor false => false

---------------------------------------------------
operadores unários:

! (negação lógica)
!true => false
!false => true
!!true => true
!!false => false
`);

function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  // const comprarTv32 = !!(trabalho1 ^ trabalho2); // => bitwise xor
  const comprarTv32 = trabalho1 !== trabalho2;
  const manterSaudavel = !comprarSorvete;
  return {
    comprarSorvete,
    comprarTv50,
    comprarTv32,
    manterSaudavel,
  };
}
console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
