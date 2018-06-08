//função muda os icones do menu de acordo com os valores na var. Check
function mudaMenu(tipo) {

    switch (check) {
        case 1:
            document.getElementById("logoHome").src = "_imagens/" + tipo + ".png";
            //função do interruptor luz
            var interruptor = false;

            $("#turn-on").click(function () {

                if (interruptor == false) {

                    $("body").css("background-image", "url('_imagens/back3-black.jpg')");
                    $("#turn-on").attr("src", "_imagens/btn2.png");
                    interruptor = true;

                } else {
                    $("body").css("background-image", "url('_imagens/back3.jpg')");
                    $("#turn-on").attr("src", "_imagens/btn.png");
                    interruptor = false;
                }
            });
            break;
        case 2:
            document.getElementById("logoEmCartaz").src = "../_imagens/" + tipo + ".png";
            break;
        case 3:
            document.getElementById("logoSeries").src = "../_imagens/" + tipo + ".png";
        case 4:
            document.getElementById("logoEmBreve").src = "../_imagens/" + tipo + ".png";
            break;
        case 5:
            document.getElementById("logoRecomend").src = "../_imagens/" + tipo + ".png";
        case 6:
            document.getElementById("logoNews").src = "../_imagens/" + tipo + ".png";
            break;
    }
}



$(document).ready(function () {
    
    //função do interruptor luz
    var interruptor = false;

    $("#turn-on").click(function () {

        if (interruptor == false && check != 1) {

            $("body").css("background-image", "url('../_imagens/back3-black.jpg')");
            $("#turn-on").attr("src", "../_imagens/btn2.png");
            interruptor = true;

        } else if(interruptor == true && check != 1) {
            $("body").css("background-image", "url('../_imagens/back3.jpg')");
            $("#turn-on").attr("src", "../_imagens/btn.png");
            interruptor = false;
        }
    });



$('.carousel').carousel({
    interval: 500
})





$("audio").prop("volume", 0.2);

//$("a").attr("target", "_self");

var tam = $(window).width();

if (tam < 800) {
    $("#corpo").removeAttr("style");
    $("#corpo").css("marginTop", "-0.2%");
    $("#menu").css("marginTop", "3%");
}


});