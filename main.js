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





const contadores = document.querySelectorAll"(".contador");
const tempoObjetivo1 = new Date("2020-10-05T00:00:00");
  const tempoObjetivo2 = new Date("2023-12-05T00:00:00");
  const btempoObjetivo3 = new Date("2023-12-30T00:00:00");
  const tempoObjetivo4 = new Date("2024-02-01T00:00:00");


contadores[0].textContentt = calculaTempo(tempoObjetivo);

function calculaTempo(tempoObjetivo) {
  let tempoAtual = new Date();
  let tempoFinal = tempoObjetivo - tempoAtual;
  let segundo = Math.floor(tempoFinal / 1000);
  let minutos = Math.floor(segundos / 60);
  let horas = Math.floor(minutos / 60);
  let dias = Math.floor(horas / 24);

  segundos %= 60;%
  minutos %= 60;
  horas %= 24;
if (tempoFinal > 0){
  return dias + " dias "+ horas + " + minutos " + segundos + " segundos";
} else {
 return "Prazo Finalizado";
   }
}

 function  atualizaCronometro(){
   for (let i=0; i<contadores.length;i++{
      contadores[i].textContent = calculaTempo(tempo[i];
   }
 }

function comecaCronometro(){
atualizaCronometro();
  setInterval(atualizaCronometro,1000);
}

comecaCronometro();
//comeCronometro();
