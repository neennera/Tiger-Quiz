import { useLocalStorage } from "../../lib/useLocalStorage";

const EndingCount = () => {
  const meatLogo = document.getElementById("meatLogo")
  const huntLogo = document.getElementById("huntLogo")
  const kindLogo = document.getElementById("kindLogo")
  const {addItems, getItems} = useLocalStorage("endingCount");

  return (
    <div className="text-lg items-center text-center justify-center space-y-7">
      <div className="flex flex-row items-center justify-between w-[80vw] sm:w-[30vw] text-3xl">
        <div className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] bg-white rounded-full justify-center items-center">
          <p id="meatLogo" className="opacity-60"> 🥩 </p>
        </div>
        <div className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] bg-white rounded-full justify-center items-center">
          <p id="huntLogo" className="opacity-60"> 🏹 </p>
        </div>
        <div className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] bg-white rounded-full justify-center items-center">
          <p id="kindLogo" className="opacity-60"> ❣️ </p>
        </div>
      </div>
      <p>คุณได้พบฉากจบ 0 แบบจาก 3 ฉากจบ</p>

      <button className="h-20 w-10 bg-black text-white" onClick={() => {console.log(getItems());
      }}>See</button>
      <button className="h-20 w-10 bg-black text-white" onClick={() => {addItems('Hunter')}}>Add Hunt</button>
    </div>
  );
};

export default EndingCount;
