const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userFloorMale = document.querySelector("#male");
const userFloorFemale = document.querySelector("#female");
const userGrade = document.querySelector("#userGrade");
const userInterest = document.querySelectorAll("input[name=interest]");
const userTextarea = document.querySelector("#textarea");
const form = document.querySelector("#form");
const submittingForm = document.querySelector("#submitting-form");


const createElement = function(tag, textContent) {
  const element = document.createElement(tag);
  element.textContent = textContent;
  return element
}

const renderResult = () => {
  submittingForm.innerHTML = "";

   //* Заголовок
   const headerText = createElement("h2", "Результаты формы:");
 
   //* Имя пользователя
   const nameParagraph = createElement("p", `Имя пользователя: ${userName.value}`);
 
   //* Email
   const emailParagraph = createElement("p", `Email: ${userEmail.value}`);
 
   //* Пол
   const floorParagraph = createElement("p");
   if (userFloorMale.checked) {
     floorParagraph.textContent = `Пол: Мужской`;
   } else if (userFloorFemale.checked) {
     floorParagraph.textContent = `Пол: Женский`;
   }
 
   //* Оценка сервиса
   const gradeParagraph = createElement("p", `Оценка сервиса: ${userGrade.value}`);
 
   //* Интересы пользователей
   let selectedInterest = [];
   userInterest.forEach((checkbox) => {
     if (checkbox.checked) {
       selectedInterest.push(checkbox.value);
     }
   });
 
   const interestParagraph = createElement("p", `Интересы пользователей: ${selectedInterest.join(", ")}`);
 
   //*Дополнительные комментарии
   const commentsParagraph = createElement("p", `Дополнительные комментраии: ${userTextarea.value || "Нет комментариев"}`);

   submittingForm.append(headerText, nameParagraph, emailParagraph, floorParagraph, gradeParagraph, interestParagraph, commentsParagraph);
}

const unFormSubmit = (e) => {
  e.preventDefault();
  renderResult();
  form.reset();
}

form.addEventListener("submit", unFormSubmit);
