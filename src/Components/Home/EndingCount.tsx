const EndingCount = () => {
  return (
    <div className="text-lg items-center text-center justify-center space-y-7">
      <div className="flex flex-row items-center justify-between w-[80vw] sm:w-[30vw] text-3xl">
        <div className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] bg-white rounded-full justify-center items-center">
          <p className="opacity-60"> 🥩 </p>
        </div>
        <div className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] bg-white rounded-full justify-center items-center">
          <p className="opacity-60"> 🏹 </p>
        </div>
        <div className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] bg-white rounded-full justify-center items-center">
          <p className="opacity-60"> ❣️ </p>
        </div>
      </div>
      <p>คุณได้พบฉากจบ 0 แบบจาก 3 ฉากจบ</p>
    </div>
  );
};

export default EndingCount;
