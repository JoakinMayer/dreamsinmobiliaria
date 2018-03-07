$(document).ready(iniciar);

var scroll;
function iniciar() {
    $(window).scroll(subir); 
    $("i").click(irArriba);
    $("#perso1").click(cambiarNegro);
    $("#perso2").click(cambiarVerde);
}
function cambiarNegro(){
    $("#descripcionEmpresa p:nth-of-type(3)").css("color","black");
}
function cambiarVerde(){
    $("#descripcionEmpresa p:nth-of-type(3)").css("color","#159d82");
}
function subir() {
    scroll = $(window).scrollTop();

    if (scroll >= 300)
    {
        $(".aparecer").css({
            "margin-top": "0px",
            "opacity": "1",
            "transition": "all 1s"
        });
    }
}

function irArriba()
{
    $("body").animate({
        "scrollTop": "0px"
    }, 1500);
}