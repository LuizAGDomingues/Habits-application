import { Check } from 'phosphor-react'
import React from 'react'

function NewHabitForm() {
  return (
    <form className='a'>
      <label htmlFor="title">
        Qual seu comprometimento?
      </label>
      <input 
        type="text"
        id="title"
        placeholder='ex.: Exercícios, dormir bem, etc...'
        autoFocus
      />

      <label htmlFor="">
        Qual a recorrência?
      </label>

      <button type="submit">
        <Check size={20} weight='bold'/>
        Confirmar
      </button>
    </form>
  )
}

export default NewHabitForm