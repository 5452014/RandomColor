const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const HexCode = '0123456789ABCDEF';

const randomColor = function() {
  let color = '#'; // Reset color variable each time
  for (let i = 0; i < 6; i++) {
    color += HexCode[Math.floor(Math.random() * 16)];
  }
  return color;
}

let InterValid;

const startChangingColor = function() {
  function changeColor() {
    document.body.style.backgroundColor = randomColor();
  } 
  if (!InterValid) {
    InterValid = setInterval(changeColor, 1000);
  }
}

const stopChangingColor = function() {
  clearInterval(InterValid)
  InterValid = null;
}

start.addEventListener('click', startChangingColor);
stop.addEventListener('click', stopChangingColor);
