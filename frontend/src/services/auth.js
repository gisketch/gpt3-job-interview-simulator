import firebase from 'firebase/compat/app'
import { loginUser, registerUser, getUser } from './api'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import 'firebase/compat/auth'

import firebaseConfig from '../secret/firebaseConfig'

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

const signIn = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    )
    const user = userCredential.user
    const idToken = await user.getIdToken()

    await loginUser(idToken, user.uid, user.email)

    return idToken
  } catch (error) {
    console.log(error)
    throw new Error('Login failed: ' + error.message)
  }
}

const googleProvider = new GoogleAuthProvider()

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider)
    const { accessToken, uid, email, displayName } = res.user

    const user = await getUser(accessToken, uid)

    if (!user.registered) {
      console.log('Registering new user from Google!.')
      await registerUser(accessToken, uid, email, displayName)
      console.log('Registered!.')
      return accessToken
    } else {
      console.log('User already registered. Logging in.')
      return accessToken
    }
  } catch (err) {
    console.error(err)
    alert(err.message)
  }
}

const register = async (email, password, displayName) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    )
    const user = userCredential.user
    await user.updateProfile({ displayName })
    const idToken = await user.getIdToken()

    await registerUser(idToken, user.uid, user.email, user.displayName)
    return idToken
  } catch (error) {
    throw new Error('Registration failed: ' + error.message)
  }
}

const signOut = async () => {
  try {
    await auth.signOut()
  } catch (error) {
    throw new Error('Sign out failed: ' + error.message)
  }
}

export { signIn, register, signInWithGoogle, signOut }
