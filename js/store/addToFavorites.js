function addToFavorites() {
  let hearts = document.querySelectorAll(".fa-heart");
  let options = document.querySelectorAll(".wrapper__cards__card--options");
  let isFilled = false;
  hearts.forEach((elem) => {
    elem.addEventListener("click", () => {
      if (!isFilled) {
        elem.style = `color: #e7bb42`;
        options.style = `opacity: 1; `;
        isFilled = true;
      } else {
        elem.style = `color: #49584f`;
        // options.style = `opacity: 0; `;
        isFilled = false;
      }
    });
  });
}
export default addToFavorites;
