import { useState } from 'react';
import Quiz from '../Components/Quiz/Quiz';
import Result from '../Components/Result/Result';
import Background from '../Components/Quiz/Background';

const QuizPage = () => {
  let [result, setResult] = useState('');

  return (
    <main className="min-h-screen overflow-hidden flex flex-col font-serif justify-center items-center">
      <Background />
      {result == '' ? (
        <Quiz setResult={setResult} />
      ) : (
        <Result result={result} />
      )}
    </main>
  );
};

export default QuizPage;
