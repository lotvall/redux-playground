import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import Filters from './components/Filters'


const App = () => {
  return (
    <div>
      <AddTodo />
      <TodoList/>
      <Filters/>
    </div>
  )
}

export default App