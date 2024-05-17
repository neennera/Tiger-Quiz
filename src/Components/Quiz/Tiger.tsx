// import LeftEye from "../../assets/Tiger/LeftEye.svg"
// import RightEye from '../../assets/Tiger/RightEye.svg'
// import TigerFace from "../../assets/Tiger/TigerFace.svg"

import { LeftEye } from './Tiger/LeftEye';
import { RightEye } from './Tiger/RightEye';
import { TigerFace } from './Tiger/TigerFace';

const Tiger = () => {
  return (
    <div className="flex relative m-0 w-[116px] h-[161px]">
      <TigerFace />
      <LeftEye />
      <RightEye />
    </div>
  );
};

export default Tiger;
