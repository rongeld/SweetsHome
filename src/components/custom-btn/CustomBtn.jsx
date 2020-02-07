import React from 'react'

function CustomBtn({children, ...otherProps}) {
    return (
        <button className="custom-button" {...otherProps}>
            {children}
        </button>
    )
}

export default CustomBtn
