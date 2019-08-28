import React from "react";
import "./dropDown.css";
import DropdownContent from "./dropDownContent";

const dropdown = (props) => {
  return (
    <div className="dropdown">
      <button className="dropbtn">{props.name}</button>
      <DropdownContent name='ginga gunga'/>
      <DropdownContent name='nigga ninja'/>
      <DropdownContent name='ooga booga'/>
    </div>
  );
};

export default dropdown;
