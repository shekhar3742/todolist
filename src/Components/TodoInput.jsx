import React, { useState } from 'react'

function TodoInput() {
    const[inputText, setInputText] = useState('')
  return (
    <div className='input-container'>
        <input type= 'text' placeholder='Enter task'
        onChange={(e)=>{
            setInputText(e.target.value)
        }} className='input-box-todo'/>

        <button className='add-btn'>+</button>
    </div>
  )
}

export default TodoInput
