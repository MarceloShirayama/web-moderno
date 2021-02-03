const [a] = [10];
console.log(a);

const [m1, m2, m3, m4] = [10, 20, 30, 40];
console.log(m1, m2, m3, m4);

const b = [110, 7, 9, 8];
const [n1, , n3,, n5, n6 = 0 ] = b;
console.log(n1, n3, n5, n6);

const [, [, nota]] = [[2 , 8, 8], [9, 6, 8]];
console.log(nota);
