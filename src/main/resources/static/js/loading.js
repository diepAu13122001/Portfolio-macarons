window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader-wrapper").style.opacity = "0";
    document.querySelector(".loader-wrapper").style.display = "none";
    setTimeout(() => {
      document.querySelector(".loader-wrapper").style.opacity = "none";
    }, 500);
  }, 2000);
});
