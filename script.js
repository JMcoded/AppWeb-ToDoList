document.getElementById("newTask").addEventListener("keydown", function(event) {
    if (event.key === "Enter") { 
        event.preventDefault();
        addTask();
    }
});

function addTask() {
    let input = document.getElementById("newTask");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("The field cannot be empty!");
    }
    else if(taskText.length >= 50){
        alert("You cannot exceed 50 characters!");
    }
    else{
        let list = document.getElementById("list");

        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("task-checkbox");

        li.innerHTML = `${checkbox.outerHTML} ${taskText} <button onclick="deleteTask(this)">❌</button>`;

        list.appendChild(li);
        input.value = "";
    }
}


function deleteTask(boton) {
    let task = boton.parentElement;
    task.remove();
}
