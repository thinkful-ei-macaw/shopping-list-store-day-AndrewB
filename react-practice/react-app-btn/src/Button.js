import React from 'react'

function Button(props) {
    
        return (
            <div>
                <button
                onClick={props.onClick}
                type='button'
                >
                    BUTTON
                </button>
            </div>
        )
    }


export default Button