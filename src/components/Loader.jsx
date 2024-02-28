import React from 'react'
import logo from "../assests/logo.png";
import { motion } from 'framer-motion';

const Loader = () => {

    function time() {
        let a = 0
        setInterval(function () {
            a = a + Math.floor(Math.random() * 25)
            if (a < 100) {
                document.querySelector("#loader").innerHTML = a + "%"
            } else {
                a = 100
                document.querySelector("#loader").innerHTML = a + "%"
            }

        }, 150)
    };
    time();







    return (
        <motion.div animate={{ top: -1000 }} transition={{ duration: 1, delay: 2 }} className='h-[100vh] bg-[#01030A] fixed top-0 left-0 bottom-0 right-0 z-[999] flex justify-center items-center flex-col gap-10'>

            
            <motion.img initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1.5, delay: 0.5 }} className='h-[120px] opacity-1' src={logo} alt="" />
            <h1 id='loader' className="text-white text-center  scale-150 text-2xl">0%</h1>
        </motion.div>
    )
}

export default Loader
