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
    <div style={{ fontSize: '35px', }}>To Do List</div>
  )
}

export default App
