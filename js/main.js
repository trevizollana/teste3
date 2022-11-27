let isIgnite = false
function changeCard(event) {
  const card = event.currentTarget
  const bg = isIgnite ? "explorer" : "ignite"
  isIgnite = !isIgnite
  card.style.backgroundImage = `url(/assets/bg-${bg}.svg)`
}

//contraste preto
function contrasteBranco(){
  var root = document.querySelector(":root");
  root.style.setProperty('--amarelo-fundo','white');
  root.style.setProperty('--branco-fonte','black');
  root.style.setProperty('--preto-fonte','black');
  root.style.setProperty('--azul-nav','white');
}

function contrastePreto(){
  var root = document.querySelector(":root");
  root.style.setProperty('--amarelo-fundo','black');
  root.style.setProperty('--branco-fonte','white');
  root.style.setProperty('--preto-fonte','white');
  root.style.setProperty('--azul-nav','whithe');
}
function contrasteNormal(){
  var root = document.querySelector(":root");
  root.style.setProperty('--amarelo-fundo','#f7dd43');
  root.style.setProperty('--branco-fonte','white');
  root.style.setProperty('--preto-fonte','black');
  root.style.setProperty('--azul-nav','#042940');
}