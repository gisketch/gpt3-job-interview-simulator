import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const AppPage = () => {
  const { logout } = useContext(AuthContext)

  return (
    <div>
      App main
      <div>
        Interviews Panel
        <div>
          <ul>
            <li>interview1</li>
            <li>interview1</li>
            <li>interview1</li>
          </ul>
        </div>
        <div>Name Profile</div>
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
