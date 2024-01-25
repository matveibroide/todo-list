import React, { useEffect, useState } from "react";

const Task = ({ name, changeTodoStatus, status, id, deleteTodo }) => {
  const [done, setDone] = useState(status);

  const style = status ? "completed" : "";

  let content = (
    <li className={style}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{name}</span>
          <span className="created">created 17 seconds ago</span>
        </label>
        <button
          onClick={() => changeTodoStatus(name, !status)}
          className="icon icon-edit"
        ></button>
        <button
          id={id}
          onClick={(e) => deleteTodo(e)}
          className="icon icon-destroy"
        ></button>
      </div>
    </li>
  );

  return content;
};

export default Task;
