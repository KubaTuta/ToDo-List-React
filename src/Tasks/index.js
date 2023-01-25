import React from 'react';
import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => (
  <ul className="tasks">
    {tasks.map(task =>
      <li
        key={task.id}
        className={`tasks__li${task.done && hideDone ? " tasks__li--hidden" : ""}`}
      >
        <button className="tasks__birdie">
          {task.done ? "✔" : ""}
        </button>
        <span className={`tasks__text${task.done ? " tasks__text--underlined" : ""}`}>
          {task.content}
        </span>
        <button onClick={() => removeTask(task.id)} className="tasks__remove">
          🗑
        </button>
      </li>
    )}
  </ul>
);

export default Tasks;