export default function() {
  var header = document.getElementById("navApp");
  var main = document.getElementById("main");
  var hidden = document.getElementById("hidDiv");
  var sticky = header.offsetTop;

  if ( window.pageYOffset > sticky ) {
    hidden.classList.add("positionFixed2");
    header.classList.add("sticky");
    main.classList.add("positionFixed");  
  } else {
    hidden.classList.remove("positionFixed2");
    header.classList.remove("sticky");
    main.classList.remove("positionFixed");
  }
}
