
const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

function SummaryTable() {
  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((weekDay, i) => {
          return (
            <div key={`${weekDay}-${i}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
              {weekDay}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-row gap-3">
        <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg"></div>
      </div>
    </div>
  )
}

export default SummaryTable