import React from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import Manual from '../manual/Manual';

const Navbar = () => {
  return (
    <>
      <div className=" sticky flex pl-3 pr-5 lg:pr- items-center justify-between bg-black h-20 text-white border-b px-[4vw]">
        <Link to='/' className=" text-base lg:text-lg font-semibold">Decentralized LaunchPad</Link>

        <div className=" flex items-center gap-3 lg:gap-5">

         <div className=' flex items-center gap-8'>
         <div>
            <div>
              <Button title="Connect Wallet" />
            </div>
          </div>

          <div className=' hidden lg:flex'>
            <Link to="/wallet">
              <Manual title="Connect Manually" />
            </Link>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
