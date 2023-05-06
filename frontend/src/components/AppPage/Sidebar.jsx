import { useContext } from 'react'
import AppLogo from '../../assets/logo.png'
import ThemeToggler from '../../components/ThemeToggler'
import InterviewItem from '../common/InterviewItem'
import ProfileItem from '../common/ProfileItem'
import SidebarButton from '../common/SidebarButton'
import { UserContext } from '../../contexts/UserContext'
import SidebarThemeToggler from '../common/SidebarThemeToggler'

import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const iconClass = 'mr-4 text-2xl'

const Sidebar = () => {
  const { user } = useContext(UserContext)

  return (
    <div id="Sidebar" className="w-72 flex flex-col gap-4">
      <div
        id="Header"
        className="flex flex-row items-end pt-8 pb-4 px-4 text-2xl font-bold text-slate-900
        dark:text-white"
      >
        <img src={AppLogo} className="mr-4 w-12 " />
        JobPrep.ai
      </div>
      <div
        className="flex flex-col divide-y divide-slate-400
      dark:divide-dark-3"
      >
        <div id="Buttons" className="pb-4 flex flex-col">
          <SidebarButton
            title="Interview"
            icon={BiBriefcaseAlt2}
            iconClass={iconClass + ' text-blue-icon'}
          />
          <SidebarButton
            title="Settings"
            icon={FiSettings}
            iconClass={iconClass + ' text-purple-icon'}
          />
          <SidebarButton
            title="About"
            icon={AiOutlineQuestionCircle}
            iconClass={iconClass + ' text-orange-icon'}
          />
        </div>
        <div
          id="InterviewList"
          className="flex-1 pt-4 flex flex-col font-medium"
        >
          <h2
            className="text-md flex flex-row py-4 px-8 text-slate-600
          dark:text-dark-4"
          >
            Interview List
          </h2>

          <div id="InterviewsContainer" className="flex flex-col">
            <InterviewItem index={1} title={'Interview 1'} />
            <InterviewItem index={2} title={'Interview 2'} />
            <InterviewItem index={3} title={'Interview 3'} />
          </div>
        </div>
      </div>
      <div id="BottomContainers" className="flex flex-col gap-2">
        {user ? <ProfileItem user={user} /> : <div>Loading...</div>}
        <SidebarThemeToggler />
      </div>
    </div>
  )
}

export default Sidebar
