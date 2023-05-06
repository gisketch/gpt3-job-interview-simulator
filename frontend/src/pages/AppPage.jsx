import { Outlet } from 'react-router-dom'

const AppPage = () => {
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
    </div>
  )
}

export default AppPage
