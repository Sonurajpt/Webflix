// Responsive Navbar Toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Search & Filter Movies
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('categoryFilter');
const movieCards = document.querySelectorAll('.movie-card');

function filterMovies() {
  const searchText = searchInput.value.toLowerCase();
  const filterValue = filterSelect.value;
  
  movieCards.forEach(card => {
    const title = card.textContent.toLowerCase();
    const matchesSearch = title.includes(searchText);
    const matchesFilter = !filterValue || card.classList.contains(filterValue);
    
    if (matchesSearch && matchesFilter) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

searchInput.addEventListener('input', filterMovies);
filterSelect.addEventListener('change', filterMovies);

let selectedVideoUrl = "";

function openModal(movie) {
  selectedVideoUrl = movie.video;
  document.getElementById("modal-poster").src = movie.thumbnail;
  document.getElementById("modal-title").innerText = movie.title;
  document.getElementById("modal-info").innerText = `${movie.year || "2025"} • ${movie.duration || "2h"} • HD`;
  document.getElementById("modal-description").innerText = movie.description || "No description available.";
  
  document.getElementById("movie-modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("movie-modal").style.display = "none";
}
