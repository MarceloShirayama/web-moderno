/* eslint-disable no-plusplus */
function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

// eslint-disable-next-line new-parens, no-new
new Pessoa;
