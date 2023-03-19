function addToCart() {
  let carts = document.querySelectorAll(".cart");
  let counter = 0;
  carts.forEach((el) => {
    el.addEventListener("click", () => {
      counter++;
      document.querySelector(".count--cart").innerHTML = counter;
    });
  });
}
export default addToCart;
