import { useParams } from 'react-router-dom'

const Interview = () => {
  const interviewId = useParams()
  const hasId = !!interviewId.id

  return <div>Interview</div>
}

export default Interview
