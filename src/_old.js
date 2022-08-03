import "./styles/main.scss"

const add_project_button = document.getElementById("add_project_button");
const add_project_form = document.getElementById("add_project_form");
const left_side = document.getElementById("left_side");

let projects = [];
class Project {
    constructor(project_name) {
        this.name = project_name;
    }
}

function show_projects(project_name) {
    projects.forEach( () => {
        let project_para = document.createElement("p");
        project_para.innerText = project_name.value;
        left_side.appendChild(project_para);
        console.log(project_para)
    })
}

function reset_form() {
    add_project_name = "";
}

add_project_button.addEventListener("click", () => {
    add_project_form.classList.toggle("hidden");
})

const add_project_submit = document.getElementById("add_project_submit");
let add_project_name = document.getElementById("project_name");

add_project_submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(add_project_name.value != "") {
        console.log("works");
        
        let add_project = new Project(add_project_name.value);
        projects.push(add_project);
        show_projects(add_project_name);
        reset_form();
    }
})