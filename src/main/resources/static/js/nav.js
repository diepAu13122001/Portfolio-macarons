//----------------------------------------
// nut expand
function expandSlidebar(slidebarNav, expandBtn, closeBtn) {
  slidebarNav.classList.remove("close");
  slidebarNav.classList.add("expand");
  expandBtn.style.display = "none";
  closeBtn.style.display = "block";
}
//----------------------------------------
// nut close
function closeSlidebar(slidebarNav, expandBtn, closeBtn) {
  slidebarNav.classList.add("close");
  slidebarNav.classList.remove("expand");
  closeBtn.style.display = "none";
  expandBtn.style.display = "block";
}
//----------------------------------------
// scroll -> change active for nav links
function changeNavActiveWhenScrolling(linkList) {
  const scrollPosition = window.scrollY;
  const sectionHeight = document.querySelector("section").clientHeight;

  // Determine the index of the current section in view
  let currentIndex =
    Math.floor((scrollPosition + sectionHeight) / sectionHeight) - 1;
  if (currentIndex > linkList.length - 1) {
    currentIndex = linkList.length - 1;
  }

  linkList.forEach((link, index) => {
    if (index === currentIndex) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

//------------------------------------------
//  xu ly phan click link => hien thi section tuong ung
function addEventForLinks(linkList, slidebarNav, expandBtn, closeBtn) {
  linkList.forEach((link) => {
    link.addEventListener("click", function (e) {
      linkList.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      closeSlidebar(slidebarNav, expandBtn, closeBtn);
    });
  });
}
// -----------------------------------------
function removeProjectDetailsSection(url) {
  if (url.includes("?id=")) {
    const projectDetailsSection = document.getElementById("projectDetails");
    projectDetailsSection.remove();
  }
}

// ----------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const sectionTitle = document.querySelector("#header-title");
  const navLinkContainer = document.querySelector(".nav-links");
  const linkList = navLinkContainer.querySelectorAll("li.h3");
  const sections = document.querySelectorAll("section");
  const main = document.querySelector("main");
  const slidebarNav = document.querySelector(".full-intro");
  const expandNavBtn = document.querySelector("#expand-nav-btn");
  const closeNavBtn = document.querySelector("#close-nav-btn");

  this.location.href = "#about";

  // bat su kien nut dong - mo menu
  expandNavBtn.addEventListener("click", () => {
    expandSlidebar(slidebarNav, expandNavBtn, closeNavBtn);
  });
  closeNavBtn.addEventListener("click", () => {
    closeSlidebar(slidebarNav, expandNavBtn, closeNavBtn);
  });

  // bat su kien cho link
  addEventForLinks(linkList, slidebarNav, expandNavBtn, closeNavBtn);
  this.addEventListener("scroll", function () {
    changeNavActiveWhenScrolling(linkList);
  });
});
