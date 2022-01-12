import React from "react";
import "./BugList.css";
function BugList(props) {
  return (
    <ul className="setlist">
      {props.items.map((ele) => {
        return (
          <div className="expense-item">
            <li key={ele.id}>
              {ele.bug}
              <button
                className="designbtn"
                onClick={() => {
                  props.onEdit(ele.id);
                }}
              >
                Edit Bug
              </button>
              <button
                className="designbtn1"
                onClick={() => {
                  props.onDelete(ele.id);
                }}
              >
                Delete Bug
              </button>
            </li>
          </div>
        );
      })}
    </ul>
  );
}
export default BugList;
