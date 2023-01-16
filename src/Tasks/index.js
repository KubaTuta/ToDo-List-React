import React from 'react';
import "./style.css";

const Tasks = (props) => (
  <ul className="list__ul">
    {props.tasks.map(task =>
      <li
        key={task.id}
        className=
        {`list__li${task.done && props.hideDoneTasks
          ? " list__li--hidden"
          : ""}`}
      >
        <button className="list__birdie">
          {task.done ? "✔" : ""}
        </button>
        <span className=
          {`list__text${task.done
            ? " list__text--underlined"
            : ""}`}
        >
          {task.content}
        </span>
        <button className="list__remove">
          🗑
        </button>
      </li>)}
  </ul>
);

export default Tasks;