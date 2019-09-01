import React, { Component } from "react";
import "../../App.css";
import Dropdown from "../../dropdown/dropDown";
import { Link } from "react-router-dom";

class IssueList extends Component {
    render() {
        return (
            <div>
                <h1 className="header">yashHub</h1>
                <Dropdown name="Filters" />
                <Link className="switchbtn" to= "/newIssue">New Issue</Link>
                
            </div>
        )
    }
}

export default IssueList