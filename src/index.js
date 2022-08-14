import "./styles/main.scss"

let folderList = [];

class Folder {
    constructor(title) {
        this.title = title.value;
        this.todos = [];
    }
}

class Task {
    constructor(task_input, task_importance, task_date) {
        this.input = task_input.value;
        this.importance = task_importance.value; 
        this.date = task_date.value;
    }
}

(() => {

const folders_div = document.getElementById("folders");
const left_panel = document.getElementById("left_panel");
const right_panel = document.getElementById("right_panel");

if (localStorage.getItem('folders') === null) {
    folderList = [];
  }
else {
    const foldersFromStorage = JSON.parse(localStorage.getItem('folders'));
    folderList = foldersFromStorage;
    for(let i = 0; i < folderList.length; i++) {
        showFolder(folderList[i]);
    }
}


function showFolder(folder) {
    localStorage.clear();
    localStorage.setItem('folders', JSON.stringify(folderList));
    left_panel.appendChild(folders_div);
    let folder_div = document.createElement("div");
    folder_div.classList.add("folder");
    folders_div.appendChild(folder_div);
    let folder_btn = document.createElement("button");
    folder_btn.classList.add("folder_title");
    folder_div.appendChild(folder_btn);
    let btn_div = document.createElement("div");
    btn_div.id = "btn";
    folder_div.appendChild(btn_div);
    let edit_btn = document.createElement("button");
    edit_btn.classList.add("folder_edit");
    btn_div.appendChild(edit_btn);
    edit_btn.style.backgroundImage = "url('../src/img/edit.svg')";
    let remove_btn = document.createElement("button");
    remove_btn.classList.add("folder_remove");
    btn_div.appendChild(remove_btn);
    remove_btn.style.backgroundImage = "url('../src/img/remove.svg')";

    let edit_input = document.createElement("input");
    folder_btn.appendChild(edit_input);
    
    edit_input.value = folder.title;
    edit_input.readOnly = true;

    remove_btn.addEventListener("click", (e) => {
        let index = Array.from(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement);
        folderList = [].concat(folderList.slice(0, index), folderList.slice(index+1, folderList.length));
        remove_btn.parentElement.parentElement.remove();
        localStorage.clear();
        localStorage.setItem('folders', JSON.stringify(folderList));
    })
        
    let toggle = 1;
    let value; let checkh1 = 0;
    edit_btn.addEventListener("click", (e) => {
        let index = Array.from(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement);
        const body = document.getElementById("body")
        if(toggle == 1) {
            if(edit_input.value == document.getElementById("h1").innerText) {
                checkh1 = 1;
            }
            value = edit_input.value;
            edit_input.readOnly = false;
            edit_input.focus();
            edit_btn.parentElement.firstChild.style.backgroundImage = "url('../src/img/done.svg')";
            toggle = 0;

            body.style.pointerEvents = "none";
            edit_btn.style.pointerEvents = "auto";
            edit_input.style.pointerEvents = "auto";
        }
        else {
            edit_input.readOnly = true;
            edit_btn.parentElement.firstChild.style.backgroundImage = "url('../src/img/edit.svg')";
            toggle = 1;
            folderList[index].title = edit_input.value;
            localStorage.clear();
            localStorage.setItem('folders', JSON.stringify(folderList));
            if(checkh1 == 1) {
                const right_panel_h1 = document.getElementById("h1");
                right_panel_h1.innerText = edit_input.value;
                checkh1 = 0;
            }
            body.style.pointerEvents = "auto";
        }
    })

    edit_input.addEventListener("click", (e) => {
        if(edit_input.readOnly == true) {
            let index = Array.from(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement);
            const right_panel_h1 = document.getElementById("h1");
            right_panel_h1.innerText = edit_input.value;
            const tasks_div = document.getElementById("tasks");
            tasks_div.innerHTML = "";
            for(let i = 0; i < folderList[index].todos.length; i++) {
                let toggle = 0;
                let toggle2 = 1;
                let toggle3 = 0;
                showTask(index, i, toggle, toggle2, toggle3);
            }
        }
    })

    const folder_completed = document.getElementById("folder_completed");
    folder_completed.addEventListener("click", () => {
        const right_panel_h1 = document.getElementById("h1");
            right_panel_h1.innerText = "Completed";
    })
    
    const folder_notCompleted = document.getElementById("folder_notCompleted");
    folder_notCompleted.addEventListener("click", () => {
        const right_panel_h1 = document.getElementById("h1");
            right_panel_h1.innerText = "Past due";
    })
}
    

const add_folder = document.getElementById("folder_submit");
let title = document.getElementById("folder_title");
add_folder.addEventListener("click", (e) => {
    if(title.value != "") {
        e.preventDefault();
        folderList.push(new Folder(title));
        title.value = "";
        showFolder(folderList[folderList.length-1]); 
    }
})

function showTask(index, i, toggle, toggle2, toggle3) {
    console.log(index)
    console.log(i)
    const tasks_div = document.getElementById("tasks");
    const task_div = document.createElement("div");
    task_div.classList.add("task");
    tasks_div.appendChild(task_div);
    const task_checkbox = document.createElement("input");
    task_checkbox.type = "checkbox";
    task_div.appendChild(task_checkbox);
    task_checkbox.readOnly = true;
    const task_input = document.createElement("input");
    task_input.type = "text";
    task_div.appendChild(task_input);
    const task_importance = document.createElement("select");
    task_importance.setAttribute("disabled", "true");
    task_div.appendChild(task_importance);
    const importance_low = document.createElement("option");
    importance_low.value = "low";
    importance_low.innerText = "low";
    task_importance.appendChild(importance_low);
    const importance_medium = document.createElement("option");
    importance_medium.value = "medium";
    importance_medium.innerText = "medium";
    task_importance.appendChild(importance_medium);
    const importance_high = document.createElement("option");
    importance_high.value = "high";
    importance_high.innerText = "high";
    task_importance.appendChild(importance_high);
    const task_date = document.createElement("input");
    task_date.type = "date";
    task_div.appendChild(task_date);
    let btn_div = document.createElement("div");
    btn_div.id = "btn";
    task_div.appendChild(btn_div);
    let edit_btn = document.createElement("button");
    edit_btn.classList.add("task_edit");
    btn_div.appendChild(edit_btn);
    edit_btn.style.backgroundImage = "url('../src/img/done.svg')";
    let remove_btn = document.createElement("button");
    remove_btn.classList.add("task_remove");
    btn_div.appendChild(remove_btn);
    remove_btn.style.backgroundImage = "url('../src/img/remove.svg')";

    const body = document.getElementById("body");

    if(toggle3 == 0) {
        task_input.value = folderList[index].todos[i].input;
        task_importance.value = folderList[index].todos[i].importance;
        task_date.value = folderList[index].todos[i].date;
        console.log(folderList[index].todos[i].date)
        task_input.readOnly = true;
        task_importance.readOnly = true;
        task_date.readOnly = true;
        body.style.pointerEvents = "auto";
        edit_btn.style.backgroundImage = "url('../src/img/edit.svg')";
        toggle = 1;
    }
    else {
        body.style.pointerEvents = "none";
        task_div.style.pointerEvents = "auto";
        task_importance.removeAttribute("disabled");
        task_input.focus();
    }

    edit_btn.addEventListener("click", (e) => {
        if(toggle == 0) {
            e.preventDefault();
            toggle = 1;
            task_input.readOnly = true;
            task_importance.setAttribute("disabled", "true");
            task_date.readOnly = true;
            body.style.pointerEvents = "auto";
            edit_btn.style.backgroundImage = "url('../src/img/edit.svg')";
            for(let i = 0; i < folderList.length; i++) {
                if(document.getElementById("h1").innerHTML == folderList[i].title) {
                    if(toggle2 == 0) {
                       folderList[i].todos.push(new Task(task_input, task_importance, task_date));
                    }
                    else {
                        let index = Array.from(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement);
                        folderList[i].todos[index].input = task_input.value;
                        folderList[i].todos[index].importance = task_importance.value;
                        folderList[i].todos[index].date = task_date.value;
                    }
                }
            }
            localStorage.clear();
            localStorage.setItem('folders', JSON.stringify(folderList));
        }
        else {
            toggle = 0;
            task_input.readOnly = false;
            task_importance.removeAttribute("disabled");
            task_date.readOnly = false;
            edit_btn.style.backgroundImage = "url('../src/img/done.svg')";
            body.style.pointerEvents = "none";
            task_div.style.pointerEvents = "auto";
        }
    })

    remove_btn.addEventListener("click", (e) => {
        let index = Array.from(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement);
        for(let i = 0; i < folderList.length; i++) {
            if(document.getElementById("h1").innerHTML == folderList[i].title) {
                folderList[i].todos = [].concat(folderList[i].todos.slice(0, index), folderList[i].todos.slice(index+1, folderList[i].todos.length))
                remove_btn.parentElement.parentElement.remove();
                body.style.pointerEvents = "auto";
                localStorage.clear();
                localStorage.setItem('folders', JSON.stringify(folderList));
            }
        }
    })
}

const add_task_btn = document.getElementById("task_submit");
add_task_btn.addEventListener("click", () => {
    const right_panel_h1 = document.getElementById("h1");
    for(let i = 0; i < folderList.length; i++) {
        if(right_panel_h1.innerText == folderList[i].title) {
            showTask(0, 0, 0, 0, 1);
        }
    }
})

})();

