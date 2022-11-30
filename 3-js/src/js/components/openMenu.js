function openMenu() {
  const menuButton = document.getElementById('menu-button');
  menuButton.addEventListener('click', function handleClick(event) {
    event.target.nextElementSibling.classList.toggle('-active');
  });
}
export { openMenu };