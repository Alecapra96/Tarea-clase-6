let $buttonNext = document.getElementById("buttonNext");
let $placeImputs=document.getElementById("second-part");
let $buttonClean=document.getElementById("limpiar");
let $buttonMore;
let arrayGenerado = [] ;
let num=0;
let numeroMayor;
let numeroMenor;

$buttonNext.addEventListener("click",ocultarInicio);
$buttonNext.addEventListener("click",ShowsInputsCreated);

createButtonMore();  // Aca invoco la funcion de crear los botones
createButtonNext2(); // llamo la funcion de crear al boton que calcula el promedio
$buttonClean.addEventListener("click",clearInputs);
$buttonMore.addEventListener("click",CalculateAges); 



function ShowsInputsCreated(){ //Muestra imputs de acuerdo al numero que escribio el cliente
    event.preventDefault();  //Esto lo pongo para que no pase lo que paso en clase-5
    document.querySelector("#titulo").innerText = "Promedio de edad de tus familiares"; // Cambio el titulo


    let $numberFamily = document.querySelector("#numberFamily").value; // Selecciono el valor que introdujo el usuario del numero de familiares

    if ($numberFamily > 0 && $numberFamily <= 15){ // Creo tantos imputs como $numberFamily tenga.

        for(i=0;i<$numberFamily;i++){
            createInput();
        }   
    }
    else if ($numberFamily >15){
        alert("Dudo que su padre tenga mas de 15 hijos");
        location.reload()
    }
    else{
        alert("Escriba mejor");
        location.reload()
    }
} 

function CalculateAges(){
    event.preventDefault();

    let verArray= [] ;
    let $imputsGenerados = Array.from(document.getElementsByClassName("inputsGenerados"));
    if ($imputsGenerados != 0){ //POR QUE NO FUNCIONA ESTE IF?
    
     for (let i=0;i<$imputsGenerados.length;i++)
     {
        verArray = $imputsGenerados[i];
        arrayGenerado.push(verArray.value);
    }
    console.log(arrayGenerado);
    CalculateHigher();
    CalculateLess();
    calculateAverage()
    showResults();
    document.getElementById('labelResults').innerHTML = 'El numero mas grande es '+numeroMayor+", el numero menor es "+numeroMenor+ " y el promedio es "+num;
    }
    else{
        alert("ingresa mejor los datos");
    }
}

function CalculateHigher(){
    numeroMayor=arrayGenerado[0];

    for (let i=0;i<arrayGenerado.length;i++)
    {

        if (Number(arrayGenerado[i]) > numeroMayor ) {
            numeroMayor = arrayGenerado[i];

        }
    }
    console.log(numeroMayor);
    return numeroMayor;
}

function CalculateLess(){
    numeroMenor=arrayGenerado[0];

    for (let i=0;i<arrayGenerado.length;i++)
    {

        if (Number(arrayGenerado[i]) < numeroMenor ) {
            numeroMenor = arrayGenerado[i];

        }
    }
    console.log(numeroMenor);
    return numeroMenor;
}

function calculateAverage(){
    for (let i=0;i<arrayGenerado.length;i++)
    {
        num += (Number(arrayGenerado[i]));
    }
    num = num / arrayGenerado.length;
    console.log(num);
    return num;
}

function ocultarInicio() { // Funcion para ocultar el imput y el button del principio
    event.preventDefault();
    document.getElementById("numberFamily").style.display = "none";
    document.getElementById("buttonNext").style.display = "none";
    document.getElementById("click-button-more").style.display = "flex";
    document.getElementById("click-button-next").style.display = "flex";
    document.getElementById("limpiar").style.display="flex";
}

function createInput(){
    const $imputFamily = document.createElement('input');
    $imputFamily.placeholder = "Edad del miembro ";
    $imputFamily.className = "inputsGenerados";
    $imputFamily.type = "number";
    $placeImputs.appendChild($imputFamily);
}

function createButtonMore(){ // Agrego un boton para sumar o restar integrantes
    let $placeImputs1=document.getElementById("third-part");
    const $buttonMore = document.createElement('BUTTON');
    $buttonMore.id = "click-button-more";
    $buttonMore.innerHTML = "+"; 
    $placeImputs1.appendChild($buttonMore);
    //hago que cuando se haga click en el boton que acabo de crear se sumen imput dependiendo del numeor que escribio en $numberFamily
    $buttonMore.addEventListener("click",createInput);
    return $buttonMore;
}

function createButtonNext2(){ // Agrego un boton para calcular lo que el usuario introdujo en los imputs generados con la funcion sumarImputs()

    let $placeImputs1=document.getElementById("four-part");
    $buttonMore = document.createElement('BUTTON');
    $buttonMore.id = "click-button-next";
    $buttonMore.innerHTML = "CALCULAR!"; 
    $placeImputs1.appendChild($buttonMore);
    return $buttonMore;
}
function showResults(){
    let $placeImputs1=document.getElementById("five-part");
    $label = document.createElement('LABEL');
    $label.id = "labelResults";
    
    $placeImputs1.appendChild($label);
    return $label;
}
function clearInputs(){
    $valoresInputs = document.getElementsByClassName("inputsGenerados");

     for(let i=0;i<$valoresInputs.length;i++){$valoresInputs[i].value=""}

}
