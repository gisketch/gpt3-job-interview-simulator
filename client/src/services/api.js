import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/users';

export const loginUser = async (token, uid, email) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, { uid, email }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error logging in user:', error);
    throw error;
  }
};

export const registerUser = async (token, uid, email, name) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, { uid, email, name }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};
