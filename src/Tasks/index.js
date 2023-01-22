import React from 'react';
import "./style.css";

const Tasks = ({tasks, hideDoneTasks}) => (
  <ul className="tasks">
    {tasks.map(task =>
      <li
        key={task.id}
        className={`tasks__li${task.done && hideDoneTasks ? " tasks__li--hidden" : ""}`}
      >
        <button className="tasks__birdie">
          {task.done ? "✔" : ""}
        </button>
        <span className={`tasks__text${task.done ? " tasks__text--underlined" : ""}`}>
          {task.content}
        </span>
        <button className="tasks__remove">
          🗑
        </button>
      </li>
    )}
  </ul>
);

export default Tasks;