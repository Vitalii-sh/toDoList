const task = document.querySelector(".input");
const addBtn = document.querySelector(".btn");
const toDoList = document.querySelector(".list");

let taskList = [];
if (localStorage.getItem("task")) {
  taskList = JSON.parse(localStorage.getItem("task"));
  outTasks();
}
addBtn.addEventListener("click", () => {
  let newTask = {
    task: task.value,
    checked: false,
  };
  taskList.push(newTask);
  console.log(taskList);
  outTasks();
  localStorage.setItem("task", JSON.stringify(taskList));
});

function outTasks() {
  let outTask = "";
  taskList.forEach((item, index) => {
    outTask += `
    <li class = "list-item">
        <input type = "checkbox" id = "item_${index}">
        <label for = "item_${index}">${item.task}</label>
    </li>
    `;
    toDoList.innerHTML = outTask;
  });
}

toDoList.addEventListener("change", (event) => {
  let idInput = event.target.getAttribute("id");
  let forLabel = toDoList.querySelector("[for=" + idInput + "]");
  let valueLabel = forLabel.innerHTML;
  taskList.forEach((item) => {
    if (item.task === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem("task", JSON.stringify(taskList));
    }
  });
});
