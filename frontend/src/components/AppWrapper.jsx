// AppWrapper.jsx
import React from 'react'
import App from '../App'
import ThemeContextProvider from '../contexts/ThemeContext'
import AuthContextProvider from '../contexts/AuthContext'

const AppWrapper = () => {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </AuthContextProvider>
  )
}

export default AppWrapper
