// eslint-disable-next-line import/no-extraneous-dependencies
const schedule = require('node-schedule');

// eslint-disable-next-line no-unused-vars
const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 6', () => {
  console.log(`Executando Tarefa 1!, ${new Date().getSeconds()}`);
});

setTimeout(() => {
  tarefa1.cancel();
  console.log('Cancelando Tarefa 1!');
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(6, 0)]; // 0 - Domingo até 6 - Sábado
regra.hour = 21;
regra.second = 30;

// eslint-disable-next-line no-unused-vars
const tarefa2 = schedule.scheduleJob(regra, () => {
  console.log(`Executando Tarefa 2!, ${new Date().getSeconds()}`);
});
