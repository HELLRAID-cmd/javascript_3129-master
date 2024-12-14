const product = document.querySelector("#product");
const scales = document.querySelector("#scales");
const distance = document.querySelector("#distance");
const tabletBody = document.querySelector("#tablet-body");
const paragraphError = document.querySelector(".error");
const form = document.querySelector("#form");

const createElement = function (tag, textContent) {
  const element = document.createElement(tag);
  element.textContent = textContent;
  return element;
};

const renderTablet = () => {
  if (scales.value <= 0 || distance.value <= 0) {
    event.preventDefault();
    paragraphError.textContent = `Пожалуйста введите корректное значение для веса и расстояния.`;
    paragraphError.style.color = "red";
    return;
  }

  const tabletRow = createElement("tr");

  //* Название товара
  const tabletDescProduct = createElement("td", product.value);

  //* Вес товара
  const tabletDescScales = createElement("td", scales.value);

  //* Расстояние доставки
  const tabletDescDistance = createElement("td", distance.value);

  //*Стоимость доставки
  const tabletDescDelivery = createElement("td");
  const deliveryCosts = (scales.value * distance.value) / 10;
  tabletDescDelivery.textContent = deliveryCosts;

  tabletRow.append(
    tabletDescProduct,
    tabletDescScales,
    tabletDescDistance,
    tabletDescDelivery
  );
  tabletBody.append(tabletRow);
};

const onFormSubmit = (e) => {
  e.preventDefault();
  renderTablet();
  form.reset();
};

form.addEventListener("submit", onFormSubmit);
