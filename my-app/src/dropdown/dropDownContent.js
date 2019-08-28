import React from 'react';
import './dropDown.css'

const dropDownContent = (props) => {
    return (
        <div className="dropdown-content">
        <a href="#">{props.name}</a>
        </div>
    );
}

export default dropDownContent;
