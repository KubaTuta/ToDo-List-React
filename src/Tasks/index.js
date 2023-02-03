import React from 'react';
import { ListUl, ItemLi, TaskText, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <ListUl>
    {tasks.map(task => (
      <ItemLi
        key={task.id}
        hidden={task.done && hideDone}
      >
        <Button
          onClick={() => toggleTaskDone(task.id)}
          birdie
        >
          {task.done ? "✔" : ""}
        </Button>
        <TaskText underlined={task.done}>
          {task.content}
        </TaskText>
        <Button
          onClick={() => removeTask(task.id)}
          remove
        >
          🗑
        </Button>
      </ItemLi>
    ))}
  </ ListUl>
);

export default Tasks;