document.addEventListener("DOMContentLoaded", function() {
    if ('loading' in HTMLImageElement.prototype) {
    // Si el navegador soporta lazy-load, tomamos todas las imágenes que tienen la clase
    // `lazyLoad`, obtenemos el valor de su atributo `data-src` y lo inyectamos en el `src`.
    const images = document.querySelectorAll("img.lazyLoad");
    images.forEach(img => {
        img.src = img.dataset.src;
    });
    } else {
    // Importamos dinámicamente la libreria `lazysizes`
    let script = document.createElement("script");
    script.async = true;
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js";
    document.body.appendChild(script);
    }
});