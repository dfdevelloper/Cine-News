
  //função muda os icones do menu de acordo com os valores na var. Check
  function  mudaMenu(tipo) {

      switch (check) {
         case 1:
            document.getElementById("logoHome").src = "_imagens/" + tipo + ".png";
            break;
         case 2:
            document.getElementById("logoEmCartaz").src = "_imagens/" + tipo + ".png";
            break;
         case 3:
            document.getElementById("logoSeries").src = "_imagens/" + tipo + ".png";
         case 4:
            document.getElementById("logoEmBreve").src = "_imagens/" + tipo + ".png";
            break;
         case 5:
            document.getElementById("logoRecomend").src = "_imagens/" + tipo + ".png";
         case 6:
            document.getElementById("logoNews").src = "_imagens/" + tipo + ".png";
            break;
    }
}

