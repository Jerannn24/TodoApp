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

  }
  return (
    <div id='divBody' >
      <div id='title'>ToDo List</div>
      <div id='divTodo'></div>
    </div >
  )
}

export default App
