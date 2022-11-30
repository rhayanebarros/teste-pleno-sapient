function toggleList() {
  document.querySelectorAll('.item')
    .forEach(item => item.addEventListener('click', function(event) {
      event.target.parentElement.classList.toggle('-active');
    }));
}
export { toggleList };