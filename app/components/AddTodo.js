import React, { Component, PropTypes } from 'react'

class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type="text" ref={ dom => this.input = dom } />
        <button onClick={ (e) => this.handleTodo(e) }>Add Todo</button>
        <button onClick={ (e) => this.network(e) }>Get todos from network.</button>
      </div>
    )
  }

  handleTodo(e) {
    const text = this.input.value.trim()
    if(!text) {
      return
    }
    this.props.onAddTodoClick(text)
    this.input.value = ''
  }

  network(e) {
    this.props.onGetTodosFromNetworkClick()
  }
}

export default AddTodo