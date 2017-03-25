import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETED_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions'
import { FETCH_TODOS_ING, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from '../actions/actions'
const { SHOW_ALL } = VisibilityFilters

let id = 0

function visibilityFilter(state = SHOW_ALL, action) {
  switch(action.type) {
    case SET_VISIBILITY_FILTER: {
      return action.filter
    }

    default: {
      return state
    }
  }
}

let todosInitial = {
  isFetching: false,
  success: true,
  items: []
}

function todos(state = todosInitial, action) {
  switch(action.type) {
    case ADD_TODO: {
      return {
        isFetching: false,
        success: true,
        items: [
          ...state.items,
          {
            text: action.text,
            completed: false,
            id: ++id
          }
        ]
      }
    }
    case COMPLETED_TODO: {
      return {
        isFetching: false,
        success: true,
        items: state.items.map((item) => {
          if(item.id === action.id) {
            return {
              text: item.text,
              completed: !item.completed,
              id: item.id
            }
          }
          return item
        })
      }
    }
    case FETCH_TODOS_ING: {
      return Object.assign({}, state, {
        isFetching: true,
        success: true
      })
    }
    case FETCH_TODOS_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        success: true
      })
    }
    case FETCH_TODOS_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false,
        success: false
      })
    }
    default: {
      return state
    }
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp

