import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { UserContext } from '../contexts/UserContext'

const AppPage = () => {
  const { logout } = useContext(AuthContext)
  const { user } = useContext(UserContext)

  return (
    <div>
      App main
      <div>
        Interviews Panel
        <div>
          <ul>{user.interviews.map((interview) => {})}</ul>
        </div>
        <div>{user.name}</div>
        <div>ThemeToggler</div>
      </div>
      <div>
        <h1>Interview</h1>
        {<Outlet />}
      </div>
      <button
        onClick={() => {
          logout(() => {
            console.log('Logged out')
          })
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default AppPage
