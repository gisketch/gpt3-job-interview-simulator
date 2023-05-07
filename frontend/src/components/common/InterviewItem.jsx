const InterviewItem = ({ index, title, isActive }) => {
  return (
    <button
      className={`flex flex-row w-full pl-8 py-2 my-2 items-center  rounded-xl
    
    ${
      isActive
        ? `
        text-slate-800
        dark:text-gray-300`
        : `
      text-slate-600
      dark:text-gray-500`
    }
    `}
    >
      <div
        className={`mr-4 w-5 h-5 rounded-lg flex items-center justify-center
    
      ${
        isActive
          ? `
          bg-slate-200 text-dark-4
          dark:bg-[#2D3444] dark:text-slate-400`
          : `
          bg-slate-300 text-slate-500
          dark:bg-dark-2 dark:text-dark-4`
      }
    `}
      >
        {index}
      </div>
      {title}
    </button>
  )
}

export default InterviewItem
