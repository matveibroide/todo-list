import { useState } from "react";

import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import "./App.css";
import NewTaskForm from "../NewTaskForm/NewTaskForm";

function App() {
  const [todos, setTodos] = useState([
    { label: "Drink Coffee", class: "completed" },
    { label: "Train", class: "editing" },
    { label: "Learn React", class: null },
  ]);

  return (
    <section className="todoapp">
       <header className="header">
        <h1>todos</h1>
        <NewTaskForm/>
      </header>
      <TaskList todos={todos}></TaskList>
      <Footer />
    </section>
  );
}

export default App;
