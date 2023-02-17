import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListUl, ItemLi, TaskText, Button, Div } from "./styled";
import { toggleTaskDone, removeTask, selectTasks, selectHideDone } from '../tasksSlice';

const TaskList = () => {

  const hideDone = useSelector(selectHideDone);
  const tasks = useSelector(selectTasks);

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