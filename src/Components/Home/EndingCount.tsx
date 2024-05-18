import { useEffect, useState } from 'react';
import { useLocalStorage } from '../../lib/useLocalStorage';

const EndingCount = () => {
  const { getItems } = useLocalStorage('endingCount');
  const [count, setCount] = useState(3);
  const ending = getItems();

  useEffect(() => {
    const meatLogo = document.getElementById('meatLogo');
    const hunterLogo = document.getElementById('hunterLogo');
    const tamerLogo = document.getElementById('tamerLogo');

    setCount(3);

    if (!ending['Meat']) {
      meatLogo?.classList.add('opacity-30');
      setCount((prev) => prev - 1);
    }
    if (!ending['Hunter']) {
      hunterLogo?.classList.add('opacity-30');
      setCount((prev) => prev - 1);
    }
    if (!ending['Tamer']) {
      tamerLogo?.classList.add('opacity-30');
      setCount((prev) => prev - 1);
    }
  });

  return (
    <div className="text-lg items-center text-center justify-center space-y-7">
      <div className="flex flex-row items-center justify-between w-[80vw] sm:w-[30vw] text-3xl">
        <div
          id="meatLogo"
          className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] bg-white rounded-full justify-center items-center"
        >
          <p> 🥩 </p>
        </div>
        <div
          id="hunterLogo"
          className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] bg-white rounded-full justify-center items-center"
        >
          <p> 🏹</p>
        </div>
        <div
          id="tamerLogo"
          className="flex h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] bg-white rounded-full justify-center items-center"
        >
          <p> ❣️ </p>
        </div>
      </div>

      <p>คุณได้พบฉากจบ {count} แบบจาก 3 ฉากจบ</p>
    </div>
  );
};

export default EndingCount;
