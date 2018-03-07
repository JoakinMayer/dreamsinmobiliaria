$(document).ready(iniciar);

var posicionDocumento;
var posicionCar;
var scroll;
function iniciar() {
    $(window).scroll(function () {
        scroll = $(window).scrollTop();

        if (scroll > 420)
        {
            $(".aparecer").css({
                "display":"block"
            });
                }
        else{
            $("#pasarAfijo").css({
                "display":"none"

            });
        }
    });
}
