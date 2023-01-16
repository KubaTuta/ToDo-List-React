import React from "react";
import "./style.css";

const Form = () => (
    <form className="section__addNewTask">
        <input className="section__input" type="text" placeholder="Co jest do zrobienia?" />
        <button className="addButton">Dodaj zadanie</button>
    </form>
);

export default Form;