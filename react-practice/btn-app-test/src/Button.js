import React from 'react'

function Button(props) {
    
        return (
            <div>
                <button
                onClick={props.onClick}
                type='button'
                >
                    Button
                </button>
            </div>
        )
    
}

export default Button