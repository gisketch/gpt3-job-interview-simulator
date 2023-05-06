const SidebarButton = ({ title, icon: Icon, iconClass }) => {
  return (
    <button
      className={`
      text-md flex flex-row w-full pl-8 py-4 text-slate-800 font-medium rounded-2xl
    dark:text-gray-400
      ${/*'bg-gradient-to-r from-[#2D3444] to-[#36343C]'*/ ''}`}
    >
      {Icon && <Icon className={iconClass} />}
      {title}
    </button>
  )
}

export default SidebarButton
