

function crearTarjetas(){
    let cmpDesde=document.getElementById("txtDesde");
    let desde=cmpDesde.value;
    let cmpHasta=document.getElementById("txtHasta");
    let hasta=cmpHasta.value;
    generarCantidadTarjetas(desde,hasta);

}
function generarCantidadTarjetas(desde,hasta){
        let contenido="";
        let cmpDivTarjetas=document.getElementById("divTarjetas");
        for(let i=desde;i<=hasta;i++){
        contenido=contenido+"<div class='item'>"+i+"</div>"
        cmpDivTarjetas.innerHTML=contenido;
        }
    }