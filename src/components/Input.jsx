import React, { useState } from "react";
import "../styles/input.css";
import CheckBox from "./CheckBox";

const Input = () => {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleAddTodo() {
    const newTodo = {
      text: textInput,
    };

    setTodos(prevState => [...prevState,newTodo]);
  
  }

  function defaultForm(e) {
    e.preventDefault();
  }
  return (
    <form onSubmit={defaultForm}>
      <div className="content">
        <input
          type="text"
          className="add"
          placeholder="Add details"
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button type="submit" onClick={handleAddTodo}>
          Add
        </button>
        {todos.map((todo) => (
          <CheckBox text={todo.text} key={todo.text} />
        ))}
      </div>
    </form>
  );
};

export default Input;
