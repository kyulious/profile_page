const home = document.getElementById("home");
const resume = document.getElementById("resume");
const projects = document.getElementById("projects");
const git = document.getElementById("git");

home.addEventListener('click', ()=>{
    alert("home");  
})
home.addEventListener('mouseover', ()=>{
    home.style.cursor="pointer";
})

resume.addEventListener('click', ()=>{
    window.open("https://www.linkedin.com/in/kyuli-kim-0a41b320b/");
})
resume.addEventListener('mouseover', ()=>{
    resume.style.cursor="pointer";
})
projects.addEventListener('click', ()=>{
    alert('projects');
})
projects.addEventListener('mouseover', ()=>{
    projects.style.cursor="pointer";
})

git.addEventListener('click', ()=>{
    window.open("https://github.com/kyulious")
})
git.addEventListener('mouseover', ()=>{
    git.style.cursor="pointer";
})