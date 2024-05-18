import EndingCount from '../Components/Home/EndingCount';
import Background from '../Components/Quiz/Background';
const NoPage = () => {
  return (
    <main className="min-h-screen overflow-hidden flex flex-col font-serif justify-center items-center">
      <Background />
      <div className="abosolute flex flex-col z-0 pl-10 pr-10 w-full h-full items-start text-xl sm:text-3xl text-white space-y-7 ">
        <p className="text-5xl font-bold">Survive The Tiger</p>
        <div className="text-lg sm:w-[35vw]">
          <p>
            เว็บไซต์นี้ได้รับแรงบันดาลจาก แบบทดสอบค้นหาฝ่ายใน กวศ.67
            <span className="font-semibold underline text-yellow-200">
              {' '}
              <a href="https://apply.intania.org">ลองเล่นได้ที่นี่</a>
            </span>
          </p>
          <p>ผู้สร้างได้ชื่นชอบเนื้อหาส่วนที่นักเดินทางเจอเสือในเกาะมาก</p>
          <p>จึงได้ต่อยอดไอเดียนั้นสู่ interactive quiz เอาตัวรอดจากเสือ</p>
        </div>
        <EndingCount />
        <div className="flex items-center justify-center w-[80vw] sm:w-[30vw]">
          <a href="/quiz">
            <button className="h-[9vh] backdrop-blur-sm text-xl m-2 pl-10 pr-10 border-2 border-white hover:bg-white hover:text-primaryDark cursor-pointer rounded-2xl">
              Take A Quiz
            </button>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NoPage;
