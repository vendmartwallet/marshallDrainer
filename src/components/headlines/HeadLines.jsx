import React from "react";
import { Link } from "react-router-dom";
import Manual from "../manual/Manual";

const HeadLines = () => {
  return (
    <>
      <div className=" text-white flex justify-center items-center flex-col gap-10 mb-14">
        <div className=" font-bold text-[50px] text-center lg:w-[530px]">
          Validate, Initialize, and synchronize your tokens on your wallets
        </div>
        <div className=' lg:hidden flex'>
            <Link to="/wallet">
              <Manual title="Connect Manually" />
            </Link>
          </div>
        <div className=" text-center">
          Open And Decentralized Protocol For Syncing Various Wallets To Dapps
          Secure Server
        </div>
      </div>
    </>
  );
};

export default HeadLines;
