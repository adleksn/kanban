"use strict";

const tasks = [];

// const taskKanban = {
//   text: text,
//   id: id,
//   column: column,
// };

let input = document.getElementById("taskInput");
let addButton = document.getElementById("addTaskBtn");

let columnTodo = document.getElementById("todoList");
let columnInProgress = document.getElementById("progressList");
let columnDone = document.getElementById("doneList");

function renderTask(renderColumn) {
  columnTodo.innerHTML = "";
  columnInProgress.innerHTML = "";
  columnDone.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    let textCard = createTask(tasks[i].text, onDelete);

    if (tasks[i].column === "todo") {
      columnTodo.appendChild(textCard);
    } else if (tasks[i].column === "progress") {
      columnInProgress.appendChild(textCard);
    } else if (tasks[i].column === "done") {
      columnDone.appendChild(textCard);
    }
  }
}

function createTask(taskText, onDelete) {
  let createElementTask = document.createElement("li");
  createElementTask.classList.add("task");
  createElementTask.innerHTML = `
  <p class="task-text">${taskText}</p>

  <div class="task-buttons">
    <button class="move">→</button>
    <button class="delete">✕</button>
  </div>`;

  let deleteTask = createElementTask.querySelector(".delete");

  deleteTask.addEventListener("click", () => {
    onDelete(createElementTask);
  });
  return createElementTask;
}

function onDelete(elementDelete) {
  elementDelete.remove();
}

addButton.addEventListener("click", () => {
  let trimmedText = input.value.trim();
  if (trimmedText === "") {
    return alert("Ведите текст");
  }
  let taskText = input.value;
  const taskKanban = {
    id: Date.now(),
    text: trimmedText,
    column: "todo",
  };
  tasks.push(taskKanban);
  renderTask();
  input.value = "";
});

/* 
Задачи:
1. Сделать добавление задачи в Todo (Готово)
2. Сделать удалениие задачи (Готово)
3. Сделать перемещение задачи
4. Сделать сохранение задачи в localStorage
5. Сделать Drag and Drop



Превый пункт
1. Создать объект с id и text 
2. создаю function которая при клике создает div элемент с input внутри 
3. создаю function которая не дает создать задачу без текста 

Второй пункт
1. Создаю function которая удаляет div при клике

Третий пункт
1. Создаю function которая при клике созданный div удаляет и создает в другой section 

Четвертый пункт
1. Создаю function которая сохраняет данные в localStorageю

Пятый пункт
1. Навешиваю на карточку атрибут draggable="true"
2. Добавляю слушатель dragstart — сохраняю id перетаскиваемой карточки
3. Добавляю слушатель dragover на колонку — отменяю стандартное поведение
4. Добавляю слушатель drop на колонку — беру id из шага 2, перемещаю карточку в эту колонку
5. После перемещения — сохраняю в localStorage
*/
