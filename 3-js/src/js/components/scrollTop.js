function scrollTop() {
  const box = document.querySelector('.wrapper'),
  targetElm = document.querySelector('.content');

  document.querySelector('.button-modal').addEventListener('click', function(){
    scrollToElm( box, targetElm , 600 );   
  });

  function scrollToElm(container, elm, duration){
    const pos = getRelativePos(elm);
    scrollTo( container, pos.top , 2);
  }

  function getRelativePos(elm){
    let pPos = elm.parentNode.getBoundingClientRect();
    let cPos = elm.getBoundingClientRect();
    let pos = {};

    pos.top = cPos.top - pPos.top + elm.parentNode.scrollTop,
    pos.right = cPos.right - pPos.right,
    pos.bottom = cPos.bottom - pPos.bottom,
    pos.left = cPos.left - pPos.left;

    return pos;
  }
    
  function scrollTo(element, to, duration, onDone) {
    let start = element.scrollTop,
        change = to - start,
        startTime = performance.now(),
        val, now, elapsed, t;

    function animateScroll(){
      now = performance.now();
      elapsed = (now - startTime)/1000;
      t = (elapsed/duration);

      element.scrollTop = start + change * easeInOutQuad(t);

      if( t < 1 )
        window.requestAnimationFrame(animateScroll);
      else
        onDone && onDone();
    };

    animateScroll();
  }

  function easeInOutQuad(t){ return t<.5 ? 2*t*t : -1+(4-2*t)*t };
  
}
export { scrollTop };