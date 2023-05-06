import AppLogo from '../assets/logo.png'
import LandingImage from '../assets/landing.png'
import LoginForm from '../components/LandingPage/LoginForm'
import ThemeToggler from '../components/ThemeToggler'
import RegistrationForm from '../components/LandingPage/RegistrationForm'

const LandingPage = () => {
  return (
    <div
      className="overflow-x-hidden bg-white h-screen
    dark:bg-dark-2"
    >
      <header className="flex flex-row px-8 py-8 justify-between items-center">
        <div className="flex flex-row items-center">
          <img src={AppLogo} className="mr-4 w-12" />
          <h1
            className="text-2xl font-bold
          dark:text-white"
          >
            JobPrep
          </h1>
        </div>
        <ThemeToggler />
      </header>

      <div className="flex flex-row justify-between gap-16 max-lg:flex-col">
        <div
          className="
            pl-64 w-[36rem] flex flex-col align-middle gap-3 pr-8 py-16
            max-xl:pl-32
            max-lg:text-center max-lg:mx-auto max-lg:px-32 max-lg:w-auto pb-0
            max-md:px-16
            "
        >
          <RegistrationForm
            className="
              max-lg:mx-auto"
          />
          {/* <LoginForm
            className="
              max-lg:mx-auto"
          /> */}
        </div>
        <div
          className="
            pr-64 w-screen flex flex-row justify-end 
            max-xl:pr-32 max-xl:justify-start
            max-lg:w-auto max-lg:px-16 max-lg:justify-center max-lg:pb-16"
        >
          <img
            className="h-auto max-w-[64rem] rounded-2xl shadow-2xl 
              max-lg:w-full
              "
            src={LandingImage}
            alt="LandingImage"
          />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
