import { useState, SetStateAction } from 'react';
import { Questions } from '../../assets/Questions';
import Tiger from './Tiger';
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
    <div className="text-2xl w-[80vw] flex flex-col space-y-5">
      <div>
        <p className="text-2xl">{index + 1} ใน 3 คำถาม ก่อนหมีจะมา</p>
      </div>

      <h1 className="text-5xl text-black ">Quiz No.{index + 1}</h1>
      <h2>{question.question}</h2>
      <hr />
      <div className="w-full h-[30vh] sm:w-[95%] justify-between flex flex-row ite,s">
        <div className="flex flex-col space-y-4">
          <div
            onClick={(e) => {
              checkAns(e, 0);
            }}
            className="border-4 rounded-xl hover:bg-primaryDark hover:text-white  border-white w-full sm:w-[25vw] min-h-[60px] flex items-center justify-center cursor-pointer"
          >
            <p>{question.answer[0].option}</p>
          </div>
          <div
            onClick={(e) => {
              checkAns(e, 1);
            }}
            className="border-4 cursor-pointer rounded-xl hover:bg-primaryDark hover:text-white  border-white w-full sm:w-[25vw] min-h-[60px] flex items-center justify-center"
          >
            <p>{question.answer[1].option}</p>
          </div>
        </div>
        <Tiger />
        <div className="flex flex-col space-y-4">
          <div
            onClick={(e) => {
              checkAns(e, 2);
            }}
            className="border-4 rounded-xl hover:bg-primaryDark cursor-pointer hover:text-white  border-white w-full sm:w-[25vw] min-h-[60px] flex items-center justify-center"
          >
            <p>{question.answer[2].option}</p>
          </div>
          <div
            onClick={(e) => {
              checkAns(e, 3);
            }}
            className="border-4 cursor-pointer rounded-xl hover:bg-primaryDark hover:text-white  border-white w-full sm:w-[25vw] min-h-[60px] flex items-center justify-center"
          >
            <p>{question.answer[3].option}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
