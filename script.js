console.log("Javascript is working");
const columns = document.querySelectorAll(".column");


let futureProjects = [];
let activeProjects = [];
let completedProjects = [];

columns.forEach(column => {
  const title = column.querySelector("h2, h3")?.innerText; // get heading text
  const cards = column.querySelectorAll(".card");

  const projectList = Array.from(cards).map(card => card.innerText);

  if (title.includes("FUTURE")) {
    futureProjects = projectList;
  } else if (title.includes("ACTIVE")) {
    activeProjects = projectList;
  } else if (title.includes("COMPLETED")) {
    completedProjects = projectList;
  }
});

console.log("Future Projects:", futureProjects);
console.log("Active Projects:", activeProjects);
console.log("Completed Projects:", completedProjects);
