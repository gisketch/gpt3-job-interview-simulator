import { useParams } from 'react-router-dom'
import CreateInterview from './CreateInterview'

const Interview = () => {
  const interviewId = useParams()
  const hasId = !!interviewId.id

  return (
    <div id="InterviewWrapper" className="h-full">
      <CreateInterview />
    </div>
  )
}

export default Interview
