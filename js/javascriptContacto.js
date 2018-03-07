$(document).ready(iniciar);

function iniciar()
{
    $("input[type='text']").focusout(validarNoVacio);
    $("#mail").focusout(validarMail);
    $("#tel").focusout(validarTel);
    $("textarea").focusout(validarNoVacio);
    $("#enviar").click(enviarMail);
}

function validarTel() {
    var tel = $(this).val();

    if ((tel === "")) {
        $(this).css({
            "outline": "solid 2px tomato"
        });
        $(this).next("p").text("No puede estar vacio");
    } else if (isNaN(tel)) {
        $(this).css({
            "outline": "solid 2px tomato"
        });
        $(this).next("p").text("Debe de ser un número.");
    } else {
        $(this).css("outline", "solid 2px lawngreen");
        $(this).next("p").html("");
    }
}

function validarMail() {
    var mail = $(this).val();

    var validarArroba = mail.indexOf("@");

    if (mail === "")
    {
        $(this).css({
            "outline": "solid 2px tomato"
        });
        $(this).next("p").text("No puede estar vacio");
    } else if (validarArroba === -1)
    {
        $(this).css({
            "outline": "solid 2px tomato"
        });
        $(this).next("p").text("Su mail no es correcto debe tener @");
    } else if (mail.indexOf(".", validarArroba) === -1)
    {
        $(this).css({
            "outline": "solid 2px tomato"
        });
        $(this).next("p").text("Su mail no es correcto debe tener punto");
    } else if (mail.charAt(mail.indexOf(".", validarArroba) + 1) === "")
    {
        $(this).css({
            "outline": "solid 2px tomato"
        });
        $(this).next("p").text("Su mail debe contener texto luego del punto");
    } else {
        $(this).css("outline", "solid 2px lawngreen");
        $(this).next("p").html("");
    }
}

function validarNoVacio()
{
    var idInput = $(this).val();
    if (idInput === "")
    {
        $(this).css({
            "outline": "solid 2px tomato"

        });
        $(this).next("p").text("No puede estar vacio");
    } else {
        $(this).css("outline", "solid 2px lawngreen");
        $(this).next("p").html("");
    }
}


function enviarMail()
{
    if (validarMail === true && validarDireccion === true && validarNombre === true)
    {
        $("form").submit();
    }
}

function hacerAlgo()
{
    var unTexto = $("#texto").val();

    var cantidad = unTexto.length;

    var letra = unTexto.charAt(2);

    var posicionArroba = unTexto.indexOf("@");

    if (posicionArroba === -1)
    {
        $("#mensaje").text("Su mail no es correcto debe tener @");
        $("#mensaje").css("color", "red");
    } else if (unTexto.indexOf(".", posicionArroba) === -1)
    {
        $("#mensaje").text("Su mail no es correcto debe tener punto");
        $("#mensaje").css("color", "red");
    } else if (unTexto.charAt(unTexto.indexOf(".", posicionArroba) + 1) === "")
    {
        $("#mensaje").text("Su mail debe contener texto luego del punto");
        $("#mensaje").css("color", "red");
    } else {
        $("#mensaje").text("Su mail es correcto");
        $("#mensaje").css("color", "green");
        validarMail = true;
    }
//    $("#mensaje").text("El texto tiene " + cantidad + " de letras");

}