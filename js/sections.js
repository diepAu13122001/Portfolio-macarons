// mac dinh se la about
if (!location.href.split("#")[1])
  document.location.href = "../index.html#about";
//  xu ly phan click link => hien thi section tuong ung
const sectionTitle = document.querySelector("#header-title");
const navLinks = document.querySelector(".nav-links");
const sections = document.querySelectorAll("section");

const hash_list = [
  { hash: "about", name: "About me" },
  { hash: "skills", name: "Techincal Skills" },
  { hash: "projects", name: "Projects" },
  { hash: "resume", name: "Resume" },
  { hash: "contact", name: "Contact me" },
];

function createNavItem(hash, name, isActive = false) {
  if (isActive) document.querySelector(`#${hash}`).className = hash;
  else document.querySelector(`#${hash}`).className = "hide";

  const li = document.createElement("li");
  li.className = "h3" + (isActive ? " active" : "");

  const a = document.createElement("a");
  a.setAttribute("draggable", "false");
  a.href = `#${hash}`;
  a.textContent = name;

  // bat su kien khi click
  a.addEventListener("click", function (e) {
    removeProjectDetailsSection(location.href);

    sectionTitle.textContent = name;
    navLinks
      .querySelectorAll("li")
      .forEach((item) => item.classList.remove("active"));

    li.classList.add("active");

    sections.forEach((sec) => {
      if (sec.id == hash) {
        sec.className = hash;
        console.log(sec.className, hash);
      } else sec.className = "hide";
    });
  });

  li.appendChild(a);
  return li;
}

document.addEventListener("DOMContentLoaded", function () {
  const currentHash = cutHashInURL(window.location.href);
  sectionTitle.textContent = hash_list.find(
    (obj) => obj.hash == currentHash
  ).name;
  hash_list.forEach((link) => {
    // load nav tuong ung vao
    navLinks.appendChild(
      createNavItem(link.hash, link.name, link.hash === currentHash)
    );
  });
});

function cutHashInURL(fullURL) {
  return fullURL.split("#")[1].split("?")[0];
}

function removeProjectDetailsSection(url) {
  if (url.includes("?id=")) {
    console.log(url);
    const projectDetailsSection = document.getElementById("projectDetails");
    projectDetailsSection.remove();
  }
}
