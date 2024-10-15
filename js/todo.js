const todoFormEl = document.getElementById("todo-form");

const todoList = [
  {
    id: "1",
    todo: "Learn React",
    checked: false,
  },
  {
    id: "2",
    todo: "Learn Angular",
    checked: false,
  },
  {
    id: "3",
    todo: "Learn Vue",
    checked: true,
  },
];

const generateNewId = (todoList) => {
  if (todoList.length === 0) {
    return "1";
  }

  const lastId = Number(todoList[todoList.length - 1].id);

  return (lastId + 1).toString();
};

const renderTodoList = () => {
  console.log("rendering...", todoList);
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const data = new FormData(event.target);

  const todoItem = data.get("todo-item");

  const newTodo = {
    id: generateNewId(todoList),
    todo: todoItem,
    checked: false,
  };

  todoList.push(newTodo);
  renderTodoList();
};

todoFormEl.addEventListener("submit", onFormSubmit);
