import React from "react";
import "../styles/input.css";

const Input = () => {
  return (
    <form>
      <div className="content">
        <input type="text" className="add" label="Add details" placeholder="Add details" />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Input;
