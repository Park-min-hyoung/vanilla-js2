const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

const toDos = [];

function localSaveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const removeli = event.target.parentElement;
  removeli.remove();
}

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
  parsedToDos.forEach((item) => console.log("this is the turn of ", item));
}
