import React, { Component } from "react";
import "./App.css";
import Dropdown from "./dropdown/dropDown";
import Form from "./form/form"
import OtherVarDropDown from "./dropdown/dropDown"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="header">yashHub</h1>
        <Dropdown name="Filters" />
        <button className="newissbtn">New Issue</button>
        <Form />
        <OtherVarDropDown name="Asignees" />
        <OtherVarDropDown name="Labels" />
      </div>
    );
  }
}

export default App;
