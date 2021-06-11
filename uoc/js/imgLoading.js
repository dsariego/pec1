/* Incorporación dinámica de la biblioteca externa loading en claso de incompatibilidad de navegador */
export default function() {
    if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img.lazyload");
    images.forEach(img => {
        img.src = img.dataset.src;
      });
    } else {
    // Importamos la libreria `lazysizes`
    const lazySizesLib = await import('/lazysizes.min.js');
    // Se inicia lazysizes
    lazySizes.init(); 
    }
  }