import React from 'react';
import {Div, Button} from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <Div>
            <Button onClick={toggleHideDone}> 
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button onClick={setAllDone} disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </Button>
        </Div>
    )
};
export default Buttons;