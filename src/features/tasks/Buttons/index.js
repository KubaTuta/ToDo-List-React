import React from 'react';
import { Div, Button } from "./styled";
import { useSelector, useDispatch } from 'react-redux';
import {
    toggleHideDone,
    setAllDone,
    fetchExampleTasks,
    selectTasks,
    selectHideDone,
} from '../tasksSlice';

const Buttons = () => {
    const hideDone = useSelector(selectHideDone);
    const tasks = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <Div>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            <Button
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={() => dispatch(setAllDone())}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </Div>
    )
};
export default Buttons;