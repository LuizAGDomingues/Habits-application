import { Plus } from 'phosphor-react'
import { useState } from 'react'
import logoImage from '../assets/logo.svg'

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)


  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logoImage} alt="Imagem da logo do habits" />
      <button
        className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300'
        type='button'
        onClick={handleModal}
      >
        <Plus size={20} className='text-violet-500'/>
        Novo hábito
      </button>
    </div>
  )
}

export default Header