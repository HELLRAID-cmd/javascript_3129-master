const userName = document.querySelector("#userName");
const userEmail = document.querySelector('#userEmail')
const form = document.querySelector("#form");

const buttonSubmit = document.querySelector("button");
const submittingForm = document.querySelector("#submitting-form");

buttonSubmit.addEventListener("click", function (e) {
  if(!userName.value.trim() || !userEmail.value.trim()) {
    e.preventDefault();
    return;
  }
  submittingForm.innerHTML = ''
  
  // Заголовок
  const headerText = document.createElement("h2");
  headerText.textContent = "Результаты формы:";
  submittingForm.append(headerText);

  // Имя пользователя
  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = userName.value;
  submittingForm.append(nameParagraph);

  // Email
  const emailParagraph = document.createElement('p');
  emailParagraph.textContent = userEmail.value;
  submittingForm.append(emailParagraph);

  //grade

  userName.value = "";
  userEmail.value = "";
});
