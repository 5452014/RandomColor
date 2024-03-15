const start = document.querySelector('#start');
const stop = document.querySelector('#stop');

const RandomColor = '123456789ABCDEF';
let color = '#';
let validColor;

const generatedColor = () => {
  for (let i = 0; i < 6; i++) {
    color += RandomColor[Math.floor(Math.random() * 16)];
  }
  return color;
}

const randomColorGenerator = () => {
  function backGroundColor() {
    document.body.style.backgroundColor = generatedColor();
  }

  if (!validColor) {
    validColor = setInterval(backGroundColor, 1000);
  }
}

const stopColorGenerator = () => {
  clearInterval(validColor);
  validColor = null;
}

start.addEventListener('click', randomColorGenerator);
stop.addEventListener('click', stopColorGenerator);