function player() {
  let player = document.querySelector(".wrapper__content__player");
  let playBtn = document.querySelector("#playBtn");
  let disc = document.querySelector("#disc");
  let progress = document.getElementById("progress");
  let lyrics = document.querySelector(".wrapper__content__player--lyrics");
  function play() {
    player.classList.add("play");
    playBtn.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");
    disc.style = `animation-play-state: running;`;
    lyrics.style = `visibility : visible`;
    audio.play();
  }

  function pause() {
    player.classList.remove("play");
    playBtn.classList.add("fa-play");
    playBtn.classList.remove("fa-pause");
    disc.style = `animation-play-state: paused;`;
    lyrics.style = `visibility : hidden`;
    audio.pause();
  }
  playBtn.addEventListener("click", () => {
    let isPlaying = player.classList.contains("play");
    isPlaying ? pause() : play();
  });
  audio.addEventListener("timeupdate", updateProgress);

  function updateProgress(event) {
    const { currentTime, duration } = event.srcElement;
    let progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
  }
}
export default player;
