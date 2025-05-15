document.addEventListener("DOMContentLoaded", () => {
  const intro = document.querySelector(".full-intro");

  intro.addEventListener("mousedown", (e) => {
    if (
      !(
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.tagName === "I"
      )
    ) {
      intro.classList.toggle("left");
      intro.style.transition = "all 1.5s ease-in-out";
      intro.style.width = intro.classList.contains("left") ? "300px" : "90%";
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target !== intro) {
      intro.classList.add("left");
      intro.style.transition = "all 1.5s ease-in-out";
      intro.style.width = "300px";
    }
  });
});


