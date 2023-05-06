// AppWrapper.jsx
import React from 'react'
import App from '../App'
import ThemeContextProvider from '../contexts/ThemeContext'

const AppWrapper = () => {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  )
}

export default AppWrapper
