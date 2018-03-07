var ruta=window.location.href;
//alert (ruta)
var posicion=ruta.indexOf("=")+1;
//alert(posicion);
var id=ruta.substring(posicion);
//alert(id);

$(document).ready(inicio);
function inicio()
{
    mostrarDatos();
}

function mostrarDatos()
{
    $("#info h1").text(alumnos[id].nombre);
    $("#info h2").text(alumnos[id].carrera);
    $("#info #edad").text(alumnos[id].edad)
    for(var i=0; i<alumnos[id].imagen.length;i++)
    {
        $("#imagenes").append("<img src='imagenes/"+alumnos[id].imagen[i]+"'>")
    }
    
}

