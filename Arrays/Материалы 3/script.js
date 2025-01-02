const filmForm = document.getElementById('film-form');

function handlFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const genre = document.getElementById('genre').value;
  const releaseYear = document.getElementById('releaseYear').value;
  const isWatched = document.getElementById('isWatched').checked;

  const film = {
    title,
    genre,
    releaseYear,
    isWatched
  };

  addFilmToLocalStorage(film);
  filmForm.reset();
};

const createElement = function(tag, content) {
  const element = document.createElement(tag);
  element.textContent = content;
  return element;
};

function createContainerButton(buttonChan, buttondel) {
  const containerButton = document.createElement('div');
  containerButton.style.display = 'flex';
  containerButton.style.gap = '10px';
  containerButton.append(buttonChan, buttondel);
  return containerButton;
};

function deleteCreateButton(index) {
  const button = createElement('button', 'Удалить');
  button.classList.add('button-delete');
  button.addEventListener('click', () => deleteFilmLocalStorage(index));
  return button;
};

function createInput(film, key) {
  const inputElement = createElement('input');
  inputElement.type = 'text';
  inputElement.value = film[key];
  inputElement.classList.add('input-element');
  return inputElement;
};

function changeCreateButton(film, films, index, filmCell, genreCell, releaseYearCell) {
  const button = createElement('button', 'Изменить');
  button.classList.add('button-change');

  button.addEventListener('click', () => {
    const inputTitle = createInput(film, 'title');
    const inputGenre = createInput(film, 'genre');
    const releaseYear = createInput(film, 'releaseYear');

    function saveChanges(e) {
      if(e.key === 'Enter' || e.type === 'click') {
        if(inputTitle.value.trim() === "" || inputGenre.value.trim() === "" || inputGenre.value.trim() === "") {
          alert('Введите корректные данные!');
          return;
        };

        films[index].title = inputTitle.value;
        films[index].genre = inputGenre.value;
        films[index].releaseYear = releaseYear.value;

        localStorage.setItem('films', JSON.stringify(films));
        renderTablet();
      };
    };

    inputTitle.addEventListener('keydown', saveChanges);
    inputGenre.addEventListener('keydown', saveChanges);
    releaseYear.addEventListener('keydown', saveChanges);

    filmCell.innerHTML = "";
    genreCell.innerHTML = "";
    releaseYearCell.innerHTML = "";

    filmCell.append(inputTitle);
    genreCell.append(inputGenre);
    releaseYearCell.append(releaseYear);

    button.addEventListener('click', saveChanges);
    inputTitle.focus();
  });
  return button;
};

function addFilmToLocalStorage(film) {
  const films = JSON.parse(localStorage.getItem('films')) || [];
  films.push(film);
  localStorage.setItem('films', JSON.stringify(films));
  renderTablet();
};

function renderTablet() {
  const films = JSON.parse(localStorage.getItem('films')) || [];

  const filmTableBody = document.getElementById('film-tbody');
  filmTableBody.innerHTML = "";

  films.forEach((film, index) => {
    const row = document.createElement('tr');
    
    const filmCell = createElement('td', film.title);
    const genreCell = createElement('td', film.genre);
    const releaseYearCell = createElement('td', film.releaseYear);
    const isWatchedCell = createElement('td', film.isWatched ? "Да" : "Нет");

    const actionCell = document.createElement('td');

    const deleteButton = deleteCreateButton(index);
    const changeButton = changeCreateButton(film, films, index, filmCell, genreCell, releaseYearCell);

    const containerButton = createContainerButton(changeButton, deleteButton);
    actionCell.append(containerButton);

    row.append(filmCell, genreCell, releaseYearCell, isWatchedCell, actionCell);

    filmTableBody.append(row);
  });
};

function deleteFilmLocalStorage(index) {
  const films = JSON.parse(localStorage.getItem('films')) || [];
  films.splice(index, 1);
  localStorage.setItem('films', JSON.stringify(films));
  renderTablet();
};

filmForm.addEventListener('submit', handlFormSubmit);
renderTablet();