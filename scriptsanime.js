// Filtro y búsqueda
document.getElementById('search').addEventListener('input', filterAnimes);
document.getElementById('genre-filter').addEventListener('change', filterAnimes);

function filterAnimes() {
  const searchValue = document.getElementById('search').value.toLowerCase();
  const genreValue = document.getElementById('genre-filter').value;
  const animeCards = document.querySelectorAll('.anime-card');

  animeCards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    const genre = card.getAttribute('data-genre');

    if ((title.includes(searchValue) || searchValue === '') &&
        (genre === genreValue || genreValue === 'all')) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

function irA(explorar) {
    document.getElementById(explorar).scrollIntoView({ behavior: 'smooth' });
}
function irA(noticia) {
  document.getElementById(noticia).scrollIntoView({ behavior: 'smooth' });
}