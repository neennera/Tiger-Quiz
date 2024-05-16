import { useState } from 'react';
import Quiz from './Components/Quiz/Quiz';

const App = () => {
  let [result, setResult] = useState("");

  return (
    <main className="min-h-screen flex flex-col font-serif justify-center items-center space-x-2 space-y-2 bg-primary">     
      {result == "" ? <Quiz setResult={setResult} /> : <p>{result}</p>}
    </main>
  );
};

export default App;
