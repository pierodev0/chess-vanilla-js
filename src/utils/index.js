export function resizeSquare() {
 const sizeHeader =  window.getComputedStyle(document.documentElement).getPropertyValue('--header-size').slice(0,2);

  const viewportWidth = window.visualViewport ? window.visualViewport.width : window.innerWidth;
  const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;

  // Si la altura es mayor que el ancho, usamos el ancho
  let size = viewportHeight > viewportWidth ? viewportWidth : viewportHeight;

  size = size - sizeHeader
console.log(sizeHeader)
  const square = document.getElementById('table');
  square.style.height = size + 'px';
  square.style.width = size + 'px';
}