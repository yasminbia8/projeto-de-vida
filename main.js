const botoes = document.querySelectorAll(".botao");
const texttoros = document. querSelectorAll(".aba-conteudo");
for(let i=0;i <botoes.length;i++){
  botoes[i].onclick = function(){
    
 for (let j=0;j<botoes.length;j++){
   botoes[j].classlist.remove("ativo");
texto[j].classList.remove("ativo");
    botoes[i].classlist.add("ativo");
  }
}









contadores[0].textContentt = calculaTempo(tempoObjetivo);

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundo = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);
