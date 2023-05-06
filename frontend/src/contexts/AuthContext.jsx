import { createContext, useState, useEffect } from 'react'
import { verifyToken } from '../services/api'
import { signOut } from '../services/auth'

export const AuthContext = createContext()

const saveToken = (token) => {
  localStorage.setItem('authToken', token)
}

const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('authToken')
  const [token, setToken] = useState(initialToken)
  const [loggedIn, setLoggedIn] = useState(!!initialToken)

  useEffect(() => {
    const checkToken = async () => {
      if (token) {
        const isValid = await verifyToken(token)
        if (isValid) {
          setLoggedIn(true)
        } else {
          localStorage.removeItem('authToken')
          setToken(null)
          setLoggedIn(false)
        }
      }
    }

    checkToken()
  }, [])

  const login = (newToken, callback) => {
    localStorage.setItem('authToken', newToken)
    setLoggedIn(true)
    setToken(newToken)
    if (callback) callback()
  }

  const logout = (callback) => {
    localStorage.removeItem('authToken')
    setLoggedIn(false)
    setToken(null)
    signOut()
    if (callback) callback()
  }

  return (
    <AuthContext.Provider value={{ token, loggedIn, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
