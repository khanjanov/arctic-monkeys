function player() {
  let player = document.querySelector(".wrapper__content__player");
  let playBtn = document.querySelector("#playBtn");
  let disc = document.querySelector("#disc");
  let progress = document.getElementById("progress");
  let lyrics = document.querySelector(".wrapper__content__player--lyrics");
  let wallpaper = document.querySelector(
    ".wrapper__content__player--wallpaper"
  );
  function play() {
    player.classList.add("play");
    playBtn.classList.add("fa-pause");
    playBtn.classList.remove("fa-play");
    disc.style = `animation-play-state: running;`;
    lyrics.style = `visibility : visible`;
    wallpaper.style = `display : none`;
    audio.play();
  }

  function pause() {
    player.classList.remove("play");
    playBtn.classList.add("fa-play");
    playBtn.classList.remove("fa-pause");
    disc.style = `animation-play-state: paused;`;
    lyrics.style = `visibility : hidden`;
    wallpaper.style = `display : flex`;
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
  let rangeVolume = document.querySelector("#rngVolume");
  let ad = document.querySelector("#audio");
  rangeVolume.addEventListener("change", () => {
    var vol = rangeVolume.value;
    ad.volume = vol;
  });
}
export default player;
