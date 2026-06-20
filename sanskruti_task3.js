const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const pendingList = document.getElementById("pending");
const completedList = document.getElementById("completed");

addBtn.addEventListener("click", addTask);

function addTask() {
  const text = taskInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.textContent = text + " (added: " + new Date().toLocaleString() + ")";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = () => {
    li.removeChild(completeBtn);
    li.removeChild(editBtn);
    completedList.appendChild(li);
    li.textContent = text + " (completed: " + new Date().toLocaleString() + ")";
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "✎";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", text);
    if (newText) {
      li.firstChild.textContent = newText;
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);
  pendingList.appendChild(li);

  taskInput.value = "";
}
