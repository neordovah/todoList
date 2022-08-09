import "./styles/main.scss"

let folderList = [];

class Folder {
    constructor(title) {
        this.title = title.value;
        this.todos = [];

      //  folderList.push(this);
    }
}

(() => {

/*function removeFolder(remove_folder_btn) {
    let id = remove_folder_btn.id;
    let folders_div = document.querySelectorAll(".folder");
    for(let i = 0; i < folders_div.length; i++) {
        if(i === id) {
            left_panel.removeChild(folders_div[i]);
        }
        folderList.splice(i, 1);
    }
    
}

function redoID() {
    let folders_div = document.querySelectorAll(".folder");
    for(let i = 0; i < folders_div.length; i++) {

        console.log(folders_div[i]);
        console.log(folderList);

        folders_div[i].id = i;
        folderList[i].id = i;
    }
}*/

const folders_div = document.getElementById("folders");
const left_panel = document.getElementById("left_panel");
function showFolder() {
    left_panel.appendChild(folders_div);
    let folder_div = document.createElement("div");
    folder_div.classList.add("folder");
    folders_div.appendChild(folder_div);
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


    let remove_folders_btn = document.querySelectorAll(".folder_remove");
    remove_folders_btn.forEach(remove_folder_btn => {
        remove_folder_btn.addEventListener("click", () => {
            /*if(remove_folder_btn.id == folder_div.id) {
                removeFolder(remove_folder_btn);
                redoID();} */

            //console.log(folderList.filter(e => e.title !== remove_folder_btn.parentElement.parentElement.innerText))
            folderList = folderList.filter(e => e.title !== remove_folder_btn.parentElement.parentElement.innerText);
            remove_folder_btn.parentElement.parentElement.remove();
            
        })
        
    })  
    console.log(folderList);
}

const add_folder = document.getElementById("folder_submit");
let title = document.getElementById("folder_title");
add_folder.addEventListener("click", (e) => {
    if(title.value != "") {
        e.preventDefault();
        folderList.push(new Folder(title));
        title.value = "";
        showFolder(); 
    }
})

})();

/*function deleteFolder() {
    
}*/
/*let remove_folders;
const deleteFolder1 = (e) => {
    e.parentElement.parentElement.remove();
}
remove_folders.forEach(remove_folder => {
    console.log("b")
    remove_folder.addEventListener("click", deleteFolder1);
})*/





//const add_task = document.getElementById("task_submit");