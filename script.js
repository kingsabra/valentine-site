document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const btnRow = document.getElementById("btnRow");
  const result = document.getElementById("result");
  const title = document.getElementById("title");

  let noIsAbsolute = false;

  function moveNo() {
    const area = btnRow.getBoundingClientRect();
    const btn = noBtn.getBoundingClientRect();
    if (!area.width || !area.height) return;

    if (!noIsAbsolute) {
      noIsAbsolute = true;
      noBtn.style.position = "absolute";
    }

    const padding = 6;
    const left = Math.random() * (area.width - btn.width - padding);
    const top = Math.random() * (area.height - btn.height - padding);

    noBtn.style.left = `${Math.max(padding, left)}px`;
    noBtn.style.top = `${Math.max(padding, top)}px`;
  }

  noBtn.addEventListener("mouseenter", moveNo);
  noBtn.addEventListener("click", e => { e.preventDefault(); moveNo(); });
  noBtn.addEventListener("pointerdown", e => { e.preventDefault(); moveNo(); });

  yesBtn.addEventListener("click", () => {
    title.textContent = "Ro7y Men Gowa we 7ayaty Kolaha";
    btnRow.hidden = true;
    result.hidden = false;
  });
});