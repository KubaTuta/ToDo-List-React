import React, { useState, useRef } from "react";
import { useEffect } from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubmit} >
            <input
                value={newTaskContent}
                className="form__input"
                type="text"
                placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTaskContent(event.target.value)}
                ref={inputRef}
            />
            <button className="form__addButton">Dodaj zadanie</button>
        </form>
    );
};

export default Form;