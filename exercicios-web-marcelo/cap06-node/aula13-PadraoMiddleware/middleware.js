// middleware pattern (chain of reponsability)
const passo1 = (ctx, next) => {
  ctx.valor1 = 'md1';
  next();
};

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2';
  next();
};

const passo3 = (ctx) => {
  ctx.valor3 = 'mid3';
};

const exec = (ctx, ...middlewares) => {
  const execPasso = (indice) => {
    // eslint-disable-next-line no-unused-expressions
    middlewares && indice < middlewares.length
      && middlewares[indice](ctx, () => execPasso(indice + 1));
  };
  execPasso(0);
};

let ctx = {};

exec(ctx, passo1, passo2, passo3);
console.log(ctx);

ctx = {};
exec(ctx, passo1, passo3);
console.log(ctx);

ctx = {};
exec(ctx, passo2, passo3);
console.log(ctx);

ctx = {};
exec(ctx, passo3);
console.log(ctx);

exec(ctx, passo3, passo2, passo1);
console.log(ctx);
