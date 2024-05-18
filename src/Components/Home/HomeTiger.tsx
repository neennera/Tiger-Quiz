import { LeftEye } from '../Quiz/Tiger/LeftEye';
import { RightEye } from '../Quiz/Tiger/RightEye';
import { SideFace } from '../Quiz/Tiger/SideFace';
import { TigerBody } from '../Quiz/Tiger/TigerBody';

export const HomeTiger = () => {
  return (
    <div className="hidden sm:flex sm:w-full sm:h-full items-center justify-center sm:relative">
      <div className="absolute h-[300px] w-[300px] mt-[180px] ml-[100px]">
        <TigerBody />
      </div>
      <div className="absolute mt-[-350px] ml-[-210px] w-[50px] h-[50px]">
        <SideFace />
      </div>
      <div className="absolute mt-[-195px] ml-[-175px] w-[17px] h-[17px]">
        <LeftEye />
      </div>
      <div className="absolute mt-[-230px] ml-[-70px] w-[23px] h-[23px]">
        <RightEye />
      </div>
    </div>
  );
};
