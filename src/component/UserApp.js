import { useState } from "react";

function UserApp() {
  const [userTodo, setUsertodo] = useState({
    todoUser: "",
    todoEmail: ""
  });
  const [todos, setTodos] = useState([
    {
      todoUser: "lipitha",
      todoEmail: "lipithapoojary123@gmail.com"
    }
  ]);

  const deleteTodo = (selectedTodo) => {
    console.log(selectedTodo);
    const filterTodos = todos.filter((todo) => {
      return todo.todoEmail !== selectedTodo.todoEmail;
    });
    console.log(filterTodos);
    setTodos(filterTodos);
  };
  const handleUserName = (event) => {
    const { value } = event.target;
    setUsertodo({
      todoUser: value
    });
  };
  const handleUserEmail = (event) => {
    const { value } = event.target;
    setUsertodo((preState) => {
      return {
        ...preState,
        todoEmail: value
      };
    });
  };
  const addTodo = (event) => {
    if (userTodo.todoUser === "" && userTodo.todoEmail === "") {
      event.preventDefault();
    } else {
      setTodos((preState) => {
        return [
          ...preState,
          {
            todoUser: userTodo.todoUser,
            todoEmail: userTodo.todoEmail
          }
        ];
      });
    }
    setUsertodo({
      todoUser: "",
      todoEmail: ""
    });
  };

  return (
    <div>
      <h1>Contact App</h1>
      <input
        name="text"
        placeholder="enter your name"
        value={userTodo.todoUser}
        onChange={handleUserName}
      />
      <input
        name="text"
        placeholder="enter your email"
        value={userTodo.todoEmail}
        onChange={handleUserEmail}
      />
      <button name="AddTodo" onClick={addTodo}>
        Add Todo
      </button>
      {todos.map((todo) => {
        return (
          <div>
            <h3>{todo.todoUser}</h3>
            <h3>{todo.todoEmail}</h3>
            <button name="delete" onClick={() => deleteTodo(todo)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default UserApp;
