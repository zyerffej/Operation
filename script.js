// script.js


const futureProjects = [
  { description: "Pick Color Trends", date: "4/21/2017" },
  { description: "Source Fabrics", date: "4/21/2017" },
  { description: "Manufacture clothing", date: "4/21/2017" },
  { description: "Confirm structural intergrity", date: "4/21/2017" },
  { description: "Manufacture mandibles", date: "4/21/2017" }
];

const pendingProjects = [
  { description: "Test fear factor", date: "4/20/2017" },
  { description: "Develop butoom samples", date: "4/21/2017" },
  { description: "Recall malfunctioning giraffes", date: "4/21/2017" },
  { description: "task task task task", date: "4/20/2017" },
  { description: "Perform user research on new stuffing", date: "4/20/2017" }
];

const completedProjects = [
  { description: "Research Trends", date: "4/19/2017" }
];


function renderProjects() {
  const futureCol = document.getElementById('future-projects');
  const completedCol = document.getElementById('completed-projects');
  const pendingCol = document.getElementById('pending-projects');

  if (futureCol) {
    futureCol.innerHTML = futureProjects.map(task =>
      `<li><div class="card">${task.description}</div><span class="date">${task.date}</span><div class="tags"></div></li>`
    ).join('');
  }
  if (pendingCol) {
    pendingCol.innerHTML = pendingProjects.map(task =>
      `<li><div class="card">${task.description}</div><span class="date">${task.date}</span><div class="tags"></div></li>`
    ).join('');
  }
  if (completedCol) {
    completedCol.innerHTML = completedProjects.map(task =>
      `<li><div class="card">${task.description}</div><span class="date">${task.date}</span><div class="tags"></div></li>`
    ).join('');
  }
}

document.addEventListener('DOMContentLoaded', renderProjects);
