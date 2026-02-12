const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const btnRow = document.getElementById("btnRow");
const result = document.getElementById("result");
const title = document.getElementById("title");
const card = document.getElementById("card");

let noIsAbsolute = false;

function moveNoButton() {
  const area = btnRow.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

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

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (e) => { e.preventDefault(); moveNoButton(); });

yesBtn.addEventListener("click", () => {
  // change text
  title.textContent = "Ro7y Men Gowa we 7ayaty Kolaha";

  // expand the white card
  card.classList.add("expanded");

  // show result
  btnRow.hidden = true;
  result.hidden = false;
});
