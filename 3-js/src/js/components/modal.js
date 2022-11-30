function modal() {
  var modal = document.querySelector(".modal-wiki");
  var trigger = document.querySelector(".button-modal");
  var closeButton = document.querySelector(".close-modal");
  var overlayBody = document.querySelector("body");

  function toggleModal() {
    modal.classList.toggle("-active");
    overlayBody.classList.toggle("-overlay");
  }

  trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);
}
export { modal };