const product = document.querySelector("#product");
const scales = document.querySelector("#scales");
const distance = document.querySelector("#distance");
const tabletBody = document.querySelector("#tablet-body");
const paragraphError = document.querySelector(".error");
const form = document.querySelector("#form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (scales.value <= 0 || distance.value <= 0) {
    event.preventDefault();
    paragraphError.textContent = `Пожалуйста введите корректное значение для веса и расстояния.`;
    paragraphError.style.color = "red";
    return;
  }

  const tabletRow = document.createElement("tr");
  tabletBody.append(tabletRow);

  //* Название товара
  const tabletDescProduct = document.createElement("td");
  tabletDescProduct.textContent = product.value;
  tabletRow.append(tabletDescProduct);

  //* Вес товара
  const tabletDescScales = document.createElement("td");
  tabletDescScales.textContent = scales.value;
  tabletRow.append(tabletDescScales);

  //* Расстояние доставки
  const tabletDescDistance = document.createElement("td");
  tabletDescDistance.textContent = distance.value;
  tabletRow.append(tabletDescDistance);

  //*Стоимость доставки
  const tabletDescDelivery = document.createElement("td");
  const deliveryCosts = (scales.value * distance.value) / 10;
  tabletDescDelivery.textContent = deliveryCosts;
  tabletRow.append(tabletDescDelivery);

  product.value = "";
  scales.value = "";
  distance.value = "";
  deliveryCosts.value = "";
});
