import React, { Component } from "react";
import "./App.css";
import IssueList from './containers/IssueList/IssueList';
import { Route, Switch } from 'react-router-dom';
import AddIssueForm from './form/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={IssueList} />
          <Route path="/newIssue" exact component={AddIssueForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
