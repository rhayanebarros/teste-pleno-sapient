function modal() {
  const modal = document.querySelector(".modal-wiki");
  const trigger = document.querySelector(".button-modal");
  const closeButton = document.querySelector(".close-modal");
  const overlayBody = document.querySelector("body");

  function toggleModal() {
    modal.classList.toggle("-active");
    overlayBody.classList.toggle("-overlay");
  }

  trigger.addEventListener("click", toggleModal);
  closeButton.addEventListener("click", toggleModal);  
}
export { modal };