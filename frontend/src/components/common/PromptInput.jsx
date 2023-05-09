const PromptInput = () => {
  return (
    <>
      <div
        className="relative mx-8 mt-8 mb-4 w-[48rem]
       border-black"
      >
        <input
          type="text"
          name="prompt"
          className={`
        p-4 rounded-lg bg-transparent outline-none border-2 w-full
        border-slate-400 text-slate-700
        dark:border-dark-4 dark:placeholder-dark-4 dark:text-white`}
          placeholder="Type your response here"
        />
      </div>
      <p
        className={`
      text-xs text-center mb-4 mx-8
      text-slate-500
      dark:text-dark-4`}
      >
        JobPrep is using GPT-3 and may produce inaccurate information about
        people, places, or facts.
      </p>
    </>
  )
}

export default PromptInput
