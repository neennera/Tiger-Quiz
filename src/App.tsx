import { useState } from 'react';
import Quiz from './Components/Quiz/Quiz';
import Result from './Components/Result/Result';
const App = () => {
  let [result, setResult] = useState('');

  return (
    <main className="min-h-screen flex flex-col font-serif justify-center items-center space-x-2 space-y-2 bg-primary">
      {result == '' ? <Quiz setResult={setResult} /> : <Result result={result}/>}
    </main>
  );
};

export default App;
