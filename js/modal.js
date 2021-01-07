function iniciaModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.classList.add('mostrar');
}

const maisInformacoes = document.getElementById('abriModal');
maisInformacoes.addEventListener('click', function() {
  iniciaModal('modal-informacoes');
});
