import React from 'react';
import "./style.css";

const Buttons = (props) => {
if (props.tasks.length === 0) {
    return null;
}

return (
    <div className="section__buttons">
 <button className="section__buttons">
      {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button className="section__buttons"
      disabled={props.tasks.every(({ done }) => done )}
      >
      Ukończ wszystkie
      </button>
    </div>
)
};
export default Buttons;