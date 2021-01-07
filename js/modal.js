function iniciaModal(modalId) {
  let botaoFechar = "";
  if (modalId == "modal-informacoes") {
    botaoFechar = "fecharModalInfo";
  }
  if (modalId == "modal-assistir") {
    botaoFechar = "fecharModalAssistir";
  }
  console.log(botaoFechar);

  let modal = document.getElementById(modalId);
  modal.classList.add('mostrar');

  modal.addEventListener('click', function (evento) {
    console.log(evento);
    if (evento.target.id == modalId || evento.target.id == botaoFechar) {

      if (modalId == "modal-assistir") {
        pararVideo(modal);

      }

      modal.classList.remove('mostrar');
    }
  });
}

function pararVideo(modal) {
  let iframeAtual = modal.querySelector('.modal-conteudo > iframe');
  iframeAtual.src = iframeAtual.src;
}

const maisInformacoes = document.getElementById('abrirModalInfo');
maisInformacoes.addEventListener('click', function () {
  iniciaModal('modal-informacoes');
});


const assistir = document.getElementById('abrirModalAssistir');
assistir.addEventListener('click', function () {
  iniciaModal('modal-assistir');
});
