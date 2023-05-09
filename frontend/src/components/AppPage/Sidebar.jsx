import { useContext } from 'react'
import AppLogo from '../../assets/logo.png'
import InterviewItem from './Sidebar/InterviewItem'
import ProfileItem from './Sidebar/ProfileItem'
import SidebarButton from './Sidebar/SidebarButton'
import { UserContext } from '../../contexts/UserContext'
import SidebarThemeToggler from './Sidebar/SidebarThemeToggler'

import { BiBriefcaseAlt2 } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineQuestionCircle } from 'react-icons/ai'

const iconClass = 'mr-4 text-2xl'

const Sidebar = () => {
  const { user } = useContext(UserContext)

  return (
    <div id="Sidebar" className="min-w-[18rem] w-72 flex flex-col gap-4">
      <div
        id="TopContainers"
        className="flex flex-col gap-4 border-b border-b-slate-200 pb-4
        dark:border-b-dark-3"
      >
        <div
          id="Header"
          className="flex flex-row items-end pt-8 pb-4 px-4 text-2xl font-bold text-slate-900
        dark:text-white"
        >
          <img src={AppLogo} className="mr-4 w-12 " />
          JobPrep.ai
        </div>
        <div id="Buttons" className="flex flex-col">
          <SidebarButton
            title="Interview"
            link={'/'}
            icon={BiBriefcaseAlt2}
            iconClass={iconClass + ' text-blue-icon'}
          />
          <SidebarButton
            title="Settings"
            link={'/settings'}
            icon={FiSettings}
            iconClass={iconClass + ' text-purple-icon'}
          />
          <SidebarButton
            title="About"
            link={'/about'}
            icon={AiOutlineQuestionCircle}
            iconClass={iconClass + ' text-orange-icon'}
          />
        </div>
      </div>
      <h2
        className="text-md flex flex-row pt-4 px-8 text-slate-600
          dark:text-dark-4"
      >
        Interview List
      </h2>
      <div id="InterviewList" className="flex flex-col overflow-y-scroll pb-16">
        <div id="InterviewsContainer" className="flex flex-col">
          <InterviewItem index={1} title={'Interview 1'} />
          <InterviewItem index={2} title={'Interview 2'} isActive={true} />
          <InterviewItem index={3} title={'Interview 3'} />
          <InterviewItem index={4} title={'Interview 4'} />
          <InterviewItem index={5} title={'Interview 5'} />
          <InterviewItem index={6} title={'Interview 6'} />
          <InterviewItem index={7} title={'Interview 7'} />
          <InterviewItem index={8} title={'Interview 8'} />
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
