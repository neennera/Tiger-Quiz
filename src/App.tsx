import Quiz from "./Components/Quiz/Quiz";

const App = () => {
  return(
    <main className="min-h-screen flex flex-col font-serif justify-center items-center space-x-2 space-y-2 bg-primary">
      <div>
        <p className="text-2xl">1 ใน 3 คำถาม ก่อนหมีจะมา</p>
      </div>
      <Quiz />
    </main>
  )
}

export default App;