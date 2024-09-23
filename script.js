// script.js

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskList = document.getElementById('taskList');

    // Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskText;

    // Add a complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = "Complete";
    completeButton.onclick = () => li.classList.toggle('completed');

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => taskList.removeChild(li);

    // Append buttons to the list item
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}
