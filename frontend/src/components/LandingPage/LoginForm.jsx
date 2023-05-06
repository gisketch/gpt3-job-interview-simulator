const inputClass = `p-2 rounded-lg border focus:border-blue-500 focus:outline-none
   dark:bg-dark-2 dark:border-dark-4 dark:text-white dark:placeholder-dark-4 dark:focus:border-blue-500
  `

const LoginForm = ({ className }) => {
  return (
    <>
      <h1
        className="
            text-5xl font-bold leading-none text-blue-900
            dark:text-white
            max-md:text-5xl max-md:mx-8"
      >
        Ace Your Interviews with JobPrep
      </h1>
      <p
        className="
            text-blue-950
            dark:text-gray-500
              max-md:mx-8"
      >
        Prepare for your job interviews using our GPT-3 powered simulator.
      </p>
      <form className={`flex flex-col gap-4 py-4 w-72 ${className}`}>
        <input
          className={inputClass}
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <input
          className={inputClass}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <div className="divide-y dark:divide-dark-4">
          <div className="flex flex-col align-middle text-center gap-2 pb-6">
            <button
              className="
          p-2 bg-blue-500 rounded-lg text-white font-bold"
            >
              Sign In
            </button>
            <p className="text-sm font-light text-gray-500">Or</p>
            <button className="p-2 bg-white rounded-lg border flex flex-row justify-center items-center">
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
            Don't have an account?{' '}
            <a
              href="#"
              className="font-bold text-blue-500 
          dark:text-blue-400"
            >
              Sign Up
            </a>
          </p>
        </div>
      </form>
    </>
  )
}

export default LoginForm
