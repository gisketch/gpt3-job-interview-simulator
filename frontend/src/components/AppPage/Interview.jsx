import { useParams } from 'react-router-dom'

const Interview = () => {
  const { id } = useParams()

  return (
    <div
      id="Interview"
      className="flex-1 h-auto bg-slate-200  rounded-3xl dark:bg-dark-2"
    ></div>
  )
}

export default Interview
