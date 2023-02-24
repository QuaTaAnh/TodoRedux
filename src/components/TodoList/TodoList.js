import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo } from '../../redux/actions'
import Todo from './Todo'
import {v4 as uuidv4} from 'uuid'
import {todoLists}  from '../../redux/selectors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Box from './Box'
import { faX } from '@fortawesome/free-solid-svg-icons'

const TodoList = () => {
  
  const [input, setInput] = useState('');
  
  const todoList = useSelector(todoLists);
  // console.log(todoList);
  const dispath = useDispatch();
  
  const handleClick = () =>{
    const state = dispath(addTodo({
      id: uuidv4(),
      name: input,
    }))
    setInput('')
    localStorage.setItem('listItem', JSON.stringify(state))
  }

  const handleDelete = (id) =>{
    dispath(deleteTodo(id))
  }

  return (
    <div className='w-2/4 h-full flex flex-col items-center border-2 p-8 mt-8'>
        <h3 className='text-3xl mb-5'>Todo List</h3>
        <div className='w-2/4 flex flex-col'>
            <input placeholder='Nhập công việc' className='border-2 mb-2' value={input} onChange={(e)=> setInput(e.target.value)} />
            <button className='border-2 mb-4' onClick={handleClick}>Thêm</button>
        </div>
        {todoList.map(todo => <Box>
          <Todo key={todo.id} title={todo.name}/>
          <FontAwesomeIcon className='cursor-pointer' icon={faX} onClick={() => handleDelete(todo.id)}/>
        </Box>)}

    </div>
  )
}

export default TodoList