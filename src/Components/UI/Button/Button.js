import React from 'react'

import './Button.css'
const Button = (props) => {
    return (
        <button onClick={props.onClicked}> 
            {props.children} 
        </button>
    )
}

export default Button