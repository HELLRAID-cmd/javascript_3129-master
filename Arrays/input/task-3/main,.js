const form = document.querySelector('.form');
const cardText = document.querySelector('#cardText');

const card = document.querySelector('.card');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  card.innerHTML = "";

  const title = document.createElement('h2');
  title.textContent = 'Результат:';
  card.append(title);


  //*Карточка
  const cardWrapper = document.createElement('div');
  cardWrapper.classList.add('card__wrapper');
  card.append(cardWrapper);


  //*Текст карты
  const cardContent = document.createElement('p');
  cardContent.textContent = cardText.value;
  cardContent.classList.add('card__wrapper-desc');
  cardWrapper.append(cardContent);

  //*Цвет карты
  const selectedColor = document.querySelector('input[name="color"]:checked');
  if (selectedColor) {
    cardWrapper.style.backgroundColor = selectedColor.id.replace('color-', ''); // Установка цвета фона
  }

  card.append(cardWrapper);

  cardText.value = "";
  document.querySelectorAll('input[name="color"]').forEach((radio) => (radio.checked = false));
})
