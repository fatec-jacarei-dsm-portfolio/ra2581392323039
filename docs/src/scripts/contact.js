document.addEventListener('DOMContentLoaded', function() {
  // Inicializar clipboard.js
  if (typeof ClipboardJS !== 'undefined') {
    const clipboard = new ClipboardJS('.copy-btn');
    
    clipboard.on('success', function(e) {
      const btn = e.trigger;
      const originalText = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
      
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 2000);
      
      e.clearSelection();
    });
  }

  // Efeitos de hover nos cards
  const contactCards = document.querySelectorAll('.contact-card');
  contactCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
});