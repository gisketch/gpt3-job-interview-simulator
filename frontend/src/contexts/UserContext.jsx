import { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { getUser, verifyToken } from '../services/api'

export const UserContext = createContext()

const handleFetchUser = async () => {
  const token = localStorage.getItem('authToken')
  const verifiedData = await verifyToken(token)
  const user = await getUser(token, verifiedData.uid)
  return user.user
}

const UserContextProvider = (props) => {
  const { loggedIn } = useContext(AuthContext)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchAndSetUser = async () => {
      if (loggedIn) {
        const fetchedUser = await handleFetchUser()
        setUser(fetchedUser)
        console.log('Fetched ' + fetchedUser.name)
      }
    }

    fetchAndSetUser()
  }, [loggedIn])

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
