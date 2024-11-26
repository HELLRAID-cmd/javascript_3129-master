const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");

const userFloorMale = document.querySelector("#male");
const userFloorFemale = document.querySelector("#female");

const userGrade = document.querySelector("#userGrade");
const userInterest = document.querySelectorAll("input[name=interest]");
const userTextarea = document.querySelector("#textarea");

const form = document.querySelector("#form");

// const buttonSubmit = document.querySelector("button");
const submittingForm = document.querySelector("#submitting-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!userName.value.trim() || !userEmail.value.trim()) {
    e.preventDefault();
    return;
  }
  submittingForm.innerHTML = "";

  //* Заголовок
  const headerText = document.createElement("h2");
  headerText.textContent = "Результаты формы:";
  submittingForm.append(headerText);

  //* Имя пользователя
  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = `Имя пользователя: ${userName.value}`;
  submittingForm.append(nameParagraph);

  //* Email
  const emailParagraph = document.createElement("p");
  emailParagraph.textContent = `Email: ${userEmail.value}`;
  submittingForm.append(emailParagraph);

  //* Пол
  const floorParagraph = document.createElement("p");
  if (userFloorMale.checked) {
    floorParagraph.textContent = `Пол: Мужской`;
    submittingForm.append(floorParagraph);
  } else if (userFloorFemale.checked) {
    floorParagraph.textContent = `Пол: Женский`;
    submittingForm.append(floorParagraph);
  }

  //* Оценка сервиса
  const gradeParagraph = document.createElement("p");
  gradeParagraph.textContent = `Оценка сервиса: ${userGrade.value}`;
  submittingForm.append(gradeParagraph);

  //* Интересы пользователей
  let selectedInterest = [];
  userInterest.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedInterest.push(checkbox.value);
    }
  });

  const interestParagraph = document.createElement("p");
  interestParagraph.textContent = `Интересы пользователей: ${selectedInterest.join(
    ", "
  )}`;
  submittingForm.append(interestParagraph);

  //*Дополнительные комментарии
  const commentsParagraph = document.createElement("p");
  commentsParagraph.textContent = `Дополнительные комментраии: ${userTextarea.value}`;
  submittingForm.append(commentsParagraph);

  userName.value = "";
  userEmail.value = "";
  userFloorMale.checked = false;
  userFloorFemale.checked = false;
  userGrade.value = "";
  userInterest.forEach((checbox) => (checbox.checked = false));
  userTextarea.value = "";
});
