function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        taskList.appendChild(listItem);

        // Effacer le champ d'entrée
        taskInput.value = "";
    }
}