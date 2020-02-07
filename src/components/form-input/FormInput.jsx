import React from 'react'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {
            label &&
            <label className={`${otherProps.value.label ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
        }
    </div>
)

export default FormInput;
