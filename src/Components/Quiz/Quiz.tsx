const Quiz = () => {
  return(
    <div className="text-2xl w-[80vw] flex flex-col space-y-5">
      <h1 className="text-5xl text-black ">Quiz App</h1>
      <h2>เสือตัวนั้นจ้องประจันหน้ากับคุณ คุณจะ...</h2>
      <hr />
      <div className="w-full h-[30vh] sm:w-[95%] space-y-3 flex flex-col">
        <div className="flex flex-col space-y-4 sm:flex-row justify-between">
          <div className="border-4 rounded-xl hover:bg-primaryDark hover:text-white  border-white w-full sm:w-[25vw] min-h-[60px] flex items-center justify-center"><p>วิ่ง</p></div>
          <div className="border-4 rounded-xl hover:bg-primaryDark hover:text-white  border-white w-full sm:w-[25vw] min-h-[60px] flex items-center justify-center"><p>วิ่ง</p></div>
        </div>
        <div className="flex flex-col space-y-4 sm:flex-row justify-between">
          <div className="border-4 rounded-xl hover:bg-primaryDark hover:text-white  border-white w-full sm:w-[25vw] min-h-[60px] flex items-center justify-center"><p>วิ่ง</p></div>
          <div className="border-4 rounded-xl hover:bg-primaryDark hover:text-white  border-white w-full sm:w-[25vw] min-h-[60px] flex items-center justify-center"><p>วิ่ง</p></div>
        </div>
        
      </div>
      <button className="bg-white min-h-[40px] h-[6vh] rounded-2xl w-[20%]">Next</button>
    </div>
  )
}

export default Quiz;