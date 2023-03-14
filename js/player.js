function player() {
  let player = document.querySelector(".wrapper__content__player");
  let playBtn = document.querySelector("#playBtn");
  let disc = document.querySelector("#disc");
  function play() {
    player.classList.add("play");
    playBtn.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");
    disc.style = `animation-play-state: running;`;
    audio.play();
  }

  function pause() {
    player.classList.remove("play");
    playBtn.classList.add("fa-play");
    playBtn.classList.remove("fa-pause");
    disc.style = `animation-play-state: paused;`;
    audio.pause();
  }
  playBtn.addEventListener("click", () => {
    let isPlaying = player.classList.contains("play");
    isPlaying ? pause() : play();
  });
}
export default player;
