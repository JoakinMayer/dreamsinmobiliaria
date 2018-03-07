$(document).ready(iniciar);

function iniciar() {
    cargarPropiedades();
    $("#buscador").keyup(buscadorPalabra);
    $("input:checkbox").change(filtrarTransaccion);
}

function filtrarTransaccion() {
    $("#propiedades").html("");
    var checkboxSeleccionados = $("input:checked");
    var valoresTransacciones = [];
    var palabra = ($("#buscador").val().toUpperCase());

    for (var i = 0; i < checkboxSeleccionados.length; i++)
    {
        valoresTransacciones.push($(checkboxSeleccionados[i]).val());
    }

    for (var j = 0; j < propiedades.length; j++)
    {

        if ((valoresTransacciones.indexOf(propiedades[j].transaccion) !== -1)&&(propiedades[j].tipo.indexOf(palabra) !== -1))
        {

            $("#propiedades:last").append("<article class='vistaPropiedades'><p class='transaccion'>" + propiedades[j].transaccion + "</p><img src='img/" + propiedades[j].imagen[0] + "'><div class='oculto info'><h3>" + propiedades[j].tipo + "</h3><h4>" + propiedades[j].ubicacion + "</h4><p>" + propiedades[j].descripcion + "</p><p>" + propiedades[j].precio + "<a href='descripcionPropiedad.html?producto=" + propiedades[j].id + "'>Ver +</a></div></article>");
        }
    }
    $("#propiedades article img").click(mostrarInfo);
}

function buscadorPalabra() {
    $("#propiedades").html("");
    var palabra = ($("#buscador").val().toUpperCase());
    for (var i = 0; i < propiedades.length; i++)
    {
        if (propiedades[i].tipo.indexOf(palabra) !== -1) {
            $("#propiedades:last").append("<article class='vistaPropiedades'><p class='transaccion'>" + propiedades[i].transaccion + "</p><img src='img/" + propiedades[i].imagen[0] + "'><div class='oculto info'><h3>" + propiedades[i].tipo + "</h3><h4>" + propiedades[i].ubicacion + "</h4><p>" + propiedades[i].descripcion + "</p><p>" + propiedades[i].precio + "<a href='descripcionPropiedad.html?producto=" + propiedades[i].id + "'>Ver +</a></div></article>");
        }
    }
    $("#propiedades article img").click(mostrarInfo);
}

function cargarPropiedades()
{
    $("#propiedades").html("");

    for (var i = 0; i < propiedades.length; i++)
    {
        $("#propiedades:last").append("<article class='vistaPropiedades'><p class='transaccion'>" + propiedades[i].transaccion + "</p><img src='img/" + propiedades[i].imagen[0] + "'><div class='oculto info'><h3>" + propiedades[i].tipo + "</h3><h4>" + propiedades[i].ubicacion + "</h4><p>" + propiedades[i].descripcion + "</p><p>" + propiedades[i].precio + "<a href='descripcionPropiedad.html?producto=" + propiedades[i].id + "'>Ver +</a></div></article>");
    }
    $("#propiedades article img").click(mostrarInfo);

}

function mostrarInfo()
{
    $(".vistaPropiedades").css("width", "30%");
    $("#propiedades img").css("width", "100%");
    $(".oculto").css("display", "none");
    $(this).next().css("display", "block");
    $(this).css("width", "50%");
    $(this).parent().css("width", "100%");
}