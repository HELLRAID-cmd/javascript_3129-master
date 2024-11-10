const listUl = document.createElement("ul");
document.body.append(listUl);

const arr = [100, 300, 250, 700, 500];

function renderList(arr) {
  listUl.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const listLi = document.createElement("li");
    listLi.textContent = arr[i];
    listUl.append(listLi);
  }
}

renderList(arr);

const buttonFilterIncrease = document.createElement("button");
buttonFilterIncrease.textContent = "Сортировать по возрастанию";
document.body.append(buttonFilterIncrease);

const buttonFileterDecrease = document.createElement("button");
buttonFileterDecrease.textContent = "Сортировать по убыванию";
document.body.append(buttonFileterDecrease);

buttonFilterIncrease.addEventListener("click", function (e) {
  arr.sort((a, b) => a - b);
  renderList(arr);
});

buttonFileterDecrease.addEventListener("click", function (e) {
  arr.sort((a, b) => b - a);
  renderList(arr);
});
