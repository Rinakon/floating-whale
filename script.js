const whale = document.querySelector('.whale');
let posX = -250; // Начальная позиция слева
const speed = 1.5;

function animateWhale() {
  posX += speed;
  whale.style.left = posX + 'px';

  // Если кит ушёл за правый край — вернуть его слева
  if (posX > window.innerWidth + 250) {
    posX = -250;
  }

  requestAnimationFrame(animateWhale);
}

// Запуск анимации
requestAnimationFrame(animateWhale);

// На случай изменения размера окна
window.addEventListener('resize', () => {
  if (posX > window.innerWidth + 250) {
    posX = -250;
  }
});
