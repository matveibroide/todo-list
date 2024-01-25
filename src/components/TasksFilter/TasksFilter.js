import { useState } from "react";
import "./TasksFilter.css";
const TaskFilters = ({ filterAll, filterCompleted, filterActive }) => {
  return (
    <ul className="filters">
      <li>
        <button className="filter-btn selected" onClick={(e) => filterAll(e)}>
          All
        </button>
      </li>
      <li>
        <button onClick={(e) => filterActive(e)} className="filter-btn">
          Active
        </button>
      </li>
      <li>
        <button className="filter-btn" onClick={(e) => filterCompleted(e)}>
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TaskFilters;
