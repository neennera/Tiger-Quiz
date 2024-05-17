import ResultImage from "./ResultImage";
interface ResultProps {
  result: string;
}

const Result = (ResultProps: ResultProps) => {
  return (
    <div className="absolute flex text-white flex-col space-y-3 items-center justify-center min-h-screen">
      <ResultImage result={ResultProps.result}/>

      <div className="flex items-center flex-col sm:flex-row">
        <a href="/">
          <button className="h-[9vh] text-xl m-2 p-2 pl-5 pr-5 border-2 border-white hover:bg-white hover:text-primaryDark cursor-pointer rounded-2xl">
            บันทึกภาพ
          </button>
        </a>
        <a href="/">
          <button className="h-[9vh] text-xl m-2 p-2 pl-5 pr-5 border-2 border-white hover:bg-white hover:text-primaryDark cursor-pointer rounded-2xl">
            ทำใหม่อีกรอบ
          </button>
        </a>
      </div>
    </div>
  );
};

export default Result;
