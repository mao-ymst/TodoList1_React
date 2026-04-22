import React from 'react'

export default function TodoItem({ todo }) {
    return (
        <li key={todo.id}>
            {todo.title}
        </li>
    )
}
//3 list をtodoItemへ分割する