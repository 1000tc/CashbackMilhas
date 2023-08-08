
const valor = document.getElementById("valor");
const loja = document.getElementById("loja");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const simPontos= document.querySelector("#simPontos");
const naoPontos= document.querySelector("#naoPontos");
const simCashback= document.querySelector("#simCashback");
const naoCashback= document.querySelector("#naoCashback")
const cupomText=document.getElementById("cupomText");
const pontosText=document.getElementById("pontosText");
const cashbackText=document.getElementById("cashbackText");
const calcular= document.getElementById("calcular");
const PorcOrValue=document.getElementById("PorcOrValue");
const chooseValue=document.getElementById("chooseValue")
let custoProduto=document.getElementById("custoProduto");
let digitaCupom = document.getElementById("digitaCupom");
let digitaPontos = document.getElementById("digitaPontos");
let digitaCashback=document.getElementById("digitaCashback")
let valorPago=0;
let cupomDigitado=0;
let pontosDigitado=0;
let cashbackDigitado=0;
let valorGasto = 0;


function valorProduto(){

   valorPago = parseFloat(valor.value.replace(/\D/g, '',));
  valor.value="R$"+(valorPago / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });


  if (isNaN(valorPago) || valor.value.trim() == '') {
    valor.value = '';
    valorPago=0;}


  if (!isNaN(valorPago)) {

      valor.innerHTML="<span>R$"+(valorPago).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })+"</span>";}


    valorPago=valorPago/100;
  
  }
function escolhaValor(){
  cupomValue();
  if (chooseValue.value!=""){
    cupomText.style.display="inline";
    cupomText.style.textAlign="center";
    cupomText.disabled=false;
    digitaCupom.innerHTML="Digite o valor do cupom: ";
    digitaCupom.style.display="block";
    }


}

function cupomInput(){

  if (option1.checked){
    chooseValue.style.display="inline";
    chooseValue.style.textAlign="center";
    chooseValue.disabled=false;

    PorcOrValue.style.display="inline";
    PorcOrValue.style.textAlign="center"
    PorcOrValue.innerHTML="<br>Escolha o tipo de cupom: <br><br>"
    
    digitaCupom.innerHTML="Digite o valor do cupom: ";
    digitaCupom.style.display="block";

    cupomText.style.display="inline";
    cupomText.style.textAlign="center";
    cupomText.disabled="true";

  }

  else if (option2.checked){
    chooseValue.style.display="none";
    digitaCupom.style.display="none";
    cupomText.style.display="none";
    cupomText.value="";
    PorcOrValue.style.display="none";
    PorcOrValue.value="";
    cupomDigitado=0;
    chooseValue.value="";
  }
}



  function pontos(){

    if (simPontos.checked){
      digitaPontos.innerHTML="Digite a quantidade de pontos por real gasto:<br>Ex: A cada R$1,00 = 5Pts ";
      digitaPontos.style.display="block"
      pontosText.style.display="inline"
      pontosText.disabled=false;
    }

    else if (naoPontos.checked){
      digitaPontos.style.display="none";
      pontosText.style.display="none";
      pontosText.value="";
      pontosDigitado=0;
    }
  }


    function cashback(){

      if (simCashback.checked){
        digitaCashback.innerHTML="Digite a porcentagem do cashback: ";
        digitaCashback.style.display="block"
        cashbackText.style.display="inline"
        cashbackText.disabled=false;
      }

      else if (naoCashback.checked){
        digitaCashback.style.display="none";
        cashbackText.style.display="none";
        cashbackText.value="";
        cashbackDigitado=0;
      }
    }





function cupomValue(){

   cupomDigitado = parseFloat(cupomText.value.replace(/\D/g, '',));

  cupomText.value="R$"+(cupomDigitado / 100).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  
  if (isNaN(cupomDigitado) || cupomText.value.trim() == '') {
    cupomText.value = '';
    cupomDigitado=0;}


  if (!isNaN(cupomDigitado)) {
      cupomText.innerHTML="<span>R$ "+(cupomDigitado).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })+"</span>";}

  cupomDigitado=cupomDigitado/100;


    if (chooseValue.value=="percent"){
      cupomDigitado=cupomDigitado*100;
      cupomText.value=(cupomDigitado)+"%";
      cupomDigitado= valorPago*cupomDigitado/100;
      
    }
  
}



function pontosValue(){
  pontosDigitado = parseFloat(pontosText.value.replace(/\D/g, '',));

 pontosText.value=(pontosDigitado);

 if (isNaN(pontosDigitado) || pontosText.value.trim() == '') {  pontosText.value = '';
        pontosDigitado=0}

 if (!isNaN(pontosDigitado)) {
     pontosText.innerHTML=(pontosDigitado);

     pontosDigitado=0.02*(pontosDigitado*(valorPago-cupomDigitado))
    }

}


function cashbackValue(){

  cashbackDigitado = parseFloat(cashbackText.value.replace(/\D/g, '',));

 cashbackText.value=(cashbackDigitado)+"%";

 if (isNaN(cashbackDigitado) || cashbackText.value.trim() == '') {  cashbackText.value = '';
        cashbackDigitado=0}


 if (!isNaN(cashbackDigitado)) {
     cashbackText.innerHTML=(cashbackDigitado);

     
     cashbackDigitado=cashbackDigitado/100*(valorPago-cupomDigitado)

    }

}

function calcule(){
    cupomValue()
    pontosValue()
    cashbackValue();
    escolhaValor();

    
  valorGasto=valorPago-cupomDigitado-pontosDigitado-cashbackDigitado;
  
  if (isNaN(pontosDigitado) || isNaN(cupomDigitado) || isNaN(cashbackDigitado)||(valorPago<=0)){
    custoProduto.innerHTML="Digite um valor correto"
}
  else {
    

 custoProduto.innerHTML="O valor do produto é de: R$"+valorPago.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

 if (cupomDigitado>0){
  custoProduto.innerHTML= custoProduto.innerHTML+ "<br> Com o cupom o valor é de: R$"+(valorPago-cupomDigitado).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
  
 if (pontosDigitado>0){
  custoProduto.innerHTML= custoProduto.innerHTML+"<br>Com os pontos o produto custa: ~R$"+(valorPago-cupomDigitado-pontosDigitado).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}

 if (cashbackDigitado>0){
 custoProduto.innerHTML= custoProduto.innerHTML+"<br>Com o cashback o produto custa: ~R$"+(valorGasto).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
 
 custoProduto.innerHTML= custoProduto.innerHTML+"<br>A economoia deve ser de: R$"+(valorPago-valorGasto).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }}




cupomText.addEventListener("change",cupomValue)
option1.addEventListener("change",cupomInput)
option2.addEventListener("change",cupomInput)
chooseValue.addEventListener("change",escolhaValor)

pontosText.addEventListener("change",pontosValue)
simPontos.addEventListener("change",pontos)
naoPontos.addEventListener("change",pontos)

cashbackText.addEventListener("change",cashbackValue)
simCashback.addEventListener("change",cashback)
naoCashback.addEventListener("change",cashback)

loja.addEventListener("change",function(){
valor.addEventListener("change",valorProduto)
if (loja.value !=""){
  valor.disabled=false;
}
})


