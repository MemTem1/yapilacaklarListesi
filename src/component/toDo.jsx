import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import '../css/todo.css'
function toDo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;
    const [editTable, setEditTable] = useState(false)
    const [newTodo, setNewTodo] = useState(content)


    const removeTodo = () => {

        onRemoveTodo(id)
    }
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request)
        setEditTable(false)
    }
    return (
        <div className='todo'>
            < div >
                {
                    editTable ? <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='nev-todo-input' /> : content

                }
            </ div >
            <div >
                <IoIosRemoveCircle className='remove' onClick={removeTodo} />

                {
                    editTable ? <FaCheck className='edit' onClick={updateTodo} /> : <FaEdit className='edit' onClick={() => setEditTable(true)} />
                }


            </div>
        </div>
    )
}

export default toDo