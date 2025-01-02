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

function changeCreateButton(film, films, index, filmCell) {
  const button = createElement('button', 'Изменить');
  button.classList.add('button-change');

  button.addEventListener('click', () => {
    const inputTitle = createElement('input');
    inputTitle.type = 'text';
    inputTitle.value = film.title;

    const inputGenre = createElement('input');
    inputGenre.type = 'text';
    inputGenre.value = film.genre;

    inputTitle.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') {
        films[index].title = inputTitle.value;
        films[index].genre = inputGenre.value;
        localStorage.setItem('films', JSON.stringify(films));
        renderTablet();
      };
    });
    filmCell.innerHTML = "";
    filmCell.append(inputTitle, inputGenre);
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
    const changeButton = changeCreateButton(film, films, index, filmCell);

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