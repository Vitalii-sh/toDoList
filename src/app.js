const task = document.querySelector(".input");
const toDoList = document.querySelector(".list");
const addBtn = document.querySelector(".addBtn");
const toDo = document.querySelector("#toDo");
const label = toDo.content.querySelector("label");
const delBtn = toDo.content.querySelector(".delBtn");
const input = toDo.content.querySelector("input");
let id = 1;
let toDos;

function toLocal() {
  toDos = toDoList.innerHTML;
  localStorage.setItem("toDos", toDos);
}
addBtn.addEventListener("click" && "keypres", () => {
  createTask();
  id++;
  toLocal();
  task.value = "";
});

function createTask() {
  if (task.value !== "") {
    label.textContent = task.value;
    delBtn.id = `del_${id}`;
    label.htmlFor = id;
    input.id = id;
    const li = toDo.content.cloneNode(true);
    toDoList.append(li);
    id++;
  }
}
toDoList.addEventListener("click", (e) => {
  let id = document.getElementById(e.target.id);
  if (id !== null && id.nodeName == "BUTTON") {
    id.parentElement.remove();
    toLocal();
  }
});

if (localStorage.getItem("toDos")) {
  toDoList.innerHTML = localStorage.getItem("toDos");
}
