import "./styles/main.scss"

let folderList = [];

class Folder {
    constructor(title) {
        this.title = title.value;
        this.id = folderList.length;
        this.todos = [];

        folderList.push(this);
    }
}

const left_panel = document.getElementById("left_panel");
function showFolder() {
    let folder_div = document.createElement("div");
    folder_div.classList.add("folder");
    left_panel.appendChild(folder_div);
    let folder_btn = document.createElement("button");
    if(folderList[folderList.length-1].title.split("").length > 12) {
        folder_btn.innerText = folderList[folderList.length-1].title.slice(0, 12) + "...";
    }
    else {
        folder_btn.innerText = folderList[folderList.length-1].title;
    }
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
}

const add_folder = document.getElementById("folder_submit");
let title = document.getElementById("folder_title");
add_folder.addEventListener("click", (e) => {
    if(title.value != "") {
        e.preventDefault();
        new Folder(title);
        title.value = "";
        showFolder();
    }
})

//const add_task = document.getElementById("task_submit");