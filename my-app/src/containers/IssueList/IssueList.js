import React, { Component } from "react";
import "../../App.css";
import Dropdown from "../../dropdown/dropDown";
import { Link } from "react-router-dom";
import axios from "../../axiosInstance";
import Issue from "../issue"

class IssueList extends Component {

    state = {
        issues: [] 
    };
    
    componentDidMount() {
        axios.get('/issues.json')
            .then((response) => {
                console.log(response.data)
                this.setState ({
                    issues: response.data[1]
            });
    });
}

    render() {
        // const issueList = this.state.issues;
        // const issues = issueList.map((issue) => {
        //     <Issue title={issue.title} comment={issue.comment}  >
        // })

        return (
            <div>
                <h1 className="header">yashHub</h1>
                <Dropdown name="Filters" />
                <Link className="switchbtn" to= "/newIssue">New Issue</Link>
                <div className="issuesList">
                               
                </div>
            </div>
        )
    }
}

export default IssueList