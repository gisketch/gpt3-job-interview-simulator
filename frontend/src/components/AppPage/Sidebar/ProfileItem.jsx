import { AuthContext } from '../../../contexts/AuthContext'
import { useContext } from 'react'

const ProfileItem = ({ props, user }) => {
  const { logout } = useContext(AuthContext)

  const photoURL = user.photoURL

  return (
    <div
      className="p-2 m-2 flex flex-col rounded-2xl bg-slate-200 gap-2 drop-shadow-lg
    dark:bg-dark-2"
    >
      <div className="flex flex-row py-2 px-2 gap-2">
        <div
          id="ProfilePic"
          className="bg-dark-3 w-12 h-12 rounded-3xl overflow-hidden"
        >
          <img src={photoURL} className="rounded-inherit" />
        </div>
        <div className="flex flex-col ">
          <span
            className="text-md font-bold text-slate-900
          dark:text-gray-200"
          >
            {user.name}
          </span>
          <span
            className="text-xs text-slate-500
          dark:text-gray-500"
          >
            {user.email}
          </span>
        </div>
      </div>
      <div
        className="border border-slate-400 p-2 rounded-xl text-center text-slate-500
       hover:cursor-pointer hover:drop-shadow-lg
       dark:text-gray-300 dark:border-dark-3
       dark:hover:border-dark-4"
        onClick={() => {
          logout(() => {
            console.log('Logged out!')
          })
        }}
      >
        Log out
      </div>
    </div>
  )
}

export default ProfileItem
