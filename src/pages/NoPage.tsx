import Background from "../Components/Quiz/Background"
const NoPage = () => {
    return(
        <main className="min-h-screen overflow-hidden flex flex-col font-serif justify-center items-center">
            <Background />
            <div className="abosolute flex flex-col z-0 w-full h-full items-center justify-center text-3xl text-white space-y-4">
                <p>Opp, This Pages is not found</p>
                <a href="/"><button className="h-[9vh] text-xl m-2 p-2 pl-5 pr-5 border-2 border-white hover:bg-white hover:text-primaryDark cursor-pointer rounded-2xl">Back To Home</button></a>
            </div>
            
        </main>
    )
}

export default NoPage