window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollPosition > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });




  function redireccionar(event, url) {
    if (event.which === 2 || event.button === 4) {
      window.open(url, '_blank');
    } else {
      window.location.href = url;
    }
  }


  function desplazar(elemento) {
    var destino = document.querySelector(elemento);
    destino.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }