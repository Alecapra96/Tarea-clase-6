/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar 
el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
 menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
// let $buttonClean=document.getElementById("button-clear");
let $placeImputs=document.getElementById("input-part");
let $buttonMore=document.getElementById("button-more");
let $buttonCalculate = document.getElementById("button-calcular");

// $buttonClean.addEventListener("click",clearInputs);
$buttonMore.addEventListener("click",createInput);
$buttonCalculate.addEventListener("click",calculateSalary)
/*
function clearInputs(){
    $valoresInputs = document.getElementsByClassName("inputs");

     for(let i=0;i<$valoresInputs.length;i++){$valoresInputs[i].value=""}

}
*/
function calculateSalary(){
    let verArray= [] ;
    const $imputsGenerados = Array.from(document.getElementsByClassName("inputs"));
    for (let i=0;i<$imputsGenerados.length;i++){
        if(Number($imputsGenerados[i].value) != ""){
        verArray.push(Number($imputsGenerados[i].value));
        }
    }
    console.log(verArray);
    // _________________________________________________________________________________
    let highNumber=verArray[0];
    for (let i=0;i<verArray.length;i++){
        if (verArray[i]>highNumber){
            highNumber= verArray[i];
        }
    }
    console.log(highNumber +" numero mas grande");
    // _________________________________________________________________________________
    let lowNumber=verArray[0];
    for (let i=0;i<verArray.length;i++){
        if (verArray[i]<lowNumber){
            lowNumber= verArray[i];
        }
    }
    console.log(lowNumber+" numero mas chico");
    // _________________________________________________________________________________
    let promedio = 0;
    for (let i=0;i<verArray.length;i++){
        promedio += verArray[i];
    }
    promedio=promedio/verArray.length;
    console.log(promedio+" es el promedio");
    // _________________________________________________________________________________
    document.getElementById('results').innerHTML = 'El numero mas grande es '+highNumber+", el numero menor es "+lowNumber+ " y el promedio es "+promedio;

}

function createInput(){
    const $imputFamily = document.createElement('input');
    $imputFamily.placeholder = "Ingrese el sueldo ";
    $imputFamily.className = "inputs";
    $imputFamily.type = "number";
    $placeImputs.appendChild($imputFamily);
}