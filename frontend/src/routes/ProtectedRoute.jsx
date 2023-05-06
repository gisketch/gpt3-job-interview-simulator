import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isAuthenticated, children }) => {
  if (isAuthenticated) {
    return children
  }

  return <Navigate to="/login" replace />
}

export default ProtectedRoute
