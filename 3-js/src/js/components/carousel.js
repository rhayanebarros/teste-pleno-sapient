function carousel() {
		const slider = document.querySelector(".carousel-slider");
		slider.style.overflow = 'hidden';

    var settings = {
      primeiraImg: function(){
        const elemento = document.querySelector(".carousel-slider .item:first-child");
        elemento.classList.add("ativo");
        elemento.style.display = 'inline-block';
      },

      slide: function(){
        const elemento = document.querySelector(".ativo");

        if(elemento.nextElementSibling){
          elemento.nextElementSibling.classList.add("ativo");
          elemento.nextElementSibling.style.display = 'inline-block';
          elemento.classList.remove("ativo");
          elemento.style.display = 'none';
        }else{
          elemento.classList.remove("ativo");
          elemento.style.display = 'none';
          settings.primeiraImg();
        }

      }
    }

    //chama o slide
    settings.primeiraImg();
    setInterval(settings.slide,4000);
}
export { carousel };