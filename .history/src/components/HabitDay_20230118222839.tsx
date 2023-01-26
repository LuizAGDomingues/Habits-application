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
          'bg-violet-700': completedPercentage >= 50,
          'bg-violet-600': completedPercentage >= 25,
          'bg-violet-500': completedPercentage >= 10,
          'bg-violet-400': completedPercentage >= 5,
          'bg-violet-300': completedPercentage >= 2,
          'bg-violet-200': completedPercentage >= 1,
          'bg-violet-100': completedPercentage >= 0.5,
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