import React from 'react';
import { ListUl, ItemLi, TaskText, Button, Div } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <Div>
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
  </Div>
);

export default TaskList;