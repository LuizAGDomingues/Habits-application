import * as Popover from '@radix-ui/react-popover'

function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className=""/>
      <Popover.Portal>
        <Popover.Content className=''>

        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default HabitDay