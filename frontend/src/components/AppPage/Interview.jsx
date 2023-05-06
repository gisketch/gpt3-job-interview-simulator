import { useParams } from 'react-router-dom'

const Interview = () => {
  const { id } = useParams()

  return <div>Interview of ID {id.toString()}</div>
}

export default Interview
