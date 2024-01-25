import TaskFilters from "../TasksFilter/TasksFilter";
import "./Footer.css";
const Footer = ({
  filterAll,
  filterCompleted,
  clearCompleted,
  todoCounter,
  filterActive,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">{todoCounter} items left</span>
      <TaskFilters
        filterActive={filterActive}
        filterAll={filterAll}
        filterCompleted={filterCompleted}
      />
      <button onClick={clearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
