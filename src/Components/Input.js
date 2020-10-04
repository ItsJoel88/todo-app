import React from 'react'

function Input({ name, prefix, type, inputProps }) {
    return (
        <>
            <label htmlFor={prefix}>
                {name}
            </label>
            <input type={type} name={prefix} {...inputProps} />
        </>
    )
}

export default Input