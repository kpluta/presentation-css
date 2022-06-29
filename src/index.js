const modalToggle = (modal) => {
  modal.classList.toggle("open");
};

(function () {
  const modalWrappers = document.querySelectorAll(".modal-wrapper");
  modalWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      modalToggle(wrapper);
    });
  });
})();
