import React from "react";
import "../styles/checkbox.css"

const CheckBox = (props) => {
  return (
    <div className="content-check">
      <div className="check">
        <input type="checkbox" name="add" id="add" />
        {props.text}
      </div>
    </div>
  );
};

export default CheckBox;
