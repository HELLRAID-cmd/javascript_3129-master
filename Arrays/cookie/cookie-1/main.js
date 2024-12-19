const card = document.querySelector(".card");
const cardHidden = document.querySelector(".card--hidden");
const cardButton = document.querySelector(".card-btn");
const cardIcon = document.querySelector(".card-icon");
const cardTitle = document.querySelector(".card-title");

const giftArr = [
  {
    title: "Скидка 20% на первую покупку в нашем магазине!",
    icon: "img/discount.svg",
  },
  {
    title: "Скидка 10% на всё!",
    icon: "img/discount_2.svg",
  },
  {
    title: "Подарок при первой покупке в нашем магазине!",
    icon: "img/gift.svg",
  },
  {
    title: "Бесплатная доставка для вас!",
    icon: "img/delivery.svg",
  },
  {
    title: "Сегодня день больших скидок!",
    icon: "img/discount_3.svg",
  },
];

setTimeout(() => {
  const randomGift = giftArr[Math.floor(Math.random() * giftArr.length)];
  cardTitle.textContent = randomGift.title;
  cardIcon.src = randomGift.icon;
  card.classList.remove("card--hidden");
}, 1000);

cardButton.onclick = function () {
  card.classList.add("card--hidden");
};
