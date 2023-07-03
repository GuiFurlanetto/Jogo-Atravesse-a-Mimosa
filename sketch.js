

function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

//função que desenha os objetos na tela
function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}



