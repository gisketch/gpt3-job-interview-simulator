import Sidebar from '../components/AppPage/Sidebar'
import Interview from '../components/AppPage/Interview'

const AppPage = () => {
  return (
    <div className="bg-slate-300 h-screen dark:bg-dark-1 p-4">
      <div
        id="AppContainer"
        className="flex flex-row w-full max-w-screen-xl mx-auto gap-4"
      >
        <Sidebar />
        <Interview />
      </div>
    </div>
  )
}

export default AppPage
