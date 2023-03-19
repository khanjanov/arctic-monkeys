function slider() {
  let slides = document.querySelectorAll(
    ".wrapper__photos__carousel--carouselItem"
  );
  let prevBtn = document.querySelector(
    ".wrapper__photos__carousel--buttons--pre"
  );
  let nextBtn = document.querySelector(
    ".wrapper__photos__carousel--buttons--next"
  );
  let curSlide = 0;
  let lastSlide = slides.length - 1;
  
  let goToSlide = function (a) {
    slides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${(index - a) * 100}%)`)
    );
  };
  function prevSlide() {
    if (curSlide == 0) {
      curSlide = lastSlide;
    } else {
      curSlide--;
    }

    slides.forEach((slide, index) => {
      let falan = (index - curSlide) * 100;
      slide.style.transform = `translateX(${falan}%)`;
      slides[index].style.zIndex = index + 1;
    });
  }
  function nextSlide() {
    if (curSlide == lastSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    slides.forEach((slide, index) => {
      let falan = (index - curSlide) * 100;
      slide.style.transform = `translateX(${falan}%)`;
      slides[index].style.zIndex = slides.length - index;
    });
  }
  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
}
export default slider;
