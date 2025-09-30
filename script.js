import { futureProjects, pendingProjects, completedProjects } from "./mockData.js";

// const futureProjects = require("./mockData").futureProjects;
// const pendingProjects = require("./mockData").pendingProjects;
// const completedProjects = require("./mockData").completedProjects;

const futureList = document.getElementById("future");
const completedList = document.getElementById("completed");
const tempArray=[]
for(let i=0;i<futureProjects.length;i++){
    // console.log(futureProjects[i])
    tempArray.push(
        `<li class="item">
            <span class="date">${futureProjects[i].date}</span>
            <div class="tags"></div>
            <div class="card">${futureProjects[i].description}</div>
        </li>
        `)
}
futureList.innerHTML=tempArray.join("")


const tempArrayCompleted=[]
for(let i=0;i<completedProjects.length;i++){
    tempArrayCompleted.push(
        `<li class="item">
            <span class="date">${completedProjects[i].date}</span>
            <div class="tags"></div>
            <div class="card">${completedProjects[i].description}</div>
        </li>
        `)
}
completedList.innerHTML=tempArrayCompleted.join("")