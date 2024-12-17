const form = document.querySelector('.form');
const promoInput = document.querySelector('#promoInput');
const promoText = document.querySelector('.promo-text')

const promocodeObj = {
  promocode: "PROM50",
  gift: "Скидка 50%"
};

function getCookie() {
  return document.cookie.split('; ').reduce((acc, item) => {
    const [name, value] = item.split('=')
    acc[name] = value
    return acc
  }, {})
}

const cookie = getCookie()

const renderPromo = () => {
  promoText.innerHTML = "";

  if(promoInput.value === promocodeObj.promocode.toLowerCase()) {
    promoText.textContent = `Промокод применён. ${promocodeObj.gift}`;
    promoText.style.color = "green";
    promoInput.style.color = "green";
  } else {
    form.reset();
    promoText.textContent = '';
  };
};

const onFormSubmit = (event) => {
  event.preventDefault();
  renderPromo();
};

form.addEventListener('submit', onFormSubmit);
