function iniciaModal(modalId) {
  const modal = document.getElementById(modalId)
  modal.classList.add('mostrar');
  modal.addEventListener('click', function(evento) {
    console.log(modalId);
    console.log(evento.target.id);
    if(evento.target.id == modalId || evento.target.id == 'fecharModal') {
      modal.classList.remove('mostrar');
    }
  });
}

const maisInformacoes = document.getElementById('abrirModal');
maisInformacoes.addEventListener('click', function() {
  iniciaModal('modal-informacoes');
});
