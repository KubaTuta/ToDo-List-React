import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListUl, ItemLi, TaskText, Button, Div } from "./styled";
import { selectTasks, toggleTaskDone, removeTask } from '../tasksSlice';

const TaskList = () => {

  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();

  return (
    <Div>
      <ListUl>
        {tasks.map(task => (
          <ItemLi
            key={task.id}
            hidden={task.done && hideDone}
          >
            <Button
              onClick={() => dispatch(toggleTaskDone(task.id))}
              birdie
            >
              {task.done ? "✔" : ""}
            </Button>
            <TaskText underlined={task.done}>
              {task.content}
            </TaskText>
            <Button
              onClick={() => dispatch(removeTask(task.id))}
              remove
            >
              🗑
            </Button>
          </ItemLi>
        ))}
      </ ListUl>
    </Div>
  );
};

export default TaskList;