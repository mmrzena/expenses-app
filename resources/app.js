var task = document.getElementById('task');
var addButton = document.getElementById('add');
var list = document.getElementById('list');

function addTask() {
  list.appendChild(document.createElement("li"));
}
addButton.addEventListener("click", addTask, false);
