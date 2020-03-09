import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TodoList from './TodoList';

function TodoForm() {
  const [item, setItem] = useState('')
  const [todoItem, setTodoItem] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const addTodo = e => {
    e.preventDefault();
    item === '' ? setErrorMessage('Field is required!') : setTodoItem(item)
  }

  return (
    <div className="row justify-content-center">
      <div className="w-50">
      <TodoList
        todoItem={ todoItem }
        setItem={ setItem }
        setErrorMessage={ setErrorMessage }
        storageKey="todoItems"
        defaultStorageValue={[]}/>

      <form onSubmit = { addTodo }>
        <div className="form-row mt-4">
          <div className="col">
            <input
              value={item}
              type="text"
              className="form-control"
              id="newTodoItem"
              name="newTodoItem"
              placeholder="I want to do..."
              aria-label="Todo item description"
              autoFocus
              onChange = { (e) => setItem(e.target.value) }/>

            { errorMessage !== '' && <span className="text-danger">{ errorMessage }</span> }
          </div>

          <div className="col-auto">
            <button
              type="submit"
              className="btn btn-primary"
              aria-label="Add todo item">
              <FontAwesomeIcon icon={ faPlus } />
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default TodoForm
