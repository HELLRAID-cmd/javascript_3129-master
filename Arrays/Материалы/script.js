const filmForm = document.querySelector('#film-form');

const createElement = function(tag, textContent) {
  const element = document.createElement(tag);
  element.textContent = textContent;
  return element;
};

const createDeleteButton = (index) => {
  const button = document.createElement('button');
  button.textContent = 'Удалить';
  button.classList.add('button', 'button--delete');
  button.addEventListener('click', () => deleteFilm(index))
  return button;
}

const createChangeButton = (film, films, index, filmCell) => {
  const button = document.createElement('button');
  button.textContent = 'Изменить';
  button.classList.add('button');
  button.addEventListener('click', () =>  {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = film.filmInput;

    input.addEventListener('keydown', (e) => {
      if(e.key === 'Enter') {
        input.value = film.title;
        input.value = film.genre;
        input.value = film.releaseYear;
        input.value = film.isWatched;
        localStorage.setItem('films', JSON.stringify(films));
        renderTablet()
      };
    });

    filmCell.innerHTML = "";
    filmCell.append(input);
    input.focus();
  });

  return button;
};

const createButtonContainer = (deleteButton, changeButton) => {
  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.gap = '10px';
  buttonContainer.append(deleteButton, changeButton);
  return buttonContainer;
};

function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const genre = document.querySelector('#genre').value;
  const releaseYear = document.querySelector('#releaseYear').value;
  const isWatched = document.querySelector('#isWatched').checked;

  const film = {
    title,
    genre,
    releaseYear,
    isWatched,
  };

  addFilmToLocalStorage(film)
  filmForm.reset();
};

function addFilmToLocalStorage(film) {
  const films = JSON.parse(localStorage.getItem('films')) || [];
  films.push(film);
  localStorage.setItem('films', JSON.stringify(films));

  renderTablet();
};

function renderTablet() {
  const films = JSON.parse(localStorage.getItem('films')) || [];
  const filmTabletBody = document.querySelector('#film-tbody');
  filmTabletBody.innerHTML = "";

  films.forEach((film, index) => {
    const row = document.createElement('tr');
    
    const titleCell = createElement('td', film.title);
    const genreCell = createElement('td', film.genre);
    const releaseYearCell = createElement('td', film.releaseYear);
    const isWatchedCell = createElement('td', film.isWatched ? "Да" : "Нет");

    row.append(titleCell, genreCell, releaseYearCell, isWatchedCell)

    const actionCell = document.createElement('td');
    const deleteButton = createDeleteButton(index);
    const changeButton = createChangeButton(film, films, index, titleCell);

    const buttonContainer = createButtonContainer(changeButton, deleteButton);
    actionCell.append(buttonContainer);

    row.append(actionCell);

    filmTabletBody.appendChild(row);
  });
};

function deleteFilm(index) {
  const films = JSON.parse(localStorage.getItem('films')) || [];
  films.splice(index, 1);
  localStorage.setItem('films', JSON.stringify(films));
  renderTablet();
};

filmForm.addEventListener('submit', handleFormSubmit);
renderTablet();