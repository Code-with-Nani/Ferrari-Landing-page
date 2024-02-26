import React from 'react';

import { motion } from 'framer-motion';


const Home = () => {

    return (


        <div className='main h-[90.3vh] w-screen overflow-hidden  bg relative select-none'>

            <div className="content flex flex-col justify-center items-center absolute top-[70%] left-[50%] translate-x-[-50%]">
                <motion.h1 initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, ease:'easeInOut', delay: 1.5}} className='text-white text-[36px] font-[650] leading-[43px]  text-center tracking-widest '>FW24-25 FASHION SHOW</motion.h1>
                <motion.span animate={{ y:[0 , 10 ,0 ] }} transition={{ duration: 1, repeat:Infinity, ease:'easeInOut', delay:3 , repeatDelay:2 }}  className='text-white text-[20px] font-[600] leading-[43px] flex justify-center items-center gap-5 py-10 '>Discover
                    <span className='border-2 rotate-90 border-gray-400 hover:border-red-600 delay-100 duration-300 h-8 w-8 rounded-full flex justify-center items-center'> <svg viewBox="0 0 8 16" className="icon fill-white" width="6" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M7.268 9.547L0 16l4-8-4-8 7.268 6.453C7.715 6.82 8 7.377 8 8c0 .623-.285 1.18-.732 1.547z"></path></svg></span>
                </motion.span>


            </div>

        </div>
    )
}

export default Home
