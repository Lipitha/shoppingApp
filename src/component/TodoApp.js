import { useState } from "react";

function TodoApp() {
  const [userTodo, setUsertodo] = useState({
    todoName: ""
  });
  const [todos, setTodos] = useState([]);
  const deleteTodo = (selectedTodo) => {
    console.log(selectedTodo);
    const filterTodos = todos.filter((todo) => {
      return todo.id !== selectedTodo.id;
    });
    console.log(filterTodos);
    setTodos(filterTodos);
  };
  const handleUserTodo = (event) => {
    const { value } = event.target;
    setUsertodo({
      todoName: value
    });
  };
  const addTodo = (event) => {
    console.log(userTodo);
    if (userTodo.todoName === "") {
      event.preventDefault();
    } else {
      setTodos((preState) => {
        return [
          ...preState,
          {
            todoName: userTodo.todoName,
            id: todos.length + 1
          }
        ];
      });
    }
    setUsertodo({
      todoName: ""
    });
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        name="text"
        placeholder="enter todo"
        value={userTodo.todoName}
        onChange={handleUserTodo}
      />
      <button name="AddTodo" onClick={addTodo}>
        Add Todo
      </button>
      {todos.map((todo) => {
        return (
          <div>
            <h3 key={todo.id}>
              {todo.id} {todo.todoName}
            </h3>
            <button name="delete" onClick={() => deleteTodo(todo)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default TodoApp;
