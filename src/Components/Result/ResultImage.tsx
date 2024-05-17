interface ResultProps {
    result: string;
  }
  
  const ResultImage = (ResultProps: ResultProps) => {
    return (
      <div className="relative flex text-white flex-col space-y-5 items-center justify-center">
        <p className="text-3xl text-black">คุณคือ... {ResultProps.result}</p>
        <div className="h-[50vh] sm:h-[60vh] w-[50vw] sm:w-[30vw] bg-white rounded-xl">
        </div>
      </div>
    );
  };
  
  export default ResultImage;
  