document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("registerModal");
  const signUpButtons = document.querySelectorAll(".signUpButton"); // Кнопка в хедере
  const closeModalBtn = document.getElementById("closeModalBtn");

  function openModal() {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }

  signUpButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      openModal();
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function (e) {
      e.preventDefault();
      closeModal();
    });
  }

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});
