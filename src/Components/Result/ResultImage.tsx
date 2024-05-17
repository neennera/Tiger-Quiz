import meat from "./../../assets/Result/meat.png"
import hunter from "./../../assets/Result/hunter.png"
import tamer from "./../../assets/Result/tamer.png"
import back from "./../../assets/Result/back.png"

interface ResultProps {
    result: string;
  }

type ResultType = "Meat" | "Hunter" | "Tamer";

  
const ResultImage = (ResultProps: ResultProps) => {
  const imageMap: Record<ResultType, string> = {
    "Meat": meat,
    "Hunter": hunter,
    "Tamer": tamer,
  };
  const textMap: Record<ResultType, string> = {
    "Meat": "คุณจะพยายามต่อสู้และเกลี่ยกล่อม\nแต่การขาดประสบการณ์\nทำให้คุณกลายเป็นอาหารเสือ",
    "Hunter": "หลังจากกระโจนเข้าไป\nคุณต่อสู้กับเสืออยู่พักใหญ่\nก่อนจะคว้าเอาชัยชนะมาได้",
    "Tamer": "เสือมองมือที่คุณยื่นออกไป\nมันค่อยๆยื่นจมูกมาดมกลื่น\nแล้วยอมให้คุณลูบหัวได้สำเร็จ",
  };
  const resultImg = imageMap[ResultProps.result as ResultType] || "";
  const resultText = textMap[ResultProps.result as ResultType] || "";

  
  console.log(ResultProps.result);
  console.log(resultImg);
  

  return (
    <div className="relative flex text-white flex-col space-y-5 items-center justify-center">
      <p className="text-3xl text-black">คุณคือ... {ResultProps.result}</p>
      <div className="flex text-dark flex-col flip-card h-[40vh] justify-center items-center sm:h-[60vh] w-[50vw] sm:w-[30vw] bg-white rounded-xl">
        <div className="flip-card-inner w-full h-full">
        <div className="flex items-center justify-center text-3xl text-dark flip-card-front"><img src={resultImg} alt="resultPicture" className="object-contain h-[95%] w-[95%]" /></div>
        <div className="flex items-center justify-center  text-2xl text-dark flip-card-back">
        <img src={back} alt="resultPicture" className="object-contain h-[95%] w-[95%]" />
        <p className="absolute text-center text-white text-sm sm:text-lg h w-[50%]">{resultText}</p>
        </div>
        </div>
        <p className="m-2">กดที่ภาพเพื่ออ่านเพิ่มเติม</p>
      </div>
    </div>
  );
};

export default ResultImage;
  