/* eslint-disable no-plusplus */
/* eslint-disable new-parens */
/* eslint-disable no-new */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
function Pessoa() {
  this.idade = 0;
  const self = this;
  setInterval(function () {
    self.idade++;
    console.log(self.idade);
  }/* .bind(this) */, 1000);
}

new Pessoa;
