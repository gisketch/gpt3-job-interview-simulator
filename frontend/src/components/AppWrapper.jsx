// AppWrapper.jsx
import React from 'react'
import App from '../App'
import ThemeContextProvider from '../contexts/ThemeContext'
import AuthContextProvider from '../contexts/AuthContext'
import UserContextProvider from '../contexts/UserContext'

const AppWrapper = () => {
  return (
    <AuthContextProvider>
      <UserContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </UserContextProvider>
    </AuthContextProvider>
  )
}

export default AppWrapper
