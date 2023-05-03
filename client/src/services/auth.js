import firebase from 'firebase/compat/app';
import { loginUser, registerUser } from './api';
import 'firebase/compat/auth';

import firebaseConfig from '../secret/firebaseConfig';

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

const signIn = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    const user = userCredential.user;
    const idToken = await user.getIdToken();

    await loginUser(idToken, user.uid, user.email);

    console.log(idToken);

    return userCredential.user;
  } catch (error) {
    throw new Error('Login failed: ' + error.message);
  }
};

const register = async (email, password, displayName) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const user = userCredential.user;
    await user.updateProfile({ displayName });
    const idToken = await user.getIdToken();

    await registerUser(idToken, user.uid, user.email, user.displayName);

    return userCredential.user;
  } catch (error) {
    throw new Error('Registration failed: ' + error.message);
  }
};

const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    throw new Error('Sign out failed: ' + error.message);
  }
};

export { signIn, register, signOut };
