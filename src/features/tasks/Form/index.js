import React, { useState, useRef } from "react";
import { useEffect } from "react";
import { Button, StyledForm } from "./styled";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../Input";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    useEffect(() => inputRef.current.focus(), []);

    const onFormSubmit = (event) => {
        event.preventDefault();

        newTaskContent.trim().length > 0 && dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit} >
            <Input
                value={newTaskContent}
                type="text"
                placeholder=" Co jest do zrobienia?"
                onChange={(event) => setNewTaskContent(event.target.value)}
                ref={inputRef}
            />
            <Button className="form__addButton">Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;