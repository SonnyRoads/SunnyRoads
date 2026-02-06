const stage = document.querySelector(".stage");
const startBtn = document.getElementById("startBtn");
const bgVideo = document.getElementById("bgVideo");

function start() {
  stage.classList.add("is-started");

  if (bgVideo) {
    bgVideo.muted = true;
    const p = bgVideo.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }
}

startBtn.addEventListener("click", start);

