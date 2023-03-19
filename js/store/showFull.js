function showFull() {
  let eye = document.querySelectorAll(".fa-eye");
  eye.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.target.parentElement.parentElement.classList.toggle("showFull");
    });
  });
}
export default showFull;
