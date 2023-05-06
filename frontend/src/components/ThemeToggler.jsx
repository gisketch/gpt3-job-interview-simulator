import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggler = () => {
  const { isLightMode, toggleLightMode } = useContext(ThemeContext)

  const handleClick = () => {
    toggleLightMode()
  }

  return (
    <button
      className={`text-2xl text-dark-2 dark:text-white`}
      onClick={handleClick}
    >
      {isLightMode ? <FaMoon /> : <FaSun />}
    </button>
  )
}

export default ThemeToggler
