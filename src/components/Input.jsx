import React, { useState } from "react";
import "../styles/input.css";
import CheckBox from "./CheckBox";

const Input = () => {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  
  function handleAddTodo() {
    if(textInput){

      const newTodo = {
        text: textInput,
      };
  
      setTodos(prevState => [...prevState,newTodo]);
    } else {
      alert('por favor preencha o campo')
    }
  
  }

  
  function defaultForm(e) {
    e.preventDefault();
  }
  
  if (textInput === null) return null
  
  return (
    <form onSubmit={defaultForm}>
      <div className="content">
        <input
          type="text"
          className="add"
          placeholder="Add details"
          onChange={(e) => setTextInput(e.target.value)}
          required
        />
        <button type="submit" onClick={handleAddTodo}>
          Add
        </button>
        
        {( todos.map((todo) => (
          <CheckBox text={todo.text} key={todo.text} />
        )))}
      </div>
    </form>
  );
};

export default Input;
