import React from 'react'

function Button(props) {
    
    return (
            <div>
                <button
                    onClick={props.onClick} // calls on the handleButtonClick function through the 'onClick' prop from the App function
                    type='button'
                >
                Click Here!
                </button>
            </div>
            
        )
    }

export default Button