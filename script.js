//your JS code here. If required.
const song = document.querySelector(".song");
const play = document.querySelector(".play");
const video = document.querySelector(".video");
const timeDisplay = document.querySelector(".time-display");
const soundPicker = document.querySelector(".sound-picker");
const timeSelect = document.querySelectorAll("#time-select button");

let fakeDuration = 600;

// play / pause
play.addEventListener("click", () => {
  if (song.paused) {
    song.play();
    video.play();
    play.innerHTML = "❚❚";
  } else {
    song.pause();
    video.pause();
    play.innerHTML = "▶";
  }
});

// change sound + video
soundPicker.addEventListener("click", e => {
  const sound = e.target.getAttribute("data-sound");
  const videoSrc = e.target.getAttribute("data-video");
  if (!sound) return;

  song.src = sound;
  video.src = videoSrc;
