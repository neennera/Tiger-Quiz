import meat from './../../assets/Result/meat.png';
import hunter from './../../assets/Result/hunter.png';
import tamer from './../../assets/Result/tamer.png';
import back from './../../assets/Result/back.png';

interface ResultProps {
  result: string;
}

type ResultType = 'Meat' | 'Hunter' | 'Tamer';

const ResultImage = (ResultProps: ResultProps) => {
  const imageMap: Record<ResultType, string> = {
    Meat: meat,
    Hunter: hunter,
    Tamer: tamer,
  };
  const textMap: Record<ResultType, string> = {
    Meat: 'คุณจะพยายามต่อสู้และเกลี่ยกล่อม\nแต่การขาดประสบการณ์\nทำให้คุณกลายเป็นอาหารเสือ',
    Hunter:
      'หลังจากกระโจนเข้าไป\nคุณต่อสู้กับเสืออยู่พักใหญ่\nก่อนจะคว้าเอาชัยชนะมาได้',
    Tamer:
      'เสือมองมือที่คุณยื่นออกไป\nมันค่อยๆยื่นจมูกมาดมกลื่น\nแล้วยอมให้คุณลูบหัวได้สำเร็จ',
  };
  const resultImg = imageMap[ResultProps.result as ResultType] || '';
  const resultText = textMap[ResultProps.result as ResultType] || '';

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = resultImg;
    link.download = `${resultImg}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative flex text-white flex-col space-y-5 items-center justify-center">
      <p className="text-3xl text-black">คุณคือ... {ResultProps.result}</p>
      <div className="flex text-dark flex-col flip-card h-[60vh] justify-center items-center lg:h-[50vh] w-[70vw] lg:w-[30vw] bg-white rounded-xl">
        <div className="flip-card-inner w-full h-full">
          <div className="flex items-center justify-center text-3xl text-dark flip-card-front">
            <img
              src={resultImg}
              alt="resultPicture"
              className="object-contain h-[95%] w-[95%]"
            />
          </div>
          <div className="flex items-center justify-center  text-2xl text-dark flip-card-back">
            <img
              src={back}
              alt="resultPicture"
              className="object-contain h-[95%] w-[95%]"
            />
            <p className="absolute text-center text-white text-sm sm:text-lg h w-[50%]">
              {resultText}
            </p>
          </div>
        </div>
        <p className="m-2">กดที่ภาพเพื่ออ่านเพิ่มเติม</p>
      </div>

      <div className="flex items-center flex-col sm:flex-row">
        <a>
          <button
            onClick={downloadImage}
            className="h-[9vh] text-xl m-2 p-2 pl-5 pr-5 border-2 border-white hover:bg-white hover:text-primaryDark cursor-pointer rounded-2xl"
          >
            บันทึกภาพ
          </button>
        </a>
        <a href="./">
          <button className="h-[9vh] text-xl m-2 p-2 pl-5 pr-5 border-2 border-white hover:bg-white hover:text-primaryDark cursor-pointer rounded-2xl">
            ทำใหม่อีกรอบ
          </button>
        </a>
      </div>
    </div>
  );
};

export default ResultImage;
