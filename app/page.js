'use client';
import React, { useState } from 'react'

const App = () => {
  const [userinput, setUserInput] = useState('');
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState([]);

  //Set user input value
  const updateInput = (value) => {
    setUserInput(value);
  };

  const handleAction = () => {
    if (userinput.trim() === '') return;

    if (editIndex !== null) {
      const updateList = list.map((item, index) =>
        index === editIndex ? { ...item, value: userinput } : item
      );
      setList(updateList);
      setEditIndex(null);
    } else {
      const newItem = {
        id: Math.random(),
        value: userinput,
      };
      setList([...list, newItem]);
    }
    setUserInput('');
  }
  return (
    <div id='divBody' >
      <div id='title'>ToDo List</div>
      <div id='divTodo'>

        <input
          id="textInput"
          placeholder={editIndex !== null ? "Edit Item..." : "Add Item"}
          value={userinput}
          onChange={(e) => updateInput(e.target.value)}>
        </input>

        <button id="button" onClick={handleAction}>{editIndex !== null ? "Update" : "Add"}</button>
      </div>
    </div >
  )
}

export default App
