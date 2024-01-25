import { useEffect, useState } from "react";

import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import "./App.css";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

function App() {
  const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };
  const [todos, setTodos] = useState([
    { label: "Drink Coffee", completed: false, id: uid() },
    { label: "Train", completed: false, id: uid() },
    { label: "Learn React", completed: false, id: uid() },
  ]);

  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState(false);
  const [active, setActive] = useState(false);

  const onClickChangeClassName = (e) => {
    const nodes = document.querySelectorAll(".filter-btn");
    const btns = [...nodes];
    e.preventDefault();
    e.target.classList.add("selected");
    btns.forEach((item) =>
      item === e.target ? item : item.classList.remove("selected")
    );
  };

  const addTodo = (e, todoLabel) => {
    e.preventDefault();
    const updatedTodos = [
      ...todos,
      { label: todoLabel, completed: false, id: uid() },
    ];
    setTodos(updatedTodos);

    document.querySelector("input").value = "";
  };

  const deleteTodo = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("id");
    const updatedTodos = todos.filter((item) => item.id != id);
    setTodos(updatedTodos);
  };

  const filterAll = (e) => {
    setAll(true);
    setCompleted(false);
    setActive(false);
    onClickChangeClassName(e);
  };

  const filterCompleted = (e) => {
    setCompleted(true);
    setAll(false);
    setActive(false);
    onClickChangeClassName(e);
  };

  const filterActive = (e) => {
    setActive(true);
    setCompleted(false);
    setAll(false);
    onClickChangeClassName(e);
  };

  const clearCompleted = () => {
    const updatedTodos = todos.filter((item) => item.completed != true);
    setTodos(updatedTodos);
  };

  const changeTodoStatus = (label, status) => {
    const updatedTodos = todos.map((item) =>
      item.label === label ? { ...item, completed: status } : item
    );

    setTodos(updatedTodos);
  };

  const data = todos.filter((item) => {
    if (all) {
      return item;
    } else if (completed) {
      return item.completed === true;
    } else if (active) {
      return item.completed === false;
    }
  });

  let todoCounter = todos.filter((item) => item.completed === false).length;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm addTodo={addTodo} />
      </header>
      <TaskList
        deleteTodo={deleteTodo}
        changeTodoStatus={changeTodoStatus}
        todos={data}
      ></TaskList>
      <Footer
        todoCounter={todoCounter}
        clearCompleted={clearCompleted}
        filterAll={filterAll}
        filterCompleted={filterCompleted}
        filterActive={filterActive}
      />
    </section>
  );
}

export default App;
