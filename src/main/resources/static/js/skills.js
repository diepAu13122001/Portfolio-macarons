const skills = [
  {
    name: "Languages",
    items: ["Java", "JavaScript (ES6)", "Python"],
  },
  {
    name: "Frameworks",
    items: ["Spring", "ReactJS", "Node", "NextJS"],
  },
  {
    name: "Database",
    items: ["MySQL", "MS SQL", "SQL Lite", "MongoDB", "Firebase"],
  },
  {
    name: "Tools",
    items: [
      "VSCode",
      "Eclipse",
      "IntelliJ",
      "Figma",
      "Git & Github",
      "AWS",
      "Chrome DevTools",
      "Postman",
    ],
  },
];

const skill_list_container = document.getElementById("skills");
skills.forEach((skill) => {
  const skill_items_element = skill.items
    .map((item) => `<li class="p"><a href="?skill=${item}">${item}</a></li>`)
    .join("");
  skill_list_container.innerHTML += `
        <div class="skill">
            <div class="h3 skill-title">${skill.name}</div>
            <ul class="skill-items">
              ${skill_items_element}
            </ul>
          </div>
    `;
});
