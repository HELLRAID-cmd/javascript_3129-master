const cardText = document.querySelector("#cardText");
const card = document.querySelector(".card");
const select = document.querySelector('#select');

cardText.addEventListener('input', function() {
  card.innerText = cardText.value;
});

select.addEventListener('change', function() {
  card.style.backgroundColor = select.value;
});

cardText.addEventListener("focus", function () {
  cardText.style.backgroundColor = "aqua";
});

cardText.addEventListener("blur", function () {
  cardText.style.backgroundColor = "";
});
