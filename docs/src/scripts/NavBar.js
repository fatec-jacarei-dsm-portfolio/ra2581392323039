document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  const menuButton = document.querySelector('.menu-button'); // Acessa o botão diretamente

  // Função para adicionar o comportamento de abrir/fechar o menu
  function toggleMenu() {
    navLinks.classList.toggle('active');
    menuButton.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰'; // Alterna o ícone
  }

  // Função para gerenciar o comportamento do botão com base no tamanho da tela
  function handleResize() {
    if (window.innerWidth <= 768) {
      menuButton.style.display = 'block'; // Exibe o botão em telas pequenas
      // Adiciona o evento de clique para abrir/fechar o menu
      menuButton.addEventListener('click', toggleMenu);
    } else {
      menuButton.style.display = 'none'; // Esconde o botão em telas grandes
      navLinks.classList.remove('active'); // Garante que o menu está fechado
    }
  }

  // Inicializa a lógica do menu ao carregar a página
  handleResize();

  // Recheca ao redimensionar a tela
  window.addEventListener('resize', handleResize);

  // Fecha o menu ao clicar em um link (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 768) {
        navLinks.classList.remove('active');
        menuButton.innerHTML = '☰';
      }
    });
  });
});
