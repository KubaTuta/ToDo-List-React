import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListUl, ItemLi, TaskText, Button, Div, StyledLink } from "./styled";
import { toggleTaskDone, removeTask, selectTasksByQuery, selectHideDone } from '../tasksSlice';
import { useLocation } from 'react-router-dom';

const TaskList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("szukaj");

  const hideDone = useSelector(selectHideDone);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
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
              <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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