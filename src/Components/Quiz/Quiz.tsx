import { useState, SetStateAction } from 'react';
import { Questions } from '../../assets/Questions';
import Tiger from './Tiger';
import ProgessBar from './ProgressBar';
interface Props {
  setResult: React.Dispatch<SetStateAction<string>>;
}
const Quiz = (Props: Props) => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(Questions[index]);
  let [huntScore, setHuntScore] = useState(0);
  let [kindScore, setKindScore] = useState(0);

  const checkAns = (e: React.MouseEvent, ans: number) => {
    setHuntScore((prev) => prev + question.answer[ans].point[0]);
    setKindScore((prev) => prev + question.answer[ans].point[1]);
    next();
  };

  const next = () => {
    if (index === 2) {
      console.log(huntScore, kindScore);

      if (huntScore > 2) {
        Props.setResult('Hunter');
      } else if (kindScore > 2) {
        Props.setResult('Tamer');
      } else {
        Props.setResult('Meat');
      }
    } else {
      setIndex(++index);
      setQuestion(Questions[index]);
    }
  };

  return (
    <div className="text-2xl w-[80vw] flex flex-col space-y-6 sm:space-y-10">
      <ProgessBar index={index} />

      <div className="flex z-0 text-white flex-col space-y-2">
        <h1 className="text-5xl text-black ">Quiz No.{index + 1}</h1>
        <h2>{question.question}</h2>
        <hr />
      </div>

      <div className="w-full h-[40vh] sm:w-[95%] justify-between flex space-y-3 flex-col  sm:flex-row">
        <div className="flex flex-col sm:place-content-between space-y-3">
          <div
            onClick={(e) => {
              checkAns(e, 0);
            }}
            className="backdrop-blur-sm text-white border-4 rounded-xl hover:bg-white hover:text-primaryDark  border-white w-full sm:w-[25vw] min-h-[60px] flex items-center justify-center cursor-pointer"
          >
            <p>{question.answer[0].option}</p>
          </div>
          <div
            onClick={(e) => {
              checkAns(e, 1);
            }}
            className="backdrop-blur-sm text-white border-4 cursor-pointer rounded-xl hover:bg-white hover:text-primaryDark  border-white w-full sm:w-[25vw] min-h-[60px] flex items-center justify-center"
          >
            <p>{question.answer[1].option}</p>
          </div>
        </div>
        <Tiger />
        <div className="flex flex-col sm:place-content-between space-y-3">
          <div
            onClick={(e) => {
              checkAns(e, 2);
            }}
            className="backdrop-blur-sm border-4 rounded-xl hover:bg-white hover:text-primaryDark cursor-pointer border-white w-full text-white sm:w-[25vw] min-h-[60px] flex items-center justify-center"
          >
            <p>{question.answer[2].option}</p>
          </div>
          <div
            onClick={(e) => {
              checkAns(e, 3);
            }}
            className="backdrop-blur-sm  text-white border-4 cursor-pointer rounded-xl hover:bg-white hover:text-primaryDark  border-white w-full sm:w-[25vw] min-h-[60px] flex items-center justify-center"
          >
            <p>{question.answer[3].option}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
