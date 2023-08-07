const typed = new Typed(".multiple-text", {
  strings: ["Coder", "Web Developer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1200,
  loop: true,
});

const skills = document.querySelector("ul.skills"),
  total_skills = skills.children.length;
document.documentElement.style.setProperty("--total-skill", total_skills);

for (let i = 0; i < total_skills; i++) {
  skills.appendChild(skills.children[i].cloneNode(true));
}
