document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const bodyElement = document.body;

  const featuredTitle = document.getElementById('featured-title');
  const featuredSubtitle = document.getElementById('featured-subtitle');
  const featuredRating = document.getElementById('featured-rating');
  const featuredGenres = document.getElementById('featured-genres');
  const featuredDescription = document.getElementById('featured-description');

  // Guardar estado original para resetar
  const originalBackground = window.getComputedStyle(bodyElement).backgroundImage;
  const originalTitle = featuredTitle.textContent;
  const originalSubtitle = featuredSubtitle.textContent;
  const originalRating = featuredRating.innerHTML;
  const originalGenres = featuredGenres.textContent;
  const originalDescription = featuredDescription.textContent;

  function changeBackground(newBackgroundURL) {
    if (newBackgroundURL && newBackgroundURL !== 'none') {
      bodyElement.style.backgroundImage = `linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.2) 80%), ${newBackgroundURL}`;
    }
  }

  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      const bg = card.getAttribute('data-background-img');
      const title = card.getAttribute('data-title');
      const subtitle = card.getAttribute('data-subtitle');
      const rating = card.getAttribute('data-rating');
      const genres = card.getAttribute('data-genres');
      const description = card.getAttribute('data-description');

      changeBackground(bg);

      if(title) featuredTitle.textContent = title;
      if(subtitle) featuredSubtitle.textContent = subtitle;
      if(rating) featuredRating.innerHTML = rating;
      if(genres) featuredGenres.textContent = genres;
      if(description) featuredDescription.textContent = description;
    });

    card.addEventListener('mouseleave', () => {
      // Resetar para estado original
      bodyElement.style.backgroundImage = originalBackground;
      featuredTitle.textContent = originalTitle;
      featuredSubtitle.textContent = originalSubtitle;
      featuredRating.innerHTML = originalRating;
      featuredGenres.textContent = originalGenres;
      featuredDescription.textContent = originalDescription;
    });
  });
});
