/* eslint-disable no-redeclare */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
var numero = 1;
// eslint-disable-next-line no-lone-blocks
{
  // eslint-disable-next-line vars-on-top
  var numero = 2;
  console.log(`dentro ${numero}`);
}
console.log(`fora ${numero}`);
