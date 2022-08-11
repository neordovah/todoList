import "./styles/main.scss"

let folderList = [];

class Folder {
    constructor(title) {
        this.title = title.value;
        this.todos = [];
    }
}

(() => {

const folders_div = document.getElementById("folders");
const left_panel = document.getElementById("left_panel");

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
        folderList = [].concat(folderList.slice(0, index), folderList.slice(index+1, folderList.length))
        remove_btn.parentElement.parentElement.remove();
        localStorage.clear();
        localStorage.setItem('folders', JSON.stringify(folderList));
    })
        
    let toggle = 1;
    let value;
    edit_btn.addEventListener("click", (e) => {
        let index = Array.from(e.target.parentElement.parentElement.parentElement.children).indexOf(e.target.parentElement.parentElement);
        if(toggle == 1) {
            value = edit_input.value;
            edit_input.readOnly = false;
            edit_input.focus();
            edit_btn.parentElement.firstChild.style.backgroundImage = "url('../src/img/done.svg')";
            toggle = 0;
        }
        else {
            edit_input.readOnly = true;
            edit_btn.parentElement.firstChild.style.backgroundImage = "url('../src/img/edit.svg')";
            toggle = 1;
            folderList[index].title = edit_input.value;
            localStorage.clear();
            localStorage.setItem('folders', JSON.stringify(folderList));
        }
    })

    /*left_panel.addEventListener("click", () => {
        const right_panel_h1 = document.getElementById("h1");
        right_panel_h1.innerText = "To do list";
        const tasks_div = document.getElementById("tasks");
        tasks_div.innerHTML = "";
    })*/

    edit_input.addEventListener("click", () => {
        if(edit_input.readOnly == true) {
            const right_panel_h1 = document.getElementById("h1");
            right_panel_h1.innerText = edit_input.value;
        }
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

//const add_task = document.getElementById("task_submit");


})();

