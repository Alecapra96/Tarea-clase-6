/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar 
el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual,
 menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
let $buttonClean=document.getElementById("button-clear");
let $placeImputs=document.getElementById("input-part");
let $buttonMore=document.getElementById("button-more");
$buttonClean.addEventListener("click",clearInputs);
$buttonMore.addEventListener("click",createInput);

function clearInputs(){
    $valoresInputs = document.getElementsByClassName("inputs");

     for(let i=0;i<$valoresInputs.length;i++){$valoresInputs[i].value=""}

}
function createInput(){
    const $imputFamily = document.createElement('input');
    $imputFamily.placeholder = "Ingrese el sueldo ";
    $imputFamily.className = "inputs";
    $imputFamily.type = "number";
    $placeImputs.appendChild($imputFamily);
}