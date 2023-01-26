import * as Popover from '@radix-ui/react-popover'

function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className='w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg'/>
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <Popover.Arrow h className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default HabitDay