// Nome a ser exibido com efeito de digitação
const name = "Guilherme Carvalho";

// Seleciona elementos da página
const splash = document.getElementById("splash");
const navbar = document.getElementById("navbar");
const sections = document.querySelectorAll(".hidden");

// Bloqueia rolagem durante o splash
document.body.classList.add('no-scroll');
document.documentElement.classList.add('no-scroll');

// Limpa o conteúdo do splash
splash.innerHTML = '';

// Cria o contêiner principal para os nomes
const nameContainer = document.createElement("div");
nameContainer.className = "name-container";

// Cria contêineres individuais para o primeiro nome e sobrenome
const firstNameContainer = document.createElement("div");
const lastNameContainer = document.createElement("div");
firstNameContainer.className = "name-part";
lastNameContainer.className = "name-part";

// Adiciona os contêineres ao contêiner principal
nameContainer.appendChild(firstNameContainer);
nameContainer.appendChild(lastNameContainer);

// Adiciona o contêiner principal ao splash
splash.appendChild(nameContainer);

// Divide o nome em partes (primeiro nome e sobrenome)
const nameParts = name.split(" ");

// Função para animar cada parte do nome com efeito de digitação
function animateNamePart(part, container, startDelay) {
  part.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.classList.add("letter");
    span.style.animationDelay = `${startDelay + (index * 0.15)}s`;
    container.appendChild(span);
  });
}

// Anima o primeiro nome
animateNamePart(nameParts[0], firstNameContainer, 0);

// Anima o sobrenome com uma pausa após o primeiro nome
setTimeout(() => {
  animateNamePart(nameParts[1], lastNameContainer, 0);
}, nameParts[0].length * 150 + 300); // Tempo baseado no primeiro nome + pausa

// Calcula o tempo total da animação
const totalAnimationTime = (nameParts[0].length + nameParts[1].length) * 150 + 1000;

// Após a animação, mostra o conteúdo principal
setTimeout(() => {
  splash.classList.add("hidden");
  navbar.classList.add("show");

  // Exibe todas as seções escondidas
  sections.forEach((section) => {
    section.classList.remove("hidden");
  });

  // Remove o splash do DOM e libera a rolagem
  setTimeout(() => {
    splash.style.display = "none";
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
  }, 1000);
}, totalAnimationTime);
