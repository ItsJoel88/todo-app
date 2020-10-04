import React from 'react'

function Card({ title, description, date }) {
    return (
        <div className="card">
            <div className="card-header">
                <p>{title}</p>
            </div>
            <div className="card-content">
                <p>{description}</p>
            </div>
            <div className="date">
                <span>{date}</span>
            </div>
        </div>
    )
}

export default Card