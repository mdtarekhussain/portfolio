"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import { BsArrowDownRight } from "react-icons/bs"
const services =[
    {
        num: "01",
        title : ' Web Development',
        description:"I am a full-stack web developer. Proficient in modern technologies including React, Node.js, MongoDB, and JavaScript. My goal is to build scalable, high-performance, and user-centric applications",
        href:''
    },
    {
        num: "02",
        title : ' UI/UX Design',
        description:"I am a full-stack web developer. Proficient in modern technologies including React, Node.js, MongoDB, and JavaScript. My goal is to build scalable, high-performance, and user-centric applications",
        href:''
    },
    {
        num: "03",
        title : ' Logo Design',
        description:"I am a full-stack web developer. Proficient in modern technologies including React, Node.js, MongoDB, and JavaScript. My goal is to build scalable, high-performance, and user-centric applications",
        href:''
    },
    {
        num: "04",
        title : ' SEO',
        description:"I am a full-stack web developer. Proficient in modern technologies including React, Node.js, MongoDB, and JavaScript. My goal is to build scalable, high-performance, and user-centric applications",
        href:''
    },
    
]
const Service = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 px-4 md:py-0 '>
           <div className='container mx-auto'>
             <motion.div 
             initial={{opacity:0}}
             animate={{
                opacity:1,
                transition:{delay:2.4,duration:0.4, ease:"easeIn"}
             }}
             className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
             >
              {services.map((service,index)=>{
                return (
                    <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                        <div className='w-full flex justify-between items-center'>
                            <div className='text-5xl text-outline text-transparent group-hover:text-outline-hover font-extrabold transition-all duration-500'>
                                {service.num}
                                
                            </div>
    <Link
  href={service.href}
  className='w-[70px] h-[70px] rounded-full bg-white transition-all duration-500 flex justify-center items-center group-hover:bg-[#39e629] group-hover:-rotate-45'
>
  <BsArrowDownRight className='text-3xl text-primary' />
</Link>


                                
                        </div>
                        <h2  className='text-[42px] font-bold leading-none text-white transition-all duration-500 group-hover:text-[#39e629] '>{service.title}</h2>
                        <p className='text-white/60'>{service.description}</p>
                        <div className='border-b border-white/20 w-full'></div>
                    </div>
                )
              })}
           
             </motion.div>
           </div>
        </section >
    );
};

export default Service;