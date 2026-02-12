const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const btnRow = document.getElementById("btnRow");
const result = document.getElementById("result");
const title = document.getElementById("title");

let noIsAbsolute = false;

function moveNoButton() {
  const area = btnRow.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  // first time: switch to absolute so we can freely move it
  if (!noIsAbsolute) {
    noIsAbsolute = true;
    noBtn.style.position = "absolute";
  }

  const padding = 8;
  const maxLeft = area.width - btn.width - padding;
  const maxTop  = area.height - btn.height - padding;

  const left = Math.max(padding, Math.random() * maxLeft);
  const top  = Math.max(padding, Math.random() * maxTop);

  noBtn.style.left = `${left}px`;
  noBtn.style.top  = `${top}px`;
}

// Make it dodge on hover AND on click/tap
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (e) => { e.preventDefault(); moveNoButton(); });

// Yes -> reveal screen + your custom image
yesBtn.addEventListener("click", () => {
  title.textContent = "okayy 🥰";
  btnRow.hidden = true;
  result.hidden = false;
});
