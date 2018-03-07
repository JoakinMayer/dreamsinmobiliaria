var ruta = window.location.href;
var posicion = ruta.indexOf("=") + 1;
var id = ruta.substring(posicion);

$(document).ready(iniciar);
function iniciar()
{
    mostrarDatos();
    $("#vermapa").click(mostrarModal);
    $("#cerrar").click(cerrarModal);
}
function cerrarModal() {
    $("#modal").fadeOut();
}

function mostrarModal() {
    $("#modal").css("display", "block");
}
function mostrarDatos()
{
    $(".info>h3").text(propiedades[id].tipo);
    $(".info>h4").text(propiedades[id].ubicacion);
    $(".info>p").text(propiedades[id].descripcion);
    $(".info>p:nth-of-type(2)").text(propiedades[id].precio);
    if (propiedades[id].dormitorios > 0) {
        $(".caracteristicas").append("<li><img src='img/cama.png' alt=''/><p>" + propiedades[id].dormitorios + "</p></li>");
    }
    if (propiedades[id].baños > 0) {
        $(".caracteristicas").append("<li><img src='img/bano.png' alt=''/><p>" + propiedades[id].baños + "</p></li>");
    }
    if (propiedades[id].garaje !== "No") {
        $(".caracteristicas").append("<li><img src='img/garaje.png' alt=''/><p>" + propiedades[id].garaje + "</p></li>");
    }
    $(".caracteristicas").append("<li><img src='img/house.png' alt=''/><p>" + propiedades[id].superficie + "</p></li>");
    if (propiedades[id].gastos > 0) {
        $(".caracteristicas").append("<li><img src='img/gastos.png' alt='Gastos Comunes' title='Gastos Comunes'/><p>$ " + propiedades[id].gastos + "</p></li>");
    }
    $("#modal").append("<iframe src=" + propiedades[id].direccion + "></iframe>");
    for (var i = 0; i < propiedades[id].imagen.length; i++)
    {
        if (i === 0) {
            $(".carousel-inner").append("<p class='transaccion'>" + propiedades[id].transaccion + "</p>");
            $(".carousel-inner").append("<div class='item active'><img src='img/" + propiedades[id].imagen[i] + "'></div>");
        } else {
            $(".carousel-inner").append("<div class='item'><img src='img/" + propiedades[id].imagen[i] + "'</div>");
        }
    }
}

