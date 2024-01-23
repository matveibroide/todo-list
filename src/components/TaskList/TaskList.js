import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = ({ todos }) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((item, i) => {
          const { label, class: className } = item;
          return <Task key={i} name={label} className={className} />;
        })}
      </ul>
    </section>
  );
};

export default TaskList;
