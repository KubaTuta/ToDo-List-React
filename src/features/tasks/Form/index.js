import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Button, Input, StyledForm } from "./styled";

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    useEffect(()=> inputRef.current.focus(), []);

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit} >
            <Input
                value={newTaskContent}
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTaskContent(event.target.value)}
                ref={inputRef}
            />
            <Button className="form__addButton">Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;