import React, { Component } from 'react'
import { Alert, Row, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

class LoadTodoItems extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todoItems: this.props.todoItems
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.todoItems !== prevState.todoItems) {
      return {
        todoItems: nextProps.todoItems
      };
    }
    return null;
  }

  loadItems = (todoItems, editItem) => {
    return todoItems.map(todoItem => {
      return(
        <Alert key={ todoItem.id } variant="dark" className="d-flex align-items-center">
          <input
            className=""
            type="checkbox"
            disabled={ todoItem.id === editItem.id }
            checked={ todoItem.completed }
            onChange={ () => this.props.markAsDone(todoItem.id) } />

          {editItem.id === todoItem.id ?
            (<input
              className="ml-2 col-md-10 form-control"
              type="text"
              value={ editItem.value || '' }
              onChange={ (e) => this.props.editTextOnChange(e, todoItem.id) }
              onKeyDown={ (e) => this.props.updateItem(e, todoItem.id) }/>) :
            (<span className="col-md-10">{ todoItem.value }</span>)
          }

          <Alert.Link
            variant='light'
            className={`float-right col-md-1 ${ todoItem.completed && 'd-none' }`}
            disabled={ todoItem.id === editItem.id }
            onClick={ () => this.props.setEditItemText(todoItem) }>
            <FontAwesomeIcon icon={ faEdit } className="text-info"/>
          </Alert.Link>

          <Alert.Link
            variant='light'
            className="float-right col-md-1"
            disabled={ todoItem.id === editItem.id }
            onClick={ () => this.props.filterTodoItems(todoItem.id) }>
            <FontAwesomeIcon icon={ faTrash } className="text-danger"/>
          </Alert.Link>
        </Alert>
      )
    })
  }

  render() {
    const { editItem, type } = this.props
    const { todoItems } = this.state

    return (
      <div>
        <Row className="justify-content-center">
          <div className="w-100">
            <Card className={`mt-4 ${ todoItems.length === 0 && 'd-none' }`}>
              <Card.Header>{ type }:
                <span className="font-weight-bold">({ todoItems.length })</span>
              </Card.Header>

              <Card.Body>
                { this.loadItems(todoItems, editItem) }
              </Card.Body>
            </Card>
          </div>
        </Row>
      </div>
    )
  }
}

export default LoadTodoItems
