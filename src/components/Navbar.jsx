import React, { useEffect } from 'react';
import logo from "../assests/logo.png";
import { motion } from 'framer-motion';

const Navbar = () => {

  return (
    <>

      <div className='nav h-[75px] w-screen bg-[#01030A] lg:flex justify-between items-center p-[20px] text-gray-50 text-[14px] hidden overflow-hidden select-none'>


        <div className="left flex justify-center items-center gap-12 w-fit">
          <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="logo">
            <img title='Ferrari logo' className='h-[50px] opacity-1' src={logo} alt="" />
          </motion.div>
          <div className="anchor font-[600] tracking-wider">
            <ul className='flex justify-center items-center gap-8'>
              <motion.li initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="cursor-pointer">RACING</motion.li>
              <motion.li initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.5 }} className="cursor-pointer">SPORTS CARS</motion.li>
              <motion.li initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="cursor-pointer">COLLECTIONS</motion.li>
              <motion.li initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.7 }} className="cursor-pointer">EXPERIENCES</motion.li>
              <motion.li initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.8 }} className="cursor-pointer">ABOUT US</motion.li>
            </ul>
          </div>
        </div>

        <div className="right w-fit">
          <ul>
            <motion.li initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 1 }} className="cursor-pointer font-[600] tracking-widest uppercase">Search</motion.li>
          </ul>
        </div>
      </div>
      <div className="sm-nav h-[75px] bg-[#01030A] flex justify-between items-center p-10 text-[16px] text-gray-50 lg:hidden">
        <div className="menu w-fit">
          <ul>
            <motion.li initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="cursor-pointer font-[600] tracking-tight uppercase">Menu</motion.li>
          </ul>
        </div>
        <div className="logo">
          <motion.img initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.4 }} className='h-[42px]' src={logo} alt="" />
        </div>
        <div className="search w-fit">
          <ul>
            <motion.li initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="cursor-pointer font-[600] tracking-tight uppercase">Search</motion.li>
          </ul>
        </div>


      </div>

    </>
  );
}

export default Navbar;


