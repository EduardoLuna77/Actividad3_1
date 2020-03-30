//FACTORIAL
function factorización(){
	var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
	var resultado = 1;
	var	texto;

	for(var i=1; i<=numero; i++) {
	  resultado *= i;}
	  texto="El resultado de la factorización de "+numero+" es: "+resultado;
	  imprimir(texto);
    					
}

function imprimir(texto){
	var imprimir = document.getElementById("impresion");
    	imprimir.innerHTML=texto;
}