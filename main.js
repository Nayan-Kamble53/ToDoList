const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function Add() {
    if(inputBox.value === '') {
        alert("Please enter a task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = `<i class="fa-solid fa-trash"></i>`;
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTask();
} 

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTask();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveTask();
    }
}, false);


function saveTask() {
    localStorage.setItem("task", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("task");
}
showTask();