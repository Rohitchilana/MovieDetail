import React, { useState } from "react";
import AddBug from "./Components/AddBug";
import BugList from "./Components/BugList";
import "./App.css";
const DUMMY__BUGS = [
  { bug: "Hardware", id: Math.random().toString() },
  { bug: "Software", id: Math.random().toString() },
];
function App() {
  const [enteredBug, setEnteredBug] = useState("");
  const [bugList, setBugList] = useState(DUMMY__BUGS);
  const [toggle, setToggle] = useState(true);
  const [isEditing, setIsEditing] = useState(null);
  //Adding Bug
  const addBugHandler = (bugData) => {
    setBugList((prevList) => {
      return [...prevList, bugData];
    });
  };
  //Deleting Bug
  const deleteBugHandler = (ind) => {
    console.log(ind);
    const updatedList = bugList.filter((el) => {
      return el.id !== ind;
    });
    setBugList(updatedList);
  };
  //Deleting ALL
  const removeAllHandler = () => {
    setBugList([]);
  };
  //this is me
  //Editing Bugs
  const editHandler = (id) => {
    let editingItem = bugList.find((ele) => {
      return ele.id === id;
    });
    setToggle(false);
    setEnteredBug(editingItem.bug);
    setIsEditing(id);
  };
  return (
    <div>
      <AddBug
        onAddBug={addBugHandler}
        isToggling={toggle}
        setToggle={setToggle}
        enteredBug={enteredBug}
        setEnteredBug={setEnteredBug}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        setBugList={setBugList}
        bugList={bugList}
      />
      <BugList
        items={bugList}
        onDelete={deleteBugHandler}
        onEdit={editHandler}
      />
      <div className="adjustbtn">
        <button className="designappbtn" onClick={removeAllHandler}>
          Delete all Bugs
        </button>
      </div>
    </div>
  );
}

export default App;
