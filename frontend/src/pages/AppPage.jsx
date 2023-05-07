import Sidebar from '../components/AppPage/Sidebar'
import { Outlet } from 'react-router-dom'

const AppPage = () => {
  return (
    <div className="bg-slate-300 h-full dark:bg-dark-1 w-screen">
      <div
        id="AppContainer"
        className="flex flex-row w-full mx-auto gap-4 h-screen p-4 min-h-[720px]"
      >
        <Sidebar />

        <div
          id="Wrapper"
          className="flex-1 h-auto bg-slate-200  rounded-3xl dark:bg-dark-2"
        >
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AppPage
