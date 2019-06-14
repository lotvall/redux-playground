import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const ENTER_KEY = 13

const AddTodo = ({dispatch}) => {

  const [ text, setText ] = useState("")

  return (
    <div>
        <input 
          onChange={ (e)=> setText(e.target.value) }
          onKeyDown= {(e) => {
                    if (e.keyCode === ENTER_KEY) {
                        if (!text || !text.trim()) {
                            return
                        }
                        console.log(text)
                        dispatch(addTodo(text))
                        setText("")
                    }
                }}
          value={text}
          />
    </div>
  )
}

export default connect()(AddTodo)