import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {
  const [isLightMode, setIsLightMode] = useState(true)
  const toggleLightMode = () => setIsLightMode(!isLightMode)

  return (
    <ThemeContext.Provider value={{ isLightMode, toggleLightMode }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
