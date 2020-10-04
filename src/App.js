import React from 'react'
import './Assets/scss/main.scss'
import Header from './Views/Header'
import TodoList from './Views/TodoList'
import FormInput from './Views/FormInput'

function App() {
    const [todos, setTodos] = React.useState([])

    return (
        <>
            <div className="container">
                <Header />
                <main className="main-content">
                    <FormInput todos={todos} set={setTodos} />
                </main>
                <TodoList todos={todos} />
            </div>
        </>
    )
}

export default App