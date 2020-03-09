import React, { Component } from 'react'
import { v1 as uuidv1 } from 'uuid';
import LoadTodoItems from './LoadTodoItems';
import withPresistedState from './withPresistedState'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoItems: this.props.storageData,
      editItem: { id: -1, value: ''}
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.todoItem !== prevProps.todoItem) {
      this.addTodoItem(this.props.todoItem)
    }
    this.props.setStorageData(this.state.todoItems)
  }

  addTodoItem = (item) => {
    if (item !== '' && !this.state.todoItems.some(todoItem => todoItem.value === item)) {
      this.setState({ todoItems: [...this.state.todoItems, {
        id: uuidv1(),
        value: item,
        completed: false
      }]});
      this.props.setErrorMessage('')
      this.props.setItem('')
    }
    else {
      item === '' ? this.props.setErrorMessage('Field is required!') : this.props.setErrorMessage('Already Exists!')
    }
  }

  markAsDone = id => {
    this.setState(prevState => ({
      todoItems : prevState.todoItems.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
    }));
  }

  resetEditItemState = () => {
    this.setState({ editItem: {id: -1, value: ''} })
  }

  updateItem = (e, id) => {
    if(e.keyCode === 27) {
      this.resetEditItemState()
    }
    else if(e.keyCode === 13)
    {
      if(this.state.editItem.value !== '') {
        this.setState(prevState => ({
          todoItems : prevState.todoItems.map(item => item.id === id ? { ...item, value: this.state.editItem.value } : item)
        }));
      }
      this.resetEditItemState()
    }
  }

  editTextOnChange = (e, todoItemId) => {
    this.setState({editItem: {id: todoItemId, value: e.target.value}})
  }

  setEditItemText = (todoItem) => {
    this.setState({ editItem: { id: todoItem.id, value: todoItem.value } })
  }

  filterTodoItems = (filteredItemId) => {
    this.setState({ todoItems: this.state.todoItems.filter(item => item.id !== filteredItemId) })
  }

  render() {
    const {todoItems, editItem} = this.state
    const completedTasks = todoItems.filter(item => item.completed === true)
    const inCompletedTasks = todoItems.filter(item => item.completed === false)

    return(
      <div>
        <LoadTodoItems
          todoItems={ completedTasks }
          editItem={ editItem }
          type="Complete"
          markAsDone={ this.markAsDone }
          editTextOnChange={ this.editTextOnChange }
          updateItem={ this.updateItem }
          filterTodoItems={ this.filterTodoItems }
          setEditItemText={ this.setEditItemText }/>

        <LoadTodoItems
          todoItems={ inCompletedTasks }
          editItem={ editItem }
          type="InComplete"
          markAsDone={ this.markAsDone }
          editTextOnChange={ this.editTextOnChange }
          updateItem={ this.updateItem }
          filterTodoItems={ this.filterTodoItems }
          setEditItemText={ this.setEditItemText }/>
      </div>
    )
  }
}

export default withPresistedState(TodoList)
