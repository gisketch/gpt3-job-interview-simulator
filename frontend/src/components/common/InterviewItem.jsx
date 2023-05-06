const InterviewItem = ({ index, title }) => {
  return (
    <button
      className="text-md flex flex-row w-full pl-8 py-4 items-center text-slate-800
    dark:text-gray-400"
    >
      <div
        className="mr-4 bg-slate-200 w-7 h-7 rounded-lg text-slate-600 flex items-center justify-center
    dark:bg-dark-2 dark:text-dark-4"
      >
        {index}
      </div>
      {title}
    </button>
  )
}

export default InterviewItem
