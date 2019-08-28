import React, { Component } from "react";
import Field from "./field";
import './form.css';
import AddIssueHandler from './addIssue.js';

class Form extends Component {

    state = {
        issues: [],
        titleInput: '',
        commentInput: '' 
    };

    //form input validation here

    inputChangeHandler = (event, key) => {
        if (key === 'title') {
            let val = event.target.value;
            this.setState({
                titleInput: val
            });
        } else if (key === 'comment') {
            let val = event.target.value;
            this.setState({
                commentInput: val
            });
        } else {};
    }

    issueSubmitHandler = (event) => {
        const issues = this.state.issues;
        const newIssues = issues.concat({
            title: this.state.titleInput,
            comment: this.state.commentInput
        });
        this.setState((prevState) => {
            return {
                ...prevState,
                issues: newIssues
            };
        });
    }


    render() {
        console.log(this.state);
        return (
            <div>
                <Field 
                    label='Title' 
                    type='text' 
                    name='title' 
                    placeHolder='Insert Title Here'
                    value={this.state.titleInput}
                    changed={(e) => this.inputChangeHandler(e, 'title')}/>
                <Field 
                    label='Comment' 
                    type='text' 
                    name='comment' 
                    placeHolder='Leave a Comment'
                    value={this.state.commentInput}
                    changed={(e) => this.inputChangeHandler(e, 'comment')}/>
                <button className='submitbtn' onClick={this.issueSubmitHandler}>Submit</button>
            </div>
    )
}
}

export default Form;
