import { Plus } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'

import logoImage from '../assets/logo.svg'

function Header() {


  return (
    <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
      <img src={logoImage} alt="Imagem da logo do habits" />

      <Dialog.Root>
        <Dialog.Trigger
          className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300'
          type='button'
        >
          <Plus size={20} className='text-violet-500'/>
          Novo hábito
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0'/>
          <Dialog.Content className='absolute p-10 '></Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}

export default Header