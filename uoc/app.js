import "./js/dom.js";
import { myFunction } from "./js/menu.js";
import { ifLaziloading } from "./js/imgLoading";

/* MENÚ FLOTANTE Y ANEXADO A LA CABECERA */
window.onscroll = function() { 
    myFunction();
    ifLaziloading();
  };