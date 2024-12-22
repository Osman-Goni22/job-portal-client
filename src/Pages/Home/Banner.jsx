import React from 'react';
import { motion } from 'motion/react';
import { easeIn, easeInOut } from 'motion';

import team1 from '../../assets/team.jpg'
const Banner = () => {
    return (
        <div className="hero mb-5 h-min-96 ">
            <div className=" flex flex-col lg:flex-row-reverse items-center">

               
                    <motion.img

                   
                    
                        src="https://i.ibb.co.com/1z9r3NP/young-joyful-business-people-happily-working-laptop-together-group-smiling-men-women-spending-time-m.jpg"
                         animate={{ y:[0, 50,0] }}
                         transition={{ duration:7, delay:2, ease:easeInOut, repeat:Infinity }}
                        className=" rounded-t-[40px] border-l-8 border-b-8 border-blue-400 rounded-br-[40px] w-64 shadow-2xl " />
                    <motion.img

                   
                    
                        src={team1}
                         animate={{ x:[0,50,0] }}
                         transition={{ duration:7, delay:4, ease:easeInOut, repeat:Infinity }}
                        className=" rounded-t-[40px] border-l-8 border-b-8  rounded-br-[40px] w-64 shadow-2xl mt-10" />
              
                <div className='w-1/2'>
                    <motion.h1
                        animate={
                            { x: 50 }
                        }
                        transition={{ duration: 2, delay: 1, ease: easeIn, repeat: Infinity }}

                        className="text-5xl font-bold">Latest <motion.span
                            animate={{ color: ['#eac21a', '#d0d314', '#25af65'] }}
                            transition={
                                { duration: 1.5, delay: 0.5, repeat: Infinity }
                            }
                        > Jobs </motion.span> for You</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;