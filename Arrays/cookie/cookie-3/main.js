const form = document.querySelector(".form");
const promoInput = document.querySelector("#promoInput");
const promoText = document.querySelector(".promo-text");

const promocodeArr = [
  {
    promocode: "PROM10",
    gift: "Скидка 10%",
  },
  {
    promocode: "PROM50",
    gift: "Скидка 50%",
  },
  {
    promocode: "GIFT",
    gift: "Подарок в корзине",
  },
];

function getCookie() {
  return document.cookie.split("; ").reduce((acc, item) => {
    const [name, value] = item.split("=");
    acc[name] = value;
    return acc;
  }, {});
}

const promoStyle = (promo1, promo2) => {
  promo1.style.color = "green";
  promo2.style.color = "green";
};

const cookie = getCookie();

const renderPromo = () => {
  promoText.innerHTML = "";

  let promoFount = false;

  for (let i = 0; i < promocodeArr.length; i++) {
    if (promoInput.value.toLowerCase() === promocodeArr[i].promocode.toLowerCase()) {
      promoFount = true;
      promoText.textContent = `Промокод применён. ${promocodeArr[i].gift}`;
      promoStyle(promoText, promoInput);
    }
  }

  if (!promoFount) {
    promoInput.style.color = "unset";
    promoText.textContent = "";
  }
};

const onFormSubmit = (event) => {
  event.preventDefault();
  renderPromo();
};

form.addEventListener("submit", onFormSubmit);
