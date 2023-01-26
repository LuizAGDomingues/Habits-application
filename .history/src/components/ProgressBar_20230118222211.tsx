
interface ProgressBarProps {
  progress: number
}

function ProgressBar(props: ProgressBarProps) {
  return (
    <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
      <div 
        role='progressbar'
        className='h-3 rounded-xl bg-violet-600 w-3/4'
        aria-label='Progresso de hábitos completados nesse dia'
        aria-valuenow={props.progress}
      />
    </div>
  )
}

export default ProgressBar