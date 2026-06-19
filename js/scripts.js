/* LOADER */
window.addEventListener("load", () => {
  setTimeout(() => {
    const l = document.getElementById("loader");
    l.style.opacity = "0";
    setTimeout(() => (l.style.display = "none"), 500);
  }, 1400);
});

/* THEME */
const savedMode = localStorage.getItem("mode") || "light";
document.body.className = savedMode;
document.getElementById("mode-btn").addEventListener("click", () => {
  const next = document.body.classList.contains("light") ? "dark" : "light";
  document.body.className = next;
  localStorage.setItem("mode", next);
});

/* CAL AGE */
const ageField = document.getElementById("age-field");
const birthDate = new Date("2001-12-13");
function updateAge() {
  const now = new Date();
  let age = now.getFullYear() - birthDate.getFullYear();
  const m = now.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) age--;
  ageField.textContent = age;
}
updateAge();
setInterval(updateAge, 1000 * 60 * 60 * 24);

/* ACCENT */
const COLORS = {
  orange: "#82b01e",
  pink: "#ff748b",
  purple: "#b267e0",
  green: "#42b9bc",
};
const savedColor = localStorage.getItem("accent") || "orange";
setAccent(savedColor);
document.querySelectorAll(".color-dot").forEach((dot) => {
  dot.classList.toggle("active", dot.dataset.color === savedColor);
  dot.addEventListener("click", () => {
    setAccent(dot.dataset.color);
    localStorage.setItem("accent", dot.dataset.color);
    document
      .querySelectorAll(".color-dot")
      .forEach((d) => d.classList.toggle("active", d === dot));
  });
});
function setAccent(n) {
  document.documentElement.style.setProperty(
    "--accent",
    COLORS[n] || COLORS.orange,
  );
}

/* MOBILE MENU */
const sidebar = document.getElementById("sidebar");
document
  .getElementById("menu-toggle")
  .addEventListener("click", () => sidebar.classList.toggle("open"));
document.addEventListener("click", (e) => {
  if (
    !sidebar.contains(e.target) &&
    !document.getElementById("menu-toggle").contains(e.target)
  )
    sidebar.classList.remove("open");
});

/* NAV ACTIVE */
const mainEl = document.getElementById("main");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#nav-links li");
mainEl.addEventListener("scroll", () => {
  let cur = 0;
  sections.forEach((s, i) => {
    if (mainEl.scrollTop >= s.offsetTop - 80) cur = i;
  });
  navItems.forEach((li, i) => li.classList.toggle("active", i === cur));
});
navItems.forEach((li) => {
  li.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    sidebar.classList.remove("open");
    navItems.forEach((l) => l.classList.remove("active"));
    li.classList.add("active");
  });
});

