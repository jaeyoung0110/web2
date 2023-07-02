const openModal = () => {
  document.querySelector(".modal").classList.remove("hidden");
};

const closeModal = () => {
  document.querySelector(".modal").classList.add("hidden");
};

document.querySelector(".modalOpenBtn").addEventListener("click", openModal);
document.querySelector(".modalCloseBtn").addEventListener("click", closeModal);
