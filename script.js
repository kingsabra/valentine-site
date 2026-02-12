document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const btnRow = document.getElementById("btnRow");
  const result = document.getElementById("result");
  const title = document.getElementById("title");
  const card = document.getElementById("card");
  const yesVideo = document.getElementById("yesVideo");
  const videoFallback = document.querySelector(".videoFallback");

  // If any element is missing, don't crash—just stop.
  if (!yesBtn || !noBtn || !btnRow || !result || !title || !card) {
    console.error("Missing required elements. Check IDs in index.html.");
    return;
  }

  let noIsAbsolute = false;

  function moveNoButton() {
    const area = btnRow.getBoundingClientRect();
    const btn = noBtn.getBoundingClientRect();

    // If layout isn't ready, skip.
    if (area.width === 0 || area.height === 0) return;

    if (!noIsAbsolute) {
      noIsAbsolute = true;
      noBtn.style.position = "absolute";
      // start from its current spot so it doesn't jump weirdly
      noBtn.style.left = "0px";
      noBtn.style.top = "0px";
    }

    const padding = 6;
    const maxLeft = Math.max(padding, area.width - btn.width - padding);
    const maxTop  = Math.max(padding, area.height - btn.height - padding);

    const left = Math.floor(padding + Math.random() * (maxLeft - padding));
    const top  = Math.floor(padding + Math.random() * (maxTop - padding));

    noBtn.style.left = `${left}px`;
    noBtn.style.top = `${top}px`;
  }

  // Desktop hover
  noBtn.addEventListener("mouseenter", moveNoButton);

  // Click + touch (mobile)
  noBtn.addEventListener("click", (e) => { e.preventDefault(); moveNoButton(); });
  noBtn.addEventListener("pointerdown", (e) => { e.preventDefault(); moveNoButton(); });

  yesBtn.addEventListener("click", () => {
    title.textContent = "Ro7y Men Gowa we 7ayaty Kolaha";
    card.classList.add("expanded");
    btnRow.hidden = true;
    result.hidden = false;

    // If video fails to load, show helper text
    if (yesVideo) {
      yesVideo.addEventListener("error", () => {
        if (videoFallback) videoFallback.style.display = "block";
      }, { once: true });
    }
  });
});
