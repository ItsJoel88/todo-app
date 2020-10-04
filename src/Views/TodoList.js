import React from 'react'
import Card from '../Components/Card'

function TodoList({ todos }) {
    return (
        <div className="card-container">
            {
                todos.map((todo, indx) => {
                    return (
                        <Card key={indx} title={todo.title} description={todo.description} date={todo.date} />
                    )
                })
            }
        </div>
    )
}

export default TodoList