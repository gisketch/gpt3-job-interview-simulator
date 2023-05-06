import { useContext, useState } from 'react'
import { register, signIn, signInWithGoogle } from '../../services/auth'
import LoadingSpinner from '../common/LoadingSpinner'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

const inputClass = `p-2 rounded-lg border focus:border-blue-500 focus:outline-none
   dark:bg-dark-2 dark:border-dark-4 dark:text-white dark:placeholder-dark-4 dark:focus:border-blue-500
  `

const LoginForm = ({ className }) => {
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isLogin, setIsLogin] = useState(true)

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      const token = await signIn(user.email, user.password)
      login(token, () => {
        setIsLoading(false)
        navigate('/')
      })
    } catch (err) {
      setIsLoading(false)
      setError(err.message)
    }
  }

  const handleRegistration = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      const token = await register(
        user.email,
        user.password,
        `${user.firstName} ${user.lastName}`
      )
      login(token, () => {
        setIsLoading(false)
        navigate('/')
      })
    } catch (err) {
      setIsLoading(false)
      setError(err.message)
    }
  }

  const handleGoogleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      const token = await signInWithGoogle()
      login(token, () => {
        setIsLoading(false)
        navigate('/')
      })
    } catch (err) {
      setIsLoading(false)
      setError(err.message)
    }
  }

  return (
    <>
      <h1
        className="
            text-5xl font-bold leading-none text-blue-900
            dark:text-white
            max-md:text-5xl max-md:mx-8"
      >
        {isLogin ? 'Ace Your Interviews with JobPrep' : 'Create an Account'}
      </h1>
      <p
        className="
            text-blue-950
            dark:text-gray-500
              max-md:mx-8"
      >
        {isLogin
          ? 'Prepare for your job interviews using this GPT-3 powered job interview simulator.'
          : 'Sign up now and start practicing for your interviews with JobPrep.'}
      </p>
      <form className={`flex flex-col gap-4 py-4 w-72 ${className}`}>
        <div
          className={`
          border p-2 rounded-md border-red-300 bg-red-100 text-red-800 text-sm
          dark:bg-opacity-30 dark:bg-red-400 dark:text-red-200 dark:border-red-950
          ${error !== null ? '' : 'hidden'}`}
        >
          {error}
        </div>

        {isLoading ? (
          <div className="w-100 flex flex-row justify-center">
            <LoadingSpinner
              className={'text-2xl text-blue-800 opacity-75 dark:text-white'}
            />
          </div>
        ) : null}

        {isLogin ? null : (
          <>
            <input
              className={inputClass}
              type="text"
              name="firstName"
              placeholder="First Name"
              onChange={handleInputChange}
              required
            />
            <input
              className={inputClass}
              type="text"
              name="lastName"
              placeholder="Last Name"
              onChange={handleInputChange}
              required
            />
          </>
        )}
        <input
          className={inputClass}
          type="email"
          name="email"
          placeholder="E-mail"
          onChange={handleInputChange}
          required
        />
        <input
          className={inputClass}
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          required
        />
        <div className="divide-y dark:divide-dark-4">
          <div className="flex flex-col align-middle text-center gap-2 pb-6">
            <button
              type="submit"
              onClick={isLogin ? handleLogin : handleRegistration}
              className="
          p-2 bg-blue-500 rounded-lg text-white font-bold"
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>
            <p className="text-sm font-light text-gray-500">Or</p>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="p-2 bg-white rounded-lg border flex flex-row justify-center items-center"
            >
              <img
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
                className="w-4 mr-2"
              />
              Google
            </button>
          </div>
          <p
            className="
          font-light text-center pt-4 text-gray-500
        dark:text-gray-500
        "
          >
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <a
              onClick={() => {
                setError(null)
                setIsLoading(false)
                setIsLogin(!isLogin)
              }}
              className="font-bold text-blue-500 cursor-pointer
          dark:text-blue-400"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </a>
          </p>
        </div>
      </form>
    </>
  )
}

export default LoginForm
