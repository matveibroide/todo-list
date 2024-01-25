import { useState } from "react";

const NewTaskForm = () => {
  const [todoName, setTodoName] = useState("");

  const onInputChange = (e) => {
    setTodoName(e.target.value);
  };

  return (
    <input
      onChange={(e) => onInputChange(e)}
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    />
  );
};

export default NewTaskForm;
