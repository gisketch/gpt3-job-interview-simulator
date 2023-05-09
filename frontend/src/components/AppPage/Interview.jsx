import { useParams } from 'react-router-dom'
import CreateInterview from './CreateInterview'
import PromptInput from '../common/PromptInput'

const Interview = () => {
  const interviewId = useParams()
  const hasId = !!interviewId.id

  return (
    <div id="InterviewWrapper" className="h-full flex flex-col">
      <header
        id="Header"
        className={`
          py-4 px-8 text-xl font-medium border-b-2
          border-b-slate-300 text-slate-800
          dark:border-b-dark-4 dark:text-white`}
      >
        Simulate a Job Interview
      </header>
      <CreateInterview />
    </div>
  )
}

export default Interview
