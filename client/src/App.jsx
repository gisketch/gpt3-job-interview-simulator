import { useState } from 'react';
import UploadForm from './components/UploadForm';
import { signIn, register, signOut } from './services/auth';
import './App.css';

function App() {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(user.email, user.password);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    register(user.email, user.password, user.displayName);
  };

  return (
    <>
      <h3>TEST</h3>
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="displayName">Name</label>
        <input
          type="text"
          id="displayName"
          onChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              displayName: e.target.value,
            }))
          }
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={(e) =>
            setUser((prevState) => ({ ...prevState, email: e.target.value }))
          }
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) =>
            setUser((prevState) => ({ ...prevState, password: e.target.value }))
          }
        />
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <button type="submit" onClick={handleRegister}>
          Register
        </button>
      </form>

      <div>
        <h4>Upload Resume</h4>
        <UploadForm />
      </div>
    </>
  );
}

export default App;
