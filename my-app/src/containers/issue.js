import React from "react";

const issue = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.comment}</p>
        </div>
    )
};

export default issue;