import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Row, Alert } from 'react-bootstrap'
import { v1 as uuidv1 } from 'uuid';

const TodoList = () => {
  const [item, setItem] = useState('')
  const [todoItems, setTodoItems] = useState([])
  const [editEditItem, setEditItem] = useState({ id: -1, value: '' })

  const submitForm = e => {
    e.preventDefault();

    if (item !== '' && !todoItems.some(todoItem => todoItem.value === item)) {
      setTodoItems([...todoItems, {
        id: uuidv1(),
        value: item,
        mark: false
      }])

      setItem('')
      console.log(todoItems)
    }
  }

  const markAsDone = (id) => {
    let items = todoItems.map(item => {
      if(item.id === id) {
        item.mark = !item.mark
        return item;
      }
      else {
        return item;
      }
    })
    setTodoItems(items)
  }

  const updateItem = (e, id) => {
    if(e.keyCode === 27) {
      setEditItem({id: -1, value: ''})
    }
    if(e.keyCode === 13)
    {
      let items = todoItems.map(item => {
        if(item.id === id && editEditItem.value !== '') {
          item.value = editEditItem.value
          return item;
        }
        else {
          return item;
        }
      });
      setTodoItems(items)
      setEditItem({id: -1, value: ''})
    }

  }

  return (
    <Row className="justify-content-center">
      <div className="w-50">
        <form onSubmit = { submitForm }>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                value={ item }
                className="form-control"
                id="new-todo-item"
                name="new-todo-item"
                placeholder="I want to do..."
                aria-label="Todo item description"
                autoFocus
                onChange = { (e) => setItem(e.target.value) }
              />
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

        <div className="mt-4">
          {todoItems.map(todoItem =>
            <Alert key={ todoItem.id } variant="dark">
              <input
                type="checkbox"
                disabled={ todoItem.id === editEditItem.id }
                checked={ todoItem.mark }
                onChange={ () => markAsDone(todoItem.id) } />

              { editEditItem.id === todoItem.id ?
                (<input
                  type="text"
                  value={ editEditItem.value }
                  onChange={ (e) => setEditItem({ id: todoItem.id, value: e.target.value }) }
                  onKeyDown={(e) => updateItem(e, todoItem.id) }/>) :
                (<label className="ml-2">{ todoItem.value }</label>) }

              <Alert.Link
                variant='light'
                className="float-right"
                disabled={ todoItem.id === editEditItem.id }
                onClick={ () => setTodoItems(todoItems.filter(item => item.id !== todoItem.id))}>
                <FontAwesomeIcon icon={ faTrash } className="text-danger"/>
              </Alert.Link>

              <Alert.Link
                variant='light'
                className="float-right mr-2"
                disabled={ todoItem.id === editEditItem.id }
                onClick={ () => setEditItem({ id: todoItem.id, value: todoItem.value }) }>
                <FontAwesomeIcon icon={ faEdit } className="text-info"/>
              </Alert.Link>
            </Alert>
          )}
        </div>
      </div>
    </Row>
  )
}

export default TodoList
