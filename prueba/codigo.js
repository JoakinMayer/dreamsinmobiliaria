
$(document).ready(inicio);
function inicio()
{
    cargarAlumnos();
    $("#carrera").change(mostrarAlumnosPorCarrera);
    $("input:checkbox").change(filtrarConCheckbox);

}

function filtrarConCheckbox()
{
    $("#propiedades").html("");
    var checkboxSeleccionados = $("input:checked")//ya es un array
    var valoresCheckbox = [];
    for (var i = 0; i < checkboxSeleccionados.length; i++)
    {
        valoresCheckbox.push($(checkboxSeleccionados[i]).val())
    }
    //alert(valoresCheckbox)

    for (var j = 0; j < alumnos.length; j++)
    {
        if (j % 3 === 0) {
            $("#propiedades").append("<div class='fila'></div>")
        }
        if (valoresCheckbox.indexOf(alumnos[j].carrera) !== -1)
        {

            $("#propiedades .fila:last").append("<div><h1>" + alumnos[j].nombre + "<img src='imagenes/" + alumnos[j].imagen + "'></h1><div class='oculto'><h2>carrera: " + alumnos[j]["carrera"] + "</h2><p>edad: " + alumnos[j].edad + "</p><p>dirección: " + alumnos[j].direccion + "</p><p><a href='ampliacion.html?producto=" + alumnos[j].id + "'>ver más</a></p><div></div>")
        }
    }
}

function mostrarAlumnosPorCarrera()
{
    $("#propiedades").html("");
    var contador = 0;
    var CarreraBuscar = $("#carrera").val();
    for (var i = 0; i < alumnos.length; i++)
    {
        if (CarreraBuscar === alumnos[i].carrera) //esta es la parte que cambia
        {
            contador++;
            $("#propiedades").append("<div><h1>" + alumnos[i].nombre + "</h1><div class='oculto'><h2>carrera: " + alumnos[i].carrera + "</h2><p>edad: " + alumnos[i].edad + "</p><p>dirección: " + alumnos[i].direccion + "</p><p>ver más</p><div></div>")
        }

        $("#propiedades div h1").click(mostrarInfo);

    }

    if (contador === 0)//va en todos los filtros
    {
        $("#propiedades").html("<h1>no hay alumnos de esa carrera</h1>")
    }
}

function cargarAlumnos()
{
    $("div").html("")

    for (var i = 0; i < alumnos.length; i++)
    {
        if (i % 3 === 0) {
            $("#propiedades").append("<div class='fila'></div>")
        }
        $("#propiedades .fila:last").append("\
<div>\n\
<h1>" + alumnos[i].nombre + "<img src='imagenes/" + alumnos[i].imagen + "'></h1><div class='oculto'><h2>carrera: " + alumnos[i]["carrera"] + "</h2><p>edad: " + alumnos[i].edad + "</p><p>dirección: " + alumnos[i].direccion + "</p><p><a href='ampliacion.html?producto=" + alumnos[i].id + "'>ver más</a></p><div></div>")
    }
    $("#propiedades .fila:last div:eq(0)").addClass("primero")
    $("#propiedades div h1").click(mostrarInfo);

}

function mostrarInfo()
{
    $(".oculto").css("display", "none");
    $(this).next().css("display", "block");
}


