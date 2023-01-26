import * as Popover from '@radix-ui/react-popover'

function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className='w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg'/>
      <Popover.Portal>
        <Popover.Content className='min-w-[320px]'>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default HabitDay