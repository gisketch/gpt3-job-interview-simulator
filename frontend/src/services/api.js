import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/users'

export const loginUser = async (token, uid, email) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      { uid, email },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error('Error logging in user:', error)
    throw error
  }
}

export const registerUser = async (token, uid, email, name) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/register`,
      { uid, email, name },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    return response.data
  } catch (error) {
    console.error('Error registering user:', error)
    throw error
  }
}

export const getUser = async (uid) => {
  try {
    const response = await axios.get(`${BASE_URL}/${uid}`)
    return response.data
  } catch (error) {
    console.error('Error fetching user.', error)
    throw error
  }
}

export const verifyToken = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/verify`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })

    const data = await response.json()

    if (data.verified) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error('Error verifying token:', error)
    return false
  }
}
