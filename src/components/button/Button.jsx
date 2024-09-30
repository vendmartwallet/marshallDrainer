import React from "react";
import { FaWallet } from "react-icons/fa6";

const Button = (props) => {
  return (
    <>
      <div className=" py-3 px-2 lg:py-3 lg:px-8  border-2 hover:bg-white transition duration-700 border-white rounded-full lg:rounded-[25px] flex items-center gap-2 cursor-pointer hover:text-[#5142FC]">
        <div>
          <FaWallet size="20" />
        </div>
        <div className=" text-[12px] font-black lg:text-lg lg:font-normal">{props.title}</div>
      </div>
    </>
  );
};

export default Button;
