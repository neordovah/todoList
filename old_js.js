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
//console.log(folderList)
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

if (localStorage.getItem('folders') === null) {
    folderList = [];
    //console.log(folderList)
  } else {
    const foldersFromStorage = JSON.parse(localStorage.getItem('folders'));
    folderList = foldersFromStorage;
    //console.log(folderList)
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
    if(folderList[folderList.length-1].title.split("").length > 12) {
        folder_btn.innerText = folder.title.slice(0, 12) + "...";
    }
    else {
        folder_btn.innerText = folder.title;
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
            localStorage.clear();
            localStorage.setItem('folders', JSON.stringify(folderList));
        })
        
    })  
    //console.log(folderList);
    //let i = 0;
    let toggle2 = 1;
    let toggle = 1;
    let value = "";
    let edit_folders_btn = document.querySelectorAll(".folder_edit");
    //edit_folders_btn.forEach(edit_folder_btn => {
        edit_folder_btn.addEventListener("click", (e) => {
            //if(edit_folder_btn.parentElement.parentElement.firstChild.innerText == edit_folders_btn.indexOf(edit_folder_btn))
            //if(toggle2 == 1) {
             //   toggle2 = 0;
            e.preventDefault();
           // i++; console.log(i)
            //console.log(edit_folders_btn.parentElement.parentElement)
            let edit_input = document.createElement("input");
            edit_input.type = "text";
            //console.log(edit_folder_btn.style.backgroundImage);
            //if(edit_folder_btn.style.backgroundImage == 'url("../src/img/edit.svg")') {
                if(toggle == 1)  {
                console.log(e.target)
                edit_input.value = edit_folder_btn.parentElement.parentElement.firstChild.innerText;
                value = edit_input.value;
                edit_folder_btn.parentElement.parentElement.firstChild.innerText = "";
                
                //console.log(edit_input.value)
                
                edit_folder_btn.parentElement.parentElement.firstChild.appendChild(edit_input);
                //edit_input.value = "1234567";
                
                edit_folder_btn.parentElement.firstChild.style.backgroundImage = "url('../src/img/done.svg')";
                //console.log("EDIT")
                toggle = 0;
                //console.log(edit_input.value);
                
                //console.log("-----value ", value)
                /*edit_folder_btn.parentElement.firstChild.remove();
                let edit_folder_confirm = document.createElement("button");
                let parent = edit_folder_btn.parentElement;
                parent.appendChild(edit_folder_confirm);
                edit_folder_confirm.style.backgroundImage = "url('../src/img/finished-30.svg')";*/
                /**/
                
        }
        else {//if(edit_folder_btn.style.backgroundImage == 'url("../src/img/done.svg")') {
            //if(edit_input != "") {
                //console.log(edit_input);
                e.preventDefault();
                //console.log(edit_input.value);
                console.log(edit_folder_btn.parentElement.parentElement.firstChild)
                edit_folder_btn.parentElement.parentElement.firstChild.innerText = value;
                console.log(value);
                edit_input.remove();
                //console.log("SAVE");
                edit_folder_btn.parentElement.firstChild.style.backgroundImage = "url('../src/img/edit.svg')";
                toggle = 1;
           //}
            
        }
   // }
        }) 
        //toggle2 = 1;
    //}) 
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




edit_btn.addEventListener("click", (e) => {
    //if(edit_folder_btn.parentElement.parentElement.firstChild.innerText == edit_folders_btn.indexOf(edit_folder_btn))
    //if(toggle2 == 1) {
     //   toggle2 = 0;
   // e.preventDefault();
   // i++; console.log(i)
    //console.log(edit_folders_btn.parentElement.parentElement)
    let edit_input = document.createElement("input");
    edit_input.type = "text";
    //console.log(edit_folder_btn.style.backgroundImage);
    //if(edit_folder_btn.style.backgroundImage == 'url("../src/img/edit.svg")') {
        if(toggle == 1)  {
        //console.log(e.target)
        edit_input.value = edit_btn.parentElement.parentElement.firstChild.innerText;
        edit_btn.parentElement.parentElement.firstChild.innerText = "";
        
        //console.log(edit_input.value)
        
        edit_btn.parentElement.parentElement.firstChild.appendChild(edit_input);
        //edit_input.value = "1234567";
        
        edit_btn.parentElement.firstChild.style.backgroundImage = "url('../src/img/done.svg')";
        //console.log("EDIT")
        toggle = 0;
        //console.log(edit_input.value);
        value = edit_input.value;
        console.log(value)
        //console.log("-----value ", value)
        /*edit_folder_btn.parentElement.firstChild.remove();
        let edit_folder_confirm = document.createElement("button");
        let parent = edit_folder_btn.parentElement;  
        parent.appendChild(edit_folder_confirm);             
        edit_folder_confirm.style.backgroundImage = "url('../src/img/finished-30.svg')";*/      
        /**/
        //console.log(edit_input.value)
}
else {//if(edit_folder_btn.style.backgroundImage == 'url("../src/img/done.svg")') {
    //if(edit_input != "") {
        //console.log(edit_input);
        e.preventDefault();
        //console.log(edit_input.value);
        console.log(edit_input.value);
        value = edit_input.value;
        //edit_btn.parentElement.parentElement.firstChild.innerText = value;
        //console.log(value);
        //console.log(edit_input.value);
        //edit_input.remove();
        //console.log("SAVE");
        edit_btn.parentElement.firstChild.style.backgroundImage = "url('../src/img/edit.svg')";
        toggle = 1;
   }  
        
//   }
// }
}) 
//toggle2 = 1;