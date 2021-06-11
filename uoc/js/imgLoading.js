/* Incorporación dinámica de la biblioteca externa loading en claso de incompatibilidad de navegador */
export default function() {
    if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img.lazyload");
    images.forEach(img => {
        img.src = img.dataset.src;
      });
    } else {
    // Importamos la libreria `lazysizes`
    let script = document.createElement("script");
    script.async = true;
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js";
    document.body.appendChild(script);
    }
  }