import { NavLink, useLocation } from 'react-router-dom'

const SidebarButton = ({ title, link, icon: Icon, iconClass }) => {
  const location = useLocation()

  const isActive = location.pathname === link

  return (
    <NavLink
      to={link}
      className={`
      text-base flex flex-row w-full pl-8 py-3 my-1 rounded-2xl
      hover:bg-gradient-to-r hover:from-[#dee7ff77] hover:to-[#e2e2ff77] hober:drop-shadow-sm
    dark:hover:from-[#2D344477] dark:hover:to-[#36343C77]
      ${
        isActive
          ? `bg-gradient-to-r from-[#dee7ffaa] to-[#e2e2ffaa] drop-shadow-md text-slate-800 font-medium
          dark:from-[#2D3444AA] dark:to-[#36343CAA] dark:text-gray-300`
          : 'text-slate-600 dark:text-gray-500'
      }`}
    >
      {Icon && <Icon className={iconClass} />}
      {title}
    </NavLink>
  )
}

export default SidebarButton
