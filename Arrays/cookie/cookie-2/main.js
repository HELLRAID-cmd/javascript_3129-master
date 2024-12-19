const form = document.querySelector(".form");
const promoInput = document.querySelector("#promoInput");
const promoText = document.querySelector(".promo-text");

const promocodeObj = {
  promocode: "PROM50",
  gift: "Скидка 50%",
};

function getCookie() {
  return document.cookie.split("; ").reduce((acc, item) => {
    const [name, value] = item.split("=");
    acc[name] = value;
    return acc;
  }, {});
};

const savedCookie = getCookie().promo;

function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
};

const promoStyle = (promo1, promo2) => {
  promo1.style.color = "green";
  promo2.style.color = "green";
};

const renderPromo = () => {
  promoText.innerHTML = "";

  if (promoInput.value.toLowerCase() === promocodeObj.promocode.toLowerCase()) {
    promoText.textContent = `Промокод применён. ${promocodeObj.gift}`;
    promoStyle(promoText, promoInput);
    setCookie("promo", promoInput.value.toLowerCase());
  } else {
    promoInput.style.color = "unset";
    promoText.textContent = "";
  };
};

const loadPromoFromCookie = () => {
  if (savedCookie && savedCookie.toLowerCase() === promocodeObj.promocode.toLowerCase()) {
    promoInput.value = savedCookie;
    promoText.textContent = `Промокод применён. ${promocodeObj.gift}`;
    promoStyle(promoText, promoInput);
  };
};

const onFormSubmit = (event) => {
  event.preventDefault();
  renderPromo();
};

form.addEventListener("submit", onFormSubmit);
loadPromoFromCookie();
