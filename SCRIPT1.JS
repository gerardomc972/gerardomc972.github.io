function fcambiocolor(){

let vtexto1=document.getElementById("ejmDOM1");
vtexto1.textContent= "texto cambiado por funcion fcambiocolor";
vtexto1.style.color= "orange";
vtexto1.insertAdjacentHTML("beforeEND", "<br>este texto es adicional<br>");
vtexto1.style.color="green";
}