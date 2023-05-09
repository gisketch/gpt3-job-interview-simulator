import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeContext'
import { BsSun, BsMoon } from 'react-icons/bs'

const buttonClass =
  'z-100 flex flex-row items-center gap-2 justify-center flex-1 my-1 rounded-xl'

const SidebarThemeToggler = () => {
  const { isLightMode, toggleLightMode } = useContext(ThemeContext)
  const handleClick = () => {
    toggleLightMode()
  }
  return (
    <div
      className={`px-1 mx-2 flex flex-row justify-center rounded-2xl bg-slate-200 gap-1 drop-shadow-lg h-14 relative
      dark:bg-dark-2`}
      onClick={handleClick}
    >
      <div
        className={`z-[-100] absolute bottom-1 h-[85%] w-1/2 bg-slate-300 rounded-xl transition-transform duration-300 ease-in-out 
        dark:bg-dark-1
        ${isLightMode ? 'translate-x-[-47%]' : 'translate-x-[47%]'}`}
      ></div>
      <button
        className={
          buttonClass +
          (isLightMode ? ' text-dark-4' : 'text-slate-800 dark:text-dark-4')
        }
      >
        <span>
          <BsSun
            className={
              'text-xl ' +
              (isLightMode ? ' text-dark-4' : 'text-slate-800 dark:text-dark-4')
            }
          />
        </span>
        <span>Light</span>
      </button>
      <button
        className={
          buttonClass +
          (!isLightMode ? ' text-white' : 'text-slate-800 dark:text-dark-4')
        }
      >
        <span>
          <BsMoon
            className={
              'text-xl ' +
              (!isLightMode ? ' text-white' : 'text-slate-800 dark:text-dark-4')
            }
          />
        </span>
        <span>Dark</span>
      </button>
    </div>
  )
}

export default SidebarThemeToggler
