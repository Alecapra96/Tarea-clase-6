let $buttonNext = document.getElementById("buttonNext");
let $placeImputs=document.getElementById("secondPart");
// let $buttonNext2=document.getElementById("click-button-next");
let $buttonMore;
let arrayGenerado = [] ;
$buttonNext.addEventListener("click",ocultarInicio);
$buttonNext.addEventListener("click",ShowsInputsCreated);

createButtonMore();  // Aca invoco la funcion de crear los botones
createButtonNext2(); // llamo la funcion de crear al boton que calcula el promedio

$buttonMore.addEventListener("click",CalcularPromedio); 

function ShowsInputsCreated(){ //Muestra imputs de acuerdo al numero que escribio el cliente
    event.preventDefault();  //Esto lo pongo para que no pase lo que paso en clase-5
    document.querySelector("#titulo").innerText = "Promedio de edad de tus familiares"; // Cambio el titulo

    let $numberFamily = document.querySelector("#numberFamily").value; // Selecciono el valor que introdujo el usuario del numero de familiares

    if ($numberFamily != 0){ // Creo tantos imputs como $numberFamily tenga.

        for(i=0;i<$numberFamily;i++){
            createInput();
        }   
    }
} 

function CalcularPromedio(){
    let verArray= [] ;
    let $imputsGenerados = Array.from(document.getElementsByClassName("inputsGenerados"));
    
     for (i=0;i<$imputsGenerados.length;i++)
     {
        verArray = $imputsGenerados[i];
        arrayGenerado.push(verArray.value);
    }
    console.log(arrayGenerado);
    return arrayGenerado;
}



function ocultarInicio() { // Funcion para ocultar el imput y el button del principio
    event.preventDefault();
    document.getElementById("numberFamily").style.display = "none";
    document.getElementById("buttonNext").style.display = "none";
}

function createInput(){
    const $imputFamily = document.createElement('input');
    $imputFamily.placeholder = "Ingresa la edad del miembro ";
    $imputFamily.className = "inputsGenerados";
    $imputFamily.type = "number";
    $placeImputs.appendChild($imputFamily);
}

function createButtonMore(){ // Agrego un boton para sumar o restar integrantes
    let $placeImputs1=document.getElementById("thirdPart");
    const $buttonMore = document.createElement('BUTTON');
    $buttonMore.id = "click-button-more";
    $buttonMore.innerHTML = "+"; 
    $placeImputs1.appendChild($buttonMore);
    //hago que cuando se haga click en el boton que acabo de crear se sumen imput dependiendo del numeor que escribio en $numberFamily
    $buttonMore.addEventListener("click",createInput);
    return $buttonMore;
}

function createButtonNext2(){ // Agrego un boton para calcular lo que el usuario introdujo en los imputs generados con la funcion sumarImputs()

    let $placeImputs1=document.getElementById("fourPart");
    $buttonMore = document.createElement('BUTTON');
    $buttonMore.id = "click-button-next";
    $buttonMore.innerHTML = "CALCULAR!"; 
    $placeImputs1.appendChild($buttonMore);
    return $buttonMore;
}
