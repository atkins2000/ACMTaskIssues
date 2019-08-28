import React from "react";
import "./form.css";

const field = (props) => {
    return(
        <div className="field">
            
                <label className='label'>{props.label}
                    <input 
                        type={props.type} 
                        name={props.name} 
                        placeholder={props.placeHolder} 
                        onChange={props.changed} 
                        value={props.value} 
                        required />
                </label>
        </div>
    )
}


export default field;
