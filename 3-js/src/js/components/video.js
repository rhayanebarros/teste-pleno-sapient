function video() {
  const videoButton = document.querySelector('.video');
  videoButton.addEventListener('click', function handleClick(event) {
    event.target.offsetParent.firstElementChild.classList.toggle('-inactive');
  });
}
export { video };