piezas1 = ["💗", "🐈", "🦋", "♟️" , "🏰", "🎎", "🎡", "☣️"];
piezas2 = ["💜", "🦄", "🐢", "🎮" , "🗽", "💣", "💎", "🔱"];
piezas3 = ["☮️", "🐇", "🐞", "🎸" , "🚀", "🧸", "💰", "㊗️"];

allpiezas = piezas1.concat(piezas2, piezas3);//concatenando todas as pezas do jogo de memória

doble = allpiezas.concat(allpiezas);//salvando tosas essas pezas numa variavel

function barajarTarje(){ //criamos uma função para barajar las tarjetas
    var resultado; //criamos uma variável local resulado
    resultado = doble.sort(function(){ //todas las cartas que estan concatenadas en doble van a ser ordenadas pelo método sort com uma função expecifica.
        return 0.5 - Math.random(); //as cartas são organizadas de forma aleatoria     
     });
    return resultado;
}

function ordenaTarjetas(){
    mesa = document.getElementById("mesa"); //Criando variável mesa em java script e selecionando a div com id mesa do HTML
    var tarjeBara = barajarTarje()
    mesa.innerHTML = "";//Una mesa vazia???? Instanciando mesa????
    
    doble.forEach(function(elemento) { //por cada elemento do nosso array vamos cria um node HTML div no caso //nosso loop graças ao for each
        pieza = document.createElement("div");//criando uma variavel em js con nobre pieza e dando un valor de node div para criar esse div por cada elemento de nosso array
        pieza.innerHTML = "<div class='tarjeta' data-valor="+ elemento +"><div class='pieza_contenido'>" + elemento + "</div></div>";
        mesa.appendChild(pieza); //dentro de
    });
}

function descubrir(){
    var descu;
    var totalDescu = document.querySelectorAll(".descubierta:not(.correcta)");//nos permite continuar com a busca de pezas que não estão com a classe correcta
    this.getAttribute("class");
    if (totalDescu.length > 1){
        return;
    }
    this.classList.add("descubierta");//classList.add adiciona um efeito/estilo a uma div, neste caso estili descubierta
    descu = document.querySelectorAll(".descubierta:not(.correcta)");
    if (descu.length < 2){
        return;
    }
    comparar(descu)
}

function comparar(piezasPorComparar){
    if (piezasPorComparar[0].dataset.valor === piezasPorComparar[1].dataset.valor){
        iguales(piezasPorComparar);
    }else{
        diferentes(piezasPorComparar);
    }
}


function iguales(lasPiezas){
    lasPiezas.forEach(function(elemento){
        elemento.classList.add("correcta")
    });
}

function diferentes(lasPiezas){
        lasPiezas.forEach(function(elemento){
            elemento.classList.add("error")
        });

        setTimeout(function(){
            lasPiezas.forEach(function(elemento){
                elemento.classList.remove("descubierta")
                elemento.classList.remove("error")
            });
        },1500);
    
}

ordenaTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento){
    elemento.addEventListener("click", descubrir);
});