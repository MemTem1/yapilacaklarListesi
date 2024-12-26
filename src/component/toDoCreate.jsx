import React, { useState } from 'react'
import '../App.css'

function toDoCreate({ oncreateTodo }) {
    const [newTodo, setNewTodo] = useState('')
    const createTodo = () => {
        if (!newTodo) return;
        const request = {

            id: Math.floor(Math.random() * 9999999),
            content: newTodo

        }
        setNewTodo('')
        oncreateTodo(request)

    }
    return (
        <div >
            <h2>GEÇ KALMA</h2>
            <div className='todoContainer' >
                <input type="text"
                    value={newTodo}
                    onChange={(e) => { setNewTodo(e.target.value) }}
                    placeholder='görev girin' className='input' />
                <button className='addBtn' onClick={createTodo}>EKLE</button>
            </div>

        </div>
    )
}

export default toDoCreate