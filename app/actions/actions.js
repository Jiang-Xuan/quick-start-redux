/*
 *
 * actions type
 * action的常量,全部大写
 * 
 */

export const ADD_TODO = Symbol('ADD_TODO')

export const COMPLETED_TODO = Symbol('COMPLETED_TODO')

export const SET_VISIBILITY_FILTER = Symbol('SET_VISIBILITY_FILTER')

// 获取TODO时的状态
export const FETCH_TODOS_ING = Symbol('FETCH_TODOS_ING')
export const FETCH_TODOS_SUCCESS = Symbol('FETCH_TODOS_SUCCESS')
export const FETCH_TODOS_FAILURE = Symbol('FETCH_TODOS_FAILURE')

/*
 *
 * action常量的集合采用单词首字母大写
 * 
 */

export const VisibilityFilters = {
  SHOW_ALL: Symbol('SHOW_ALL'),
  SHOW_ACTIVE: Symbol('SHOW_ACTIVE'),
  SHOW_COMPLETED: Symbol('SHOW_COMPLETED')
}

/*
 *
 * action Creator
 * action Creator采用驼峰式写法
 * 
 */

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

export function completeTodo(id) {
  return {
    type: COMPLETED_TODO,
    id
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
}

export function setFetchTodoIng() {
  return {
    type: FETCH_TODOS_ING
  }
}

export function setFetchTodoSuccess() {
  return {
    type: FETCH_TODOS_SUCCESS
  }
}

export function setFetchTodoFailure() {
  return {
    type: FETCH_TODOS_FAILURE
  }
}

export function getTodosFromNetwork() {
  return dispatch => {
    dispatch(setFetchTodoIng())
    return fetch('http://120.27.120.83:3001/http/post').then(response => {
      return response.json()
    })
    .then(res => {
      dispatch(setFetchTodoSuccess())
      dispatch(addTodo(res.randomString))
    })
    .catch(err => {
      dispatch(setFetchTodoFailure())
      console.log(err)
    })
  }
}

