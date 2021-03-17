/* eslint-disable max-classes-per-file */
function novoElemento(tagName, className) {
  const elem = document.createElement(tagName);
  elem.className = className;
  return elem;
}

class Barreira {
  constructor(reversa = false) {
    this.elemento = novoElemento('div', 'barreira');

    const borda = novoElemento('div', 'borda');
    const corpo = novoElemento('div', 'corpo');
    this.elemento.appendChild(reversa ? corpo : borda);
    this.elemento.appendChild(reversa ? borda : corpo);

    // eslint-disable-next-line no-return-assign
    this.setAltura = (altura) => corpo.style.height = `${altura}px`;
  }
}

// const b = new Barreira(true);
// b.setAltura(300);
// document.querySelector('[wm-flappy').appendChild(b.elemento);

class ParDeBarreiras {
  constructor(altura, abertura, x) {
    this.elemento = novoElemento('div', 'par-de-barreiras');

    this.superior = new Barreira(true);
    this.inferior = new Barreira(false);

    this.elemento.appendChild(this.superior.elemento);
    this.elemento.appendChild(this.inferior.elemento);

    this.sortearAbertura = () => {
      const alturaSuperior = Math.random() * (altura - abertura);
      const alturaInferior = altura - abertura - alturaSuperior;
      this.superior.setAltura(alturaSuperior);
      this.inferior.setAltura(alturaInferior);
    };

    this.getX = () => parseInt(this.elemento.style.left.split('px')[0], 10);
    // eslint-disable-next-line no-return-assign,  no-shadow
    this.setX = (x) => this.elemento.style.left = `${x}px`;
    this.getLargura = () => this.elemento.clientWidth;

    this.sortearAbertura();
    this.setX(x);
  }
}

const b = new ParDeBarreiras(700, 200, 500);
document.querySelector('[wm-flappy]').appendChild(b.elemento);
