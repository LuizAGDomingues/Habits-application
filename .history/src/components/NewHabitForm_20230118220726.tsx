import React from 'react'

function NewHabitForm() {
  return (
    <form>
      <label htmlFor="title">
        Qual seu comprometimento?
      </label>
      <input 
        type="text"
        id="title"
        placeholder='ex.: Exercícios, dormir bem, etc...'
        autoFocus
      />

      <label htmlFor=""></label>
    </form>
  )
}

export default NewHabitForm