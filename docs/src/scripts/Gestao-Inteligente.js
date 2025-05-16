document.addEventListener('DOMContentLoaded', function() {
  const galeria = document.querySelector('.galeria');
  const setaEsquerda = document.querySelector('.seta-esquerda');
  const setaDireita = document.querySelector('.seta-direita');
  const thumbs = document.querySelectorAll('.thumb');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const caption = document.getElementById('caption');
  const closeBtn = document.querySelector('.close-btn');
  
  // Navegação do carrossel
  setaDireita.addEventListener('click', function() {
    galeria.scrollBy({ left: 300, behavior: 'smooth' });
  });
  
  setaEsquerda.addEventListener('click', function() {
    galeria.scrollBy({ left: -300, behavior: 'smooth' });
  });
  
  // Lightbox
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
      lightbox.style.display = 'block';
      lightboxImg.src = this.src;
      caption.textContent = this.alt;
    });
  });
  
  closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
  });
  
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.style.display === 'block') {
      lightbox.style.display = 'none';
    }
  });
});