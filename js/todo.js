const todoFormEl = document.getElementById("todo-form");
const todoListUlEl = document.getElementById("todo-list");

const todoList = [
  {
    id: "1",
    text: "Learn React",
    checked: false,
  },
  {
    id: "2",
    text: "Learn Angular",
    checked: false,
  },
  {
    id: "3",
    text: "Learn Vue",
    checked: true,
  },
];

const generateNewId = () => {
  if (todoList.length === 0) {
    return "1";
  }

  const lastId = Number(todoList[todoList.length - 1].id);

  return (lastId + 1).toString();
};

const sortTodoList = () => {
  return todoList.sort((a, b) => a.checked - b.checked);
};

const renderTodoList = () => {
  todoListUlEl.innerHTML = "";
  const sortedTodoList = sortTodoList();

  sortedTodoList.map((todo) => {
    renderTodo(todo);
  });
};

const renderTodo = (todo) => {
  const li = document.createElement("li");
  li.className = `flex items-center justify-between w-full p-4 mb-4 border rounded-lg ${
    todo.checked
      ? "text-gray-800  border-gray-300  bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-800"
      : "text-blue-800  border-blue-300 bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
  } `;
  li.innerHTML = `
        <label class="flex items-center">
            <input type="checkbox" ${
              todo.checked ? "checked" : ""
            }  class="mr-2 h-5 w-5 text-teal-600 focus:ring-teal-500 border-gray-300 rounded" />
            <span class="${todo.checked ? "line-through" : ""}">${
    todo.text
  }</span>
        </label>
        <div>
            <button class="p-2 rounded-full hover:bg-slate-200 mr-2 ">   
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 1024 1024"><path fill="#ef4b4b" d="M360 184h-8c4.4 0 8-3.6 8-8zh304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32M731.3 840H292.7l-24.2-512h487z"/></svg>
            </button>
            <button class="p-2 rounded-full hover:bg-slate-200 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="#4b8bf7" d="M15.748 2.947a2 2 0 0 1 2.828 0l2.475 2.475a2 2 0 0 1 0 2.829L9.158 20.144l-6.38 1.076l1.077-6.38zm-.229 3.057l2.475 2.475l1.643-1.643l-2.475-2.474zm1.06 3.89l-2.474-2.475l-8.384 8.384l-.503 2.977l2.977-.502z"/></svg>
            </button>
        </div>`;

  todoListUlEl.appendChild(li);
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const data = new FormData(event.target);

  const todoItem = data.get("todo-item");

  const newTodo = {
    id: generateNewId(),
    text: todoItem,
    checked: false,
  };

  todoList.push(newTodo);
  renderTodoList();
};

todoFormEl.addEventListener("submit", onFormSubmit);
renderTodoList();
