

function valida(campo){
			var bRet = false;
			if (campo.value == "")
				imprimir("No ha ingresado el RFC");
			else 	if (!campo.value.match(/^[A-Z]{3,4}\d{6}[A-Z0-9]{3}$/))
					imprimir("No tiene formato de RFC\n Ingresa de nuevo el RFC");
				else
					imprimir("Válido, tiene formato de RFC");
}


function imprimir(texto){
	var imprimir = document.getElementById("impresion");
    	imprimir.innerHTML=texto;
}