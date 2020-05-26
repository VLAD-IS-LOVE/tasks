// Построить флаг РФ из символа “О” размером 60х80 символов

document.body.style.background = 'black';

let w = 80;
let h = 60;

createRussianFlag = (width, height) => {
  let div = document.createElement('div');
  div.className = "flag-wrapper";
  document.body.appendChild(div);
  let totalSymbols = width * height;
  let symbolsPerColor = totalSymbols / 3;

  for (let color of ['white', 'blue', 'red']) {
    let divPerColor = document.createElement('div');
    let flag = document.querySelector('.flag-wrapper');
    flag.appendChild(divPerColor);

    for (let i = 0; i < symbolsPerColor; i++) {
      let span = document.createElement('span');
      let br = document.createElement('br');
      if (i % width == 0 && i > 0) {
        divPerColor.appendChild(br);
      }
      span.textContent = 'O';
      span.style.color = color;
      divPerColor.appendChild(span);
    }
  }
}

createRussianFlag(w, h);
