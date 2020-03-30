
      function validaFechaMenor(campo){
        var bRet = false;
        var dHoy = new Date();
        var dCapt = null;
        if (campo.value == "")
          alert("Faltan datos");
        else{
          dCapt = validaFecha(campo.value);
          if (dCapt != null && dCapt < dHoy)
            bRet = true;
          else
            alert("La fecha debe ser menor a la fecha actual");
        }
        return bRet;
      }

        function validaFecha(valor){
            var dConvertida = null;
            var sAnio = "";
            var sMes = "";
            var sDia = "";
            var nAnio=0, nMes=0, nDia = 0;

            var Fecha = valor.split("");
            var FechaModificada = Fecha[8]+Fecha[9]+"/"+Fecha[5]+Fecha[6]+"/"+Fecha[0]+Fecha[1]+Fecha[2]+Fecha[3];
            valor=FechaModificada;

            if (valor.match(/^\d{2}\/\d{2}\/\d{4}$/)){
              nDia = parseInt(valor.substring(0,2), 10);
              nMes = parseInt(valor.substring(3,5), 10);
              nAnio = parseInt(valor.substring(6,10), 10);

              if (nDia <1 || nDia>31)
                alert("El día no es válido")
              else{
                if (nMes <1 || nMes>12)
                  alert("El mes no es válido");
                else{
                  if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
                     nMes==8 || nMes==10 || nMes==12) && nDia > 31)
                     alert("El mes tiene máximo 31 días");
                  else if ((nMes==4 || nMes==6 || nMes==9 ||
                        nMes==11) && nDia > 30)
                     alert("El mes tiene máximo 30 días");
                  else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
                     alert("Febrero tiene 28 días o 29 en bisiesto");
                  else{
                    dConvertida = new Date();
                    dConvertida.setFullYear(nAnio, nMes-1, nDia);
                  }//fin validaci�n día-mes
                }//mes válido
              }//día válido
              creasigno(nDia,nMes);
            }//formato válido

            else{
              alert("No tiene formato de fecha");
            }
            return dConvertida;
        }
        function creasigno(nDia,nMes){

        //var newDiv = document.createElement("div");

        if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
          //var newContent = document.createTextNode("SIGNO ARIES");
          //document.getElementById("contenedor").style="background-color:#54b51e";
          //document.getElementById("contenedor").innerHTML="<img src='../img/Aries.PNG'"+"<p>Signo: Aries</p>"+"<p>Número de la suerte: 25</p>";
          //document.getElementById("img").src="../img/Aries.PNG";
          //document.getElementById("Nombre").innerHTML="Signo: Aries\nNúmero de la suerte: 455";
          document.getElementById("contenedor").style="background-color:red; color:white";
          document.getElementById("img").src="../img/Aries.PNG";
          document.getElementById("Nombre").innerHTML="Signo: Aries";
          document.getElementById("Numero").innerHTML="Número de la suerte: 5";
          document.getElementById("Color").innerHTML="Color: Rojo";

        }
        else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
          //var newContent = document.createTextNode("SIGNO TAURO");
          document.getElementById("contenedor").style="background-color:green; color:white";
                    document.getElementById("img").src="../img/Tauro.PNG";
          document.getElementById("Nombre").innerHTML="Signo: Tauro";
          document.getElementById("Numero").innerHTML="Número de la suerte: 12";
          document.getElementById("Color").innerHTML="Color: Verde";

        }
          else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
            //var newContent = document.createTextNode("SIGNO GEMINIS");
            document.getElementById("contenedor").style="background-color:yellow";
            document.getElementById("img").src="../img/Geminis.PNG";
            document.getElementById("Nombre").innerHTML="Signo: Geminis";
            document.getElementById("Numero").innerHTML="Número de la suerte: 3";
            document.getElementById("Color").innerHTML="Color: Amarillo";

          }
            else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
              //var newContent = document.createTextNode("SIGNO CANCER");
              document.getElementById("contenedor").style="background-color: white";
              document.getElementById("img").src="../img/Cancer.PNG";
              document.getElementById("Nombre").innerHTML="Signo: Cancer";
              document.getElementById("Numero").innerHTML="Número de la suerte: 2";
              document.getElementById("Color").innerHTML="Color: Blanco";

            }
              else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
                //var newContent = document.createTextNode("SIGNO LEO");
                document.getElementById("contenedor").style="background-color:Orange";
                document.getElementById("img").src="../img/Leo.PNG";
                document.getElementById("Nombre").innerHTML="Signo: Leo";
                document.getElementById("Numero").innerHTML="Número de la suerte: 9";
                document.getElementById("Color").innerHTML="Color: Naranja";

              }
                else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
                  //var newContent = document.createTextNode("SIGNO VIRGO");
                  document.getElementById("contenedor").style="background-color: maroon; color:white";
                  document.getElementById("img").src="../img/Virgo.PNG";
                  document.getElementById("Nombre").innerHTML="Signo: Virgo";
                  document.getElementById("Numero").innerHTML="Número de la suerte: 17";
                  document.getElementById("Color").innerHTML="Color: Marrón";

                }
                  else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
                    //var newContent = document.createTextNode("SIGNO LIBRA");
                    document.getElementById("contenedor").style="background-color:pink";
                    document.getElementById("img").src="../img/Libra.PNG";
                    document.getElementById("Nombre").innerHTML="Signo: Libra";
                    document.getElementById("Numero").innerHTML="Número de la suerte: 6";
                    document.getElementById("Color").innerHTML="Color: Rosa";

                  }
                    else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
                      //var newContent = document.createTextNode("SIGNO ESCORPIO");
                      document.getElementById("contenedor").style="background-color:#A71A25; color:white";  
                      document.getElementById("img").src="../img/Escorpion.PNG";
                      document.getElementById("Nombre").innerHTML="Signo: Escorpion";
                      document.getElementById("Numero").innerHTML="Número de la suerte: 8";
                      document.getElementById("Color").innerHTML="Color: Rojo Oscuro";

                    }
                      else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
                        //var newContent = document.createTextNode("SIGNO SAGITARIO");
                        document.getElementById("contenedor").style="background-color:blue; color:white";
                        document.getElementById("img").src="../img/Sagitario.PNG";
                        document.getElementById("Nombre").innerHTML="Signo: Sagitario";
                        document.getElementById("Numero").innerHTML="Número de la suerte: 4";
                        document.getElementById("Color").innerHTML="Color: Azul";

                      }
                        else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
                          //var newContent = document.createTextNode("SIGNO CAPRICORNIO");
                          document.getElementById("contenedor").style="background-color:black; color:white";
                          document.getElementById("img").src="../img/Capricornio.PNG";
                          document.getElementById("Nombre").innerHTML="Signo: Capricornio";
                          document.getElementById("Numero").innerHTML="Número de la suerte: 23";
                          document.getElementById("Color").innerHTML="Color: Negro";

                        }
                          else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
                            //var newContent = document.createTextNode("SIGNO ACUARIO");
                            document.getElementById("contenedor").style="background-color:#5DC1B9";
                            document.getElementById("img").src="../img/Acuario.PNG";
                            document.getElementById("Nombre").innerHTML="Signo: Acuario";
                            document.getElementById("Numero").innerHTML="Número de la suerte: 0";
                            document.getElementById("Color").innerHTML="Color: Turquesa";

                          }
                            else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3)){
                                //var newContent = document.createTextNode("SIGNO PICIS");
                                document.getElementById("contenedor").style="background-color:#582FBE; color:white";
                                document.getElementById("img").src="../img/Piscis.PNG";
                                document.getElementById("Nombre").innerHTML="Signo: Piscis";
                                document.getElementById("Numero").innerHTML="Número de la suerte: 7";
                                document.getElementById("Color").innerHTML="Color: Morado";

                            }

/*
        //var newContent = document.createTextNode("SIGNO");
        newDiv.appendChild(newContent); //añade texto al div creado.

         // añade el elemento creado y su contenido al DOM
         var currentDiv = document.getElementById("div");
         document.body.insertBefore(newDiv, currentDiv);
        newDiv.style="border: 3px solid #999999; background-color:#54b51e; width: 200px ;height:300px ";
        */
}
