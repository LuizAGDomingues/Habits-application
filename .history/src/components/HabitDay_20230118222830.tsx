import * as Popover from '@radix-ui/react-popover'
import ProgressBar from './ProgressBar'
import clsx from 'clsx'

interface HabitDayProps {
  completed: number
  amount: number
}

function HabitDay({ completed, amount }: HabitDayProps) {
  const completedPercentage = Math.round((completed / amount) * 100)

  return (
    <Popover.Root>
      <Popover.Trigger 
        className={clsx('w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg', {
          'bg-zinc-700': completedPercentage >= 50,
          'bg-zinc-600': completedPercentage >= 25,
          'bg-zinc-500': completedPercentage >= 10,
          'bg-zinc-400': completedPercentage >= 5,
          'bg-zinc-300': completedPercentage >= 2,
          'bg-zinc-200': completedPercentage >= 1,
          'bg-zinc-100': completedPercentage >= 0.5,
        })}
      />
      <Popover.Portal>
        <Popover.Content className='min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col'>
          <span className='font-semibold text-zinc-400'>terça-feira</span>
          <span className='mt-1 font-extrabold leading-tight text-3xl'>17/01</span>

          <ProgressBar progress={completedPercentage} />

          <Popover.Arrow height={8} width={16} className='fill-zinc-900' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default HabitDay