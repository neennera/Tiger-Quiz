import { useState } from 'react';
import Quiz from './Components/Quiz/Quiz';
import Result from './Components/Result/Result';
import Background from './Components/Quiz/Background';

const App = () => {
  let [result, setResult] = useState('');

  return (
    <main className="min-h-screen flex flex-col font-serif justify-center items-center  bg-primary">
      {result == '' ? (
        <>
          <Background />
          <Quiz setResult={setResult} />
        </>
      ) : (
        <Result result={result} />
      )}
    </main>
  );
};

export default App;
