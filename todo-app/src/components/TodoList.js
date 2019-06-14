import React from 'react'
import { connect } from 'react-redux'
import {toggleTodo, VisibilityFilters} from '../actions'


const getVisibleTodos = (todos, filter) => {
  switch(filter) {
    case(VisibilityFilters.SHOW_ALL):
      return todos
    case(VisibilityFilters.SHOW_COMPLETED) :
      return todos.filter(todo => todo.completed === true)
    case(VisibilityFilters.SHOW_ACTIVE):
      return todos.filter(todo => todo.completed === false)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const TodoList = ({dispatch, todos}) => {

  console.log(todos)

  return (
    <div>
    
    <h2>Todos</h2>

    {
      todos.map(todo => {
        return (
          <div key={todo.id} 
            onClick={()=> dispatch(toggleTodo(todo.id))}
          >
            <li style={{
                textDecoration: todo.completed ? 'line-through' : 'none'
              }}> {todo.text} 
            </li>
          </div>
        )
      })
    }
    
    </div>
  )

}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
    
  });
export default connect(mapStateToProps)(TodoList)