addTask.addEventListener("click", () => {
  const input = task.value;
  tasks.push(task.value);
  let li = document.createElement("li");
  let span = document.createElement("span");
  let delBtn = document.createElement("button");
  li.className = "list-item";
  span.className = "some-text";
  delBtn.className = "del";
  delBtn.onclick(s());
  taskList.append(li);
  li.append(span, delBtn);
  span.append(input);
});

function s() {
  console.log("h");
  //   delBtn.addEventListener("click", () => {
  //     delTask.parentElement.remove();
  //     console.log("cl");
  //   });
}
