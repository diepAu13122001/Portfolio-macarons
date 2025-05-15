class Project {
  constructor(
    id,
    name,
    overview,
    system = "Monolothic",
    full_desc,
    imgs = [
      "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
      "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
      "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
    ],
    skills = [],
    role = "solo project",
    features = [],
    created_at,
    live_demo_link,
    code_link = "https://github.com/diepAu13122001"
  ) {
    this.id = id;
    this.name = name;
    this.overview = overview;
    this.system = system;
    this.full_desc = full_desc;
    this.imgs = imgs;
    this.skills = skills;
    this.role = role;
    this.features = features;
    this.created_at = created_at;
    this.live_demo_link = live_demo_link;
    this.code_link = code_link;
  }

  getShortInfo() {
    return { name: this.name, ava: this.imgs[0], overview: this.overview };
  }

  createHTMLCard() {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    const shortInfo = this.getShortInfo();
    projectCard.innerHTML = `
              <div class="project-ava">
                <img
                  src="${shortInfo.ava}"
                  alt="${shortInfo.name}"
                />
              </div>
              <div class="project-info">
                <div class="h3 project-name">${shortInfo.name}</div>
                <hr class="line line-l" />
                <div class="project-desc">
                  ${shortInfo.overview}
                </div>
            </div>`;

    // bat su kien click
    projectCard.addEventListener("click", () => {
      this.showProjectDetails();
    });

    return projectCard;
  }

  showProjectDetails() {
    const projectPopup = document.getElementById("project-popup");
    projectPopup.className = "popup";
    projectPopup.querySelector("#project-name").innerText = this.name;
    projectPopup.querySelector("#project-created-at").innerText =
      this.created_at;
    projectPopup.querySelector("#project-overview").innerText = this.overview;
    projectPopup.querySelector("#project-system").innerText = this.system;
    projectPopup.querySelector("#project-role").innerText = this.role;
    projectPopup.querySelector("#project-live-demo-link").href =
      this.live_demo_link;
    projectPopup.querySelector("#project-code-link").href = this.code_link;
    projectPopup.querySelector("#project-skills").innerHTML = this.skills
      .map((skill) => `<div class="tag">${skill}</div>`)
      .join(" ");
    projectPopup.querySelector("#project-features").innerHTML = this.features
      .map((func) => `<li>${func}</li>`)
      .join(" ");
  }
}

function addIdInURL(id, url) {
  // kiem tra neu url khong co param id
  if (url.includes("?id=")) {
    // xoa param id
    url = url.split("?id=")[0] + `?id=${id}`;
  } else {
    // them param id
    url += `?id=${id}`;
  }
  console.log(url);
  return url;
}

const project1 = new Project(
  1,
  "Personal Portfolio",
  "A web portfolio showcasing my work and skills.",
  "Monolothic",
  "Built using HTML, CSS, and JS, this project displays my projects, resume, and contact info.",
  undefined,
  ["HTML", "CSS", "JavaScript"],
  "solo project",
  ["Responsive design", "Smooth scrolling", "Contact form"],
  "2024-12-01",
  "https://myportfolio.example.com",
  "https://github.com/diepAu13122001/portfolio"
);

const project2 = new Project(
  2,
  "Task Manager App",
  "A simple to-do list app with a clean UI.",
  "Monolothic",
  "Allows users to add, delete, and mark tasks as completed. Stored in local storage.",
  [
    "https://lienquan.garena.vn/wp-content/uploads/2024/05/ae1b08764831edbdba17445d4963253c6117951c53e421.png",
  ],
  ["React", "CSS"],
  "solo project",
  ["Task CRUD", "Dark mode", "Local storage"],
  "2025-01-15",
  "https://taskapp.example.com",
  "https://github.com/diepAu13122001/task-manager"
);

const project3 = new Project(
  3,
  "Blog Platform",
  "A blogging site where users can write and share posts.",
  "Microservices",
  "Includes user auth, markdown editor, and a comment system. Backend built with Node.js.",
  undefined,
  ["Node.js", "Express", "MongoDB", "React"],
  "solo project",
  ["User login", "Post editor", "Comment section"],
  "2025-03-10",
  "https://myblog.example.com",
  "https://github.com/diepAu13122001/blog-platform"
);

const project4 = new Project(
  4,
  "Weather Dashboard",
  "Displays current weather and forecast based on location.",
  "Monolothic",
  "Uses OpenWeatherMap API to fetch data and update the UI dynamically.",
  undefined,
  ["JavaScript", "API", "Bootstrap"],
  "solo project",
  ["Live weather", "5-day forecast", "Geolocation"],
  "2024-11-22",
  "https://weather.example.com",
  "https://github.com/diepAu13122001/weather-dashboard"
);

const project5 = new Project(
  5,
  "E-commerce Mockup",
  "A basic e-commerce frontend with product listings and cart functionality.",
  "Monolothic",
  "Designed for learning React state management and component structure.",
  [
    "https://lienquan.garena.vn/wp-content/uploads/2024/05/ae1b08764831edbdba17445d4963253c6117951c53e421.png",
  ],
  ["React", "CSS", "Fake API"],
  "solo project",
  ["Product cards", "Shopping cart", "Filter & sort"],
  "2025-02-18",
  "https://shopmock.example.com",
  "https://github.com/diepAu13122001/ecommerce-mockup"
);

// render on the page index ----------------------------------
const projects = document.getElementById("projects");

projects.appendChild(project1.createHTMLCard());
projects.appendChild(project2.createHTMLCard());
projects.appendChild(project3.createHTMLCard());
projects.appendChild(project4.createHTMLCard());
projects.appendChild(project5.createHTMLCard());

projects.addEventListener("wheel", (e) => {
  e.preventDefault(); // Prevent default vertical scroll
  projects.scrollLeft += e.deltaY; // Scroll horizontally instead
});

// popup actions ------------------------------------------
const closePopupBtn = document.getElementById("close-popup-btn");
closePopupBtn.addEventListener("click", () => {
  const projectPopup = document.getElementById("project-popup");
  projectPopup.className = "hide";
});
