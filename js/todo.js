const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function localSaveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const removeli = event.target.parentElement;
  removeli.remove();
}

// 화면에 할일을 출력
function paintToDo(newTodo) {
  const toDoli = document.createElement("li");
  const toDospan = document.createElement("span");
  toDospan.innerText = newTodo;
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "X";
  removeBtn.addEventListener("click", deleteToDo);

  toDoli.appendChild(toDospan);
  toDoli.appendChild(removeBtn);
  toDoList.appendChild(toDoli);
}

// 새로 할일을 추가 할때
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);

  paintToDo(newTodo);
  localSaveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
