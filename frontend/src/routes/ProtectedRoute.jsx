import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const ProtectedRoute = ({ children }) => {
  const { token, loggedIn } = useContext(AuthContext)

  if (loggedIn) {
    return children
  }

  return <Navigate to="/login" replace />
}

export default ProtectedRoute
