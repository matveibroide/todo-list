import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ todos, changeTodoStatus,deleteTodo }) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((item, i) => {
          const { label, completed: status, id } = item;

          return (
            <Task
              deleteTodo = {deleteTodo}
              id={id}
              status={status}
              changeTodoStatus={changeTodoStatus}
              key={i}
              name={label}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TaskList;
