//Funciones Tarjetas

//Funcion: recupera componentes e invoca a generarCantidadTarjetas
function crearTarjetas(){
    //recupera y transforma a entero Input: desde
    let cmpDesde=document.getElementById("txtDesde");
    let desdeTxt=cmpDesde.value;
    let desde=parseInt(desdeTxt);
    //recupera y transforma a entero Input: hasta
    let cmpHasta=document.getElementById("txtHasta");
    let hastaTxt=cmpHasta.value;
    let hasta=parseInt(hastaTxt);
    //recupera y transforma a entero Input: salto
    let cmpSalto=document.getElementById("txtSalto");
    let saltoTxt=cmpSalto.value;
    let salto=parseInt(saltoTxt);
    //Invoca a generarCantidadTarjetas y reemplaza con datos recuperados
    generarCantidadTarjetas(desde,hasta,salto);
}

/*Funcion: -For- usa parametros para colocar valores ingresados
  por el usuario en el codigo*/
function generarCantidadTarjetas(desde,hasta,salto){
    let contenido="";
    let cmpDivTarjetas=document.getElementById("divTarjetas");
    // Si salto es cero o negativo no entra al For
    if(salto<=0){
        return;
    }
    for(let i=desde;i<=hasta;i=i+salto){
        contenido=contenido+"<div class='item'>"+i+"</div>"
        cmpDivTarjetas.innerHTML=contenido;
    } 
}