const mode_btn = document.querySelector("#mode-btn");

if (localStorage.getItem("mode")) {
  document.body.className = localStorage.getItem("mode");
} else {
  document.body.className = "light";
  localStorage.setItem("mode", "light");
}

mode_btn.addEventListener("click", function (e) {
  const mode_userData = localStorage.getItem("mode");
  document.body.className = mode_userData == "light" ? "dark" : "light";
  localStorage.setItem("mode", document.body.className);
});

// color attended
// gan bien mac dinh cho color attended
let theme_local_storage = localStorage.getItem("attended-color");
console.log(theme_local_storage);

if (!theme_local_storage) {
  // mac dinh la mau nau
  theme_local_storage = "orange";
  localStorage.setItem("attended-color", theme_local_storage);
}
console.log(theme_local_storage);

document.documentElement.style.setProperty(
  "--current-attended-color",
  getComputedStyle(document.documentElement)
    .getPropertyValue(`--${theme_local_storage}`)
    .trim()
);

const color_attended_list = document
  .getElementById("color-list-btn")
  .querySelectorAll("li");

console.log(theme_local_storage);
setChoosedColor(theme_local_storage);

// load colors
color_attended_list.forEach((li) => {
  li.style.backgroundColor = getComputedStyle(document.documentElement)
    .getPropertyValue(`--${li.dataset.color}`)
    .trim();
  li.addEventListener("click", function () {
    setChoosedColor(li.dataset.color);
    // update local storage
    localStorage.setItem("attended-color", this.dataset.color);
    document.documentElement.style.setProperty(
      "--current-attended-color",
      this.style.backgroundColor
    );
  });
});

function setChoosedColor(color) {
  color_attended_list.forEach((el) => {
    console.log(el.dataset.color, color);
    if (el.dataset.color == color) el.classList.add("choosed");
    else el.classList.remove("choosed");
  });
}
