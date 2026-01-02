// === CARROSSEL ===
const carrossel = document.getElementById('carrossel');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

if (carrossel && next && prev) {
  let scrollPosition = 0;
  const cardWidth = 220; // largura + margem
  const totalCards = document.querySelectorAll('.card').length;
  const visibleCards = 5;
  const maxScroll = -(cardWidth * (totalCards - visibleCards));

  next.addEventListener('click', () => {
    scrollPosition -= cardWidth * 2;
    if (scrollPosition < maxScroll) scrollPosition = 0;
    carrossel.style.transform = `translateX(${scrollPosition}px)`;
  });

  prev.addEventListener('click', () => {
    scrollPosition += cardWidth * 2;
    if (scrollPosition > 0) scrollPosition = maxScroll;
    carrossel.style.transform = `translateX(${scrollPosition}px)`;
  });
}

// === ALTERNAR ABAS ===
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// === MOSTRAR / ESCONDER TABELA DE TEAMS ===
document.addEventListener("DOMContentLoaded", () => {
  const toggleTeams = document.getElementById("toggleTable");
  const teamsTable = document.getElementById("teamsTable");
  if (!toggleTeams || !teamsTable) return;

  let showingTeams = true;
  toggleTeams.textContent = "Não Exibir ▲";
  teamsTable.style.display = "table";

  toggleTeams.addEventListener("click", () => {
    showingTeams = !showingTeams;
    teamsTable.style.display = showingTeams ? "table" : "none";
    toggleTeams.textContent = showingTeams ? "Não Exibir  ▲" : "Veja Classificação completa ▼";
  });
});

// === MOSTRAR / ESCONDER PILOTOS EXTRAS (DRIVERS) ===
document.addEventListener("DOMContentLoaded", () => {
  const toggleDrivers = document.getElementById("toggleDrivers");
  const driversTable = document.getElementById("driversTable");
  if (!toggleDrivers || !driversTable) return;

  const extraRows = document.querySelectorAll("#driversTable .extra");
  let expanded = false;

  // Esconde as linhas extras ao carregar
  extraRows.forEach(row => row.style.display = "none");
  toggleDrivers.textContent = "Não Exibir ▼";

  toggleDrivers.addEventListener("click", () => {
    expanded = !expanded;
    extraRows.forEach(row => {
      row.style.display = expanded ? "table-row" : "none";
    });
    toggleDrivers.textContent = expanded ? "Não Exibir ▲" : "Veja Classificação completa ▼";
  });
});






