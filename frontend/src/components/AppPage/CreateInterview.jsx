import DialogBox from '../common/DialogBox'
import PromptInput from '../common/PromptInput'

const CreateInterview = () => {
  return (
    <div
      id="CreateInterviewWrapper"
      className="text-center flex flex-col justify-end items-center flex-1"
    >
      {/* <div className="text-4xl font-medium flex flex-col gap-2">
        <h1>Simulate a Job Interview</h1>
        <span>for a position of </span>
        <input
          className="
            bg-transparent font-normal text-center border-black 
            focus:outline-none"
          type="text"
          name="prompt"
          placeholder="Job Position..."
        />
      </div>
      <div id="UploadForm">
        <div className="border border-slate-800 p-4 rounded-xl flex flex-col gap-4">
          <h2 className="text-xl">Upload your resume</h2>
          <input type="file" />
          <p>Drag and drop your file {'(.pdf)'}</p>
        </div>
      </div>
      <button className="text-2xl bg-blue-icon text-white p-4 w-72 rounded-xl">
        Simulate
      </button> */}
      <DialogBox />
      <DialogBox isUser={true} />
      <PromptInput />
    </div>
  )
}

export default CreateInterview
