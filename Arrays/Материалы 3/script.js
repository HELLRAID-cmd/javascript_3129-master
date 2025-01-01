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

  films.forEach((film) => {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${film.title}</td>
    <td>${film.genre}</td>
    <td>${film.releaseYear}</td>
    <td>${film.isWatched ? "Да" : "Нет"}</td>
    `;
    filmTableBody.append(row);
  });
};

filmForm.addEventListener('submit', handlFormSubmit);
renderTablet();