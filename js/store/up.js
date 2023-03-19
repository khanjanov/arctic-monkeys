function up() {
  let upBtn = document.querySelector("#up");
  upBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
}
export default up;
