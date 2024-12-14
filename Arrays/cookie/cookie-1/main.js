const card = document.querySelector('.card');
const cardHidden = document.querySelector('.card--hidden');
const cardButton = document.querySelector('.card-btn');

setTimeout(() => {
  card.classList.remove('card--hidden');
}, 3000);

cardButton.onclick = function() { // мог сделать через addEventListener, но решил вспомнить onclick
  card.classList.add('card--hidden');
};