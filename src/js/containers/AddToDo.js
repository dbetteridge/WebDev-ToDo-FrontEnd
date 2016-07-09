import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../actions/ToDoActions'

let AddToDo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addToDo(input.value, document.getElementById('importanceSelect').value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <select id='importanceSelect'>
          <option value='1'>Normal</option>
          <option value='2'>Important</option>
          <option value='3'>Very Important</option>
        </select>
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddToDo = connect()(AddToDo)

export default AddToDo;