/* ── PROJECTS DATA ── */
const PROJECTS = [
  {
    name: "Finance Tracker SaaS",
    overview:
      "Ứng dụng quản lý tài chính cá nhân với hệ thống 3 gói (Free/Plus/Premium), biểu đồ thu chi và plan gating bằng Spring AOP.",
    system: "Monolithic",
    role: "Solo project",
    date: "03/2026 - 05/2026",
    skills: [
      "React 18",
      "TypeScript",
      "Spring Boot 3",
      "PostgreSQL",
      "Docker",
      "Railway",
      "Vercel",
      "JWT",
    ],
    features: [
      "JWT auth với planId nhúng trong token — không query DB mỗi request",
      "3 gói Free/Plus/Premium: @RequiresPlan AOP (BE) + PlanGate component (FE)",
      "CRUD giao dịch + giới hạn 50/tháng cho Free, thực thi tầng Service",
      "Summary & chart API: filter tháng/quý/năm + Recharts visualization",
      "CI/CD: GitHub Actions → Railway (BE) + Vercel (FE)",
      "Unit tests: JUnit 5 + Mockito (BE) · Vitest (FE)",
    ],
    img: "./images/finance_tracker_v1.png",
    demo: "https://finance-tracker-fe-rho.vercel.app",
    code: "https://github.com/diepAu13122001/finance-tracker",
  },
  {
    name: "Personal Portfolio Macaron",
    overview:
      "Web portfolio giới thiệu bản thân, kỹ năng và dự án — xây dựng bằng Spring Boot + Thymeleaf.",
    system: "Monolithic",
    role: "Solo project",
    date: "2024",
    skills: [
      "Spring Boot",
      "Thymeleaf",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    features: [
      "Responsive design: desktop + mobile",
      "Dark / Light mode + accent color picker",
      "Popup chi tiết dự án với carousel ảnh",
      "Contact form tích hợp Web3Forms",
      "Deploy trên Render",
    ],
    img: "./images/profile_macaron.png",
    demo: "https://diepau13122001.github.io/Portfolio-macarons",
    code: "https://github.com/diepAu13122001/Portfolio-macarons",
  },
  {
    name: "Finance Tracker V2 (In Progress)",
    overview:
      "V2 với Categories system, Financial Goals + Freedom Number planner, PayOS payment integration, và AI text-to-transaction.",
    system: "Monolithic",
    role: "Solo project",
    date: "06/2026 — ongoing",
    skills: [
      "React 18",
      "TypeScript",
      "Spring Boot 3",
      "Claude AI API",
      "PayOS",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    features: [
      "Categories system: phân loại chi tiêu tự động (Plus tier feature)",
      "Financial Goals + Freedom Number planner cho tài chính dài hạn",
      "PayOS integration cho Premium subscription (thanh toán tiền theo dõi)",
      "AI text-to-transaction: nhập chi tiêu bằng tiếng Việt tự động phân loại",
      "Improved UI/UX: dashboard tối ưu, quick-add transaction",
      "Unit tests: JUnit 5 + Mockito (BE) · Vitest (FE)",
    ],
    img: "https://placehold.co/900x500/0d1b2a/ff748b?text=Finance+Tracker+V2",
    demo: "https://finance-tracker-fe-rho.vercel.app",
    code: "https://github.com/diepAu13122001/finance-tracker-be",
  },
  {
    name: "Workout Tracker",
    overview:
      "App theo dõi tập luyện gợi ý video YouTube phù hợp với mục tiêu giảm cân / tăng cơ.",
    system: "Monolithic",
    role: "Solo project",
    date: "2024",
    skills: ["HTML", "CSS", "JavaScript", "YouTube API", "Bootstrap"],
    features: [
      "Tạo danh sách bài tập cá nhân hoá theo mục tiêu",
      "Tích hợp YouTube Data API để load video workout",
      "Lưu thông tin và tiến trình vào localStorage",
      "Thuật toán tìm kiếm và sắp xếp bài tập",
    ],
    img: "./images/workout.png",
    demo: "https://diepAu13122001.github.io/Workout_Web",
    code: "https://github.com/diepAu13122001/Workout_Web",
  },
];

/* ── PAGINATION ── */
const PER_PAGE = 4;
let currentPage = 0;
const totalPages = Math.ceil(PROJECTS.length / PER_PAGE);
const listEl = document.getElementById("project-list");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const dotsEl = document.getElementById("page-dots");
const infoEl = document.getElementById("page-info");

for (let i = 0; i < totalPages; i++) {
  const d = document.createElement("button");
  d.className = "page-btn" + (i === 0 ? " active" : "");
  d.textContent = i + 1;
  d.addEventListener("click", () => goToPage(i));
  dotsEl.appendChild(d);
}

function renderPage(page) {
  const slice = PROJECTS.slice(page * PER_PAGE, (page + 1) * PER_PAGE);
  listEl.innerHTML = "";
  slice.forEach((proj) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <div class="card-img-wrap">
        <img class="card-img" src="${proj.img}" alt="${proj.name}" loading="lazy"/>
        <div class="card-tags">${proj.skills
          .slice(0, 4)
          .map((s) => `<div class="tag">${s}</div>`)
          .join("")}</div>
      </div>
      <div class="card-info">
        <div class="card-name">${proj.name}</div>
        <div class="card-desc">${proj.overview}</div>
      </div>`;
    card.addEventListener("click", () => openPopup(proj));
    listEl.appendChild(card);
  });
  prevBtn.disabled = page === 0;
  nextBtn.disabled = page === totalPages - 1;
  const start = page * PER_PAGE;
  infoEl.textContent = `${start + 1}–${Math.min(start + PER_PAGE, PROJECTS.length)} / ${PROJECTS.length}`;
  dotsEl
    .querySelectorAll(".page-btn")
    .forEach((b, i) => b.classList.toggle("active", i === page));
}
function goToPage(page) {
  currentPage = page;
  renderPage(page);
}
prevBtn.addEventListener("click", () => goToPage(currentPage - 1));
nextBtn.addEventListener("click", () => goToPage(currentPage + 1));
renderPage(0);

/* POPUP */
const overlay = document.getElementById("popup-overlay");
const closeBtn = document.getElementById("popup-close");
function openPopup(proj) {
  document.getElementById("popup-img").src = proj.img;
  document.getElementById("popup-title").textContent = proj.name;
  document.getElementById("popup-date").textContent = proj.date;
  document.getElementById("popup-overview").textContent = proj.overview;
  document.getElementById("popup-system").textContent = proj.system;
  document.getElementById("popup-role").textContent = proj.role;
  document.getElementById("popup-skills").innerHTML = proj.skills
    .map((s) => `<div class="tag">${s}</div>`)
    .join("");
  document.getElementById("popup-features").innerHTML = proj.features
    .map((f) => `<li>${f}</li>`)
    .join("");
  const demoLink = document.getElementById("popup-demo");
  demoLink.style.display = proj.demo ? "inline-flex" : "none";
  if (proj.demo) demoLink.href = proj.demo;
  document.getElementById("popup-code").href = proj.code;
  overlay.classList.remove("hide");
  document.body.style.overflow = "hidden";
}
function closePopup() {
  overlay.classList.add("hide");
  document.body.style.overflow = "";
}
closeBtn.addEventListener("click", closePopup);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closePopup();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closePopup();
});
