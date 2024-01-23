import { useState } from "react";

import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { label: "Drink Coffee", class: "completed" },
    { label: "Train", class: "editing" },
    { label: "Learn React", class: null },
  ]);

  return (
    <section className="todoapp">
      <TaskList todos={todos}></TaskList>
      <Footer />
    </section>
  );
}

export default App;
