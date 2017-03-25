import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters, getTodosFromNetwork } from '../actions/actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { dispatch, visibleTodos, visibilityFilter } = this.props
    return(
      <div>
        <AddTodo onAddTodoClick={
          text => dispatch(addTodo(text))
        } onGetTodosFromNetworkClick={
          () => dispatch(getTodosFromNetwork())
        } />
        <TodoList todos={ visibleTodos }
         onToggleClick={ (id) => dispatch(completeTodo(id)) } />
        <Footer filter={ visibilityFilter }
         onFilterClick={ (filter) => dispatch(setVisibilityFilter(filter)) } />
      </div>
    )
  }
}

function selectTodos(todos, filter) {
  switch(filter) {
    case VisibilityFilters.SHOW_ALL: {
      return todos
    }
    case VisibilityFilters.SHOW_COMPLETED: {
      return Object.assign({}, todos, {
        items: todos.items.filter(item => item.completed)
      })
    }
    case VisibilityFilters.SHOW_ACTIVE: {
      return Object.assign({}, todos, {
        items: todos.items.filter(item => !item.completed)
      })
    }
  }
}

function select(state) {
  return {
    visibleTodos: selectTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  }
}

export default connect(select)(App)
