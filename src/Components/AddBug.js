import React from "react";
import "./AddBug.css";
function AddBug(props) {
  const enteredBugHandler = (event) => {
    props.setEnteredBug(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!props.enteredBug) {
      alert("you can't leave this field empty");
    } else if (props.enteredBug && !props.isToggling) {
      props.setBugList(
        props.bugList.map((ele) => {
          if (ele.id === props.isEditing) {
            return { ...ele, bug: props.enteredBug };
          }
          return ele;
        })
      );
      props.setEnteredBug("");
      props.setToggle(true);
      props.setIsEditing(null);
    } else {
      const newBug = {
        id: Math.random().toString(),
        bug: props.enteredBug,
      };
      props.onAddBug(newBug);
      props.setEnteredBug("");
    }
  };
  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="lab__inp">
          <label> Enter Bug</label>
          <input
            type="text"
            value={props.enteredBug}
            onChange={enteredBugHandler}
          />
        </div>
        <div className="action">
          {props.isToggling ? (
            <button>Add new Bug</button>
          ) : (
            <button>Update</button>
          )}
        </div>
      </form>
    </div>
  );
}
export default AddBug;
