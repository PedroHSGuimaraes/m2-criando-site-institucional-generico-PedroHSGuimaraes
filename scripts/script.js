/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function handModal() {
  const openModal = document.getElementById("open-modal");
  const modalContainer = document.getElementById("modal-container");

  openModal.addEventListener("click", () => {
    modalContainer.showModal()
    closeModal();
  });
 
}
function closeModal() {
  const closeModal = document.querySelector("#close-modal");
  const modalContainer = document.getElementById("modal-container");
  closeModal.addEventListener("click", () => {
    modalContainer.close();
  });

}
handModal();
