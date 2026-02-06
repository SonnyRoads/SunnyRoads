const stage = document.querySelector(".stage");
const startBtn = document.getElementById("startBtn");
const bgVideo = document.getElementById("bgVideo");

function start() {
  stage.classList.add("is-started");

  // Attempt to play video (GitHub Pages requires user gesture; button click qualifies)
  if (bgVideo) {
    bgVideo.muted = true; // keep autoplay-friendly
    const p = bgVideo.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }
}

startBtn.addEventListener("click", start);

// Optional: also allow Enter/Space when focused (button already supports this)
