import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  const initialIsLightMode =
    localStorage.getItem('isLightMode') === 'true' ? true : false

  const [isLightMode, setIsLightMode] = useState(initialIsLightMode)

  const toggleLightMode = () => {
    // Store the new isLightMode value in localStorage
    localStorage.setItem('isLightMode', !isLightMode)
    setIsLightMode(!isLightMode)
  }

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
