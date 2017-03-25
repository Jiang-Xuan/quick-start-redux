import React, { Component, PropTypes } from 'react'

class TodoList extends Component {
  render() {
    const { todos, onToggleClick } = this.props
    return (
      <ul>
        {
          todos.items.map((item, index) => {
            return (
              <li key={ index } onClick={ () => onToggleClick(item.id) }
                style={{
                  backgroundColor: item.completed ? 'yellow': 'white',
                  cursor: item.completed ? 'default': 'pointer'
                }}
              >
                { item.text }
              </li>
            )
          })
        }
        {
          todos.isFetching ? <li>加载中...</li> : ''
        }
        {
          todos.success ? '' : <li>加载失败:(</li>
        }
      </ul>
    )
  }
}

export default TodoList