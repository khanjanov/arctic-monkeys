function addToCart() {
  let carts = document.querySelectorAll(".cart");
  let mainCart = document.querySelector(".wrapper__cart");
  let counter = 0;
  // let isEmpty = true;
  carts.forEach((el) => {
    el.addEventListener("click", () => {
      counter++;
      mainCart.insertAdjacentHTML(
        "afterend",
        `<div class="wrapper__cart__after">${counter}</div>`
      );

      // document.querySelector(".wrapper__cart__after").remove();
      // mainCart.insertAdjacentHTML(
      //   "afterend",
      //   `<div class="wrapper__cart__after">${counter}</div>`
      // );
      // isEmpty = true;
    });
  });
}
export default addToCart;
