// import LeftEye from "../../assets/Tiger/LeftEye.svg"
// import RightEye from '../../assets/Tiger/RightEye.svg'
// import TigerFace from "../../assets/Tiger/TigerFace.svg"

import { LeftEye } from './Tiger/LeftEye';
import { RightEye } from './Tiger/RightEye';
import { TigerFace } from './Tiger/TigerFace';
import Arm from './Tiger/Arm';

const Tiger = () => {
  return (
    <div className="hidden sm:flex sm:w-full sm:h-full items-center justify-center sm:relative">
      <TigerFace />
      <div className="absolute mt-[65px] ml-[45px] w-[19px] h-[19px] sm:h-[40px] sm:w-[40px] sm:mt-[-20px] sm:ml-[-100px]">
        <LeftEye />
      </div>
      <div className="absolute mt-[80px] ml-[95px] w-[19px] h-[19px] sm:h-[44px] sm:w-[40px] sm:mt-[35px] sm:ml-[81px]">
        <RightEye />
      </div>
      <div className="absolute mt-[80px] ml-[95px] w-[50px] h-[50px] sm:h-[150px] sm:w-[140px] sm:mt-[-170px] sm:ml-[-200px]">
        <Arm />
      </div>
    </div>
  );
};

export default Tiger;
