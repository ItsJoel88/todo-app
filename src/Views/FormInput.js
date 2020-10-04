import React from 'react'
import Input from '../Components/Input'

function FormInput({ set, todos }) {
    const formEl = React.useRef(null)
    return (
        <>
            <div className="form-container">
                <form ref={formEl}>
                    <Input name="Title" prefix="title" type="text" inputProps={{ id: 'todo-title', placeholder: 'Groceries' }} />
                    <Input name="Description" prefix="description" type="text" inputProps={{ id: 'todo-description', placeholder: 'Buy vegetables from the market' }} />
                    <button type="submit" onClick={e => {
                        e.preventDefault()
                        set([...todos, { title: formEl.current[0].value, description: formEl.current[1].value, date: new Date().toUTCString() }])
                        formEl.current[0].value = ''
                        formEl.current[1].value = ''
                    }}>Create</button>
                </form>
            </div>
        </>
    )
}

export default FormInput