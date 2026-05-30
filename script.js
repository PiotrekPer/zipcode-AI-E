document.querySelectorAll(".flip-card").forEach(function (card) {
  function toggle() {
    var flipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", flipped ? "true" : "false");
  }
  card.addEventListener("click", toggle);
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
});

var notes = {
  for: "You leaned toward “good information.” Fair enough — just remember the person on the other card never agreed to be averaged.",
  against: "You leaned toward “unfair by proxy.” Fair enough — just remember the data really does carry signal that someone has to price.",
};
var noteEl = document.getElementById("meter-note");
document.querySelectorAll(".meter-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".meter-btn").forEach(function (b) {
      b.classList.remove("chosen");
    });
    btn.classList.add("chosen");
    noteEl.textContent = notes[btn.dataset.vote];
  });
});
