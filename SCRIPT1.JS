let varGlobal1="texto de variable global";


function FCambioColor(){
let vartemporal="texto temporal";
let vtexto1=document.getElementById("ejmDOM1");
vtexto1.textContent= "texto cambiado por funcion FCambioColor";
vtexto1.style.color= "RED";
vtexto1.insertAdjacentHTML("beforeend",
    " <br>este texto es adicional");
vtexto1.style.backgroundColor="green";

vtexto1.insertAdjacentHTML("beforeend",varGlobal1 ) ;
//la variable global se puede utlizar dentro de cualquier funcion 
}
vtexto1= "texto fuera de funcion";//vtexto1  no se la variable de la funcion
console.log(vtexto1);
//console.log(vartemporal);// vartemporal no esta definido afuera de funcion

function FCambioclase1() {
   let vtexto2=document.getElementsByClassName("classDOM1");
    vtexto2[1].innerHTML="elemento [1]del arreglo de la clase classDOM1";
   console.log("tamaño de array =", vtexto2.length);
 //se coloca el indice 1 por ser el 2do eleememnto de la clase classOM1 de la pag web
}

function FCambiotag1(){
let vtexto3=document.getElementsByClassName("h2");
vtexto3[21].innerHTML="elemento h2 cambio por tagDOM1"
//se le coloca el indice 6 por ser 7mo eleememnto h2 de la pag web index.html

}









