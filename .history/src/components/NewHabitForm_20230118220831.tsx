import { Check } from 'phosphor-react'
import React from 'react'

function NewHabitForm() {
  return (
    <form className='w-full flex flex-col mt-6'>
      <label htmlFor="title" className='font-s'>
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