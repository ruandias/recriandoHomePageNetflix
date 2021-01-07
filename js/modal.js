function iniciaModal(modalId) {
  let modal = document.getElementById(modalId)
  modal.classList.add('mostrar');
  modal.addEventListener('click', function(evento) {
    let botaoFechar = evento.target.id;
    if(evento.target.id == modalId || evento.target.id == botaoFechar) {
    modal.classList.remove('mostrar');
  }
  });
}

const maisInformacoes = document.getElementById('abrirModalInfo');
maisInformacoes.addEventListener('click', function() {
  iniciaModal('modal-informacoes');
});


const assistir = document.getElementById('abrirModalAssistir');
assistir.addEventListener('click', function() {
  iniciaModal('modal-assistir');
});
