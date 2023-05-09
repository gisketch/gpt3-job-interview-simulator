import { useContext } from 'react'
import JobPrepMascot from '../../assets/jobprepmascot.png'
import { UserContext } from '../../contexts/UserContext'

const DialogBox = ({ isUser }) => {
  const { user } = useContext(UserContext)

  let photo = JobPrepMascot

  if (isUser) {
    photo = user === null ? '' : user.photoURL
  }

  return (
    <>
      <div
        className={`
        relative text-lg p-6 pb-16 m-8 rounded-2xl min-w-[18rem] text-left
        text-slate-700 ${isUser ? 'bg-slate-100' : 'bg-slate-300'}
        dark:text-white ${isUser ? 'dark:bg-dark-3' : 'dark:bg-dark-1'}`}
      >
        Hello! Let's start your job interview! What position would you like to
        apply for?
        <div
          id="PicWrapper"
          className={`
            absolute  translate-y-8 w-full px-6 translate-x-[-1.5rem] flex flex-row
            ${isUser ? 'justify-end' : 'justify-start'}`}
        >
          <div
            id="Picture"
            className={`
          h-16 w-16 rounded-xl overflow-hidden shadow-md`}
          >
            <img
              src={photo}
              className="rounded-inherit"
              alt={isUser ? 'UserPhoto' : ''}
            />
          </div>
        </div>
        <div
          id="Timestamp"
          className={`text-base absolute translate-y-16 w-full font-normal
          text-slate-500
          dark:text-dark-4
          ${isUser ? 'text-left translate-x-[-1rem]' : 'text-right px-8'}`}
        >
          Just now
        </div>
      </div>
    </>
  )
}

export default DialogBox
