import { useState } from "react";

const NewTaskForm = ({addTodo}) => {
  const [todoName, setTodoName] = useState("");

  const onInputChange = (e) => {
    e.preventDefault()
    setTodoName(e.target.value)
  }


  return (
    <form onSubmit={(e) => addTodo(e,todoName)} action="">
    <input
      onChange={onInputChange}
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    />
     </form>
  );
};

export default NewTaskForm;
