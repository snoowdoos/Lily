// --- EFEITO DE REVELAR AO ROLAR ---
const items = document.querySelectorAll(".item-lista");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      // Opcional: para de observar após aparecer para ganhar performance
      observer.unobserve(entry.target);
    }
  });
}, { 
  threshold: 0.1, // Ativa quando 10% do item aparece
  rootMargin: "0px 0px -50px 0px" // Ativa um pouco antes de entrar totalmente
});

items.forEach(item => observer.observe(item));

// --- FUNÇÕES DE MÚSICA ---

function mostrarIvy() {
  if (window.navigator.vibrate) window.navigator.vibrate(50);
  const ivy = document.getElementById("ivy-player");
  const best = document.getElementById("best-player");
  const btnBest = document.getElementById("btn-best");
  const disco = document.getElementById("disco");

  ivy.classList.remove("hidden");
  best.classList.add("hidden");
  btnBest.classList.remove("hidden");
  
  disco.classList.add("tocando");
  disco.classList.remove("best-mode");

  document.body.classList.add("modo-musica");
  document.body.classList.remove("modo-best");
}

function mostrarBest() {
  if (window.navigator.vibrate) window.navigator.vibrate(50);
  const ivy = document.getElementById("ivy-player");
  const best = document.getElementById("best-player");
  const btnBest = document.getElementById("btn-best");
  const disco = document.getElementById("disco");

  best.classList.remove("hidden");
  ivy.classList.add("hidden");
  btnBest.classList.add("hidden");

  disco.classList.add("tocando");
  disco.classList.add("best-mode");

  document.body.classList.add("modo-best");
  document.body.classList.remove("modo-musica");

  // Rola suavemente até o novo player
  setTimeout(() => {
    best.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}

// --- PERGAMINHO E MODAL ---

function abrirjanela() {
  const modal = document.getElementById('janelapapel');
  const overlay = document.getElementById('overlay');
  
  modal.style.display = 'block';
  overlay.style.display = 'block';
  
  document.body.style.overflow = 'hidden'; 
  if (window.navigator.vibrate) window.navigator.vibrate(30);
}

function fecharjanela() {
  const modal = document.getElementById('janelapapel');
  const overlay = document.getElementById('overlay');
  
  modal.style.display = 'none';
  overlay.style.display = 'none';
  
  document.body.style.overflow = 'auto';
}