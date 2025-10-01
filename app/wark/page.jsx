"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // কোর CSS
import Image from 'next/image';
import WarkSliderBtns from '@/components/warkSliderBtns';
const projects = [
    {
        num:'01',
        category:'frontend',
        title:'Movie Discovery App ',
        description:"consectetur adipisicing elit. Quaerat, veniam iusto minus assumenda accusamus qui maiores labore vitae,",
        stack:[{name:'React'},{name:'Firebase'},{name:"Node.js"}],
        image:'/assets/work/Screenshot_1.png',
        live:'https://movie-discovery-app-2d2e2.web.app/',
        github:'https://github.com/mdtarekhussain/movie-app-client'
    },
    {
        num:'02',
        category:'frontend',
        title:'Weather App ',
         
        description:"consectetur adipisicing elit. Quaerat, veniam iusto minus assumenda accusamus qui maiores labore vitae,",
        stack:[{name:'React'}, ,{name:"Node.js"},{name:"TaIlwind.css"}],
        image:'/assets/work/Screenshot_2.png',
        live:'https://weather-app-client-zeta.vercel.app/',
        github:'https://github.com/mdtarekhussain/weather-app-client'
    },
    {
        num:'03',
        category:'frontend',
        title:'Project 3 ',
         
        description:"consectetur adipisicing elit. Quaerat, veniam iusto minus assumenda accusamus qui maiores labore vitae,",
        stack:[{name:'Next.js'}, ,{name:"shadcn "},{name:"Tailwind.css"}],
        image:'/assets/work/thumb3.png',
        live:'',
        github:''
    },
    
 
]

const Wark = () => {
    const [project,setProject] = useState(projects[0])
    const handleSlideChange = (swiper)=>{
        const currentIndex = swiper.activeIndex
setProject(projects[currentIndex])
    }
    return (
        <motion.section 
        initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'}}}
        className='min-h-[80vh] flex flex-col justify-center py-12 p-3 lg:px-0'
        >
           <div className='container mx-auto'>
           <div className='flex flex-col lg:flex-row lg:gap-[30px] '>
             <div className='w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none'>
               <div className='flex flex-col gap-[30px] h-[50%]'>
                 <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>{project.num}</div>
               
               <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-[#39e629] transition-all duration-500 capitalize'>{project.category} Project</h2>
               <p className='text-white/60'>{project.description}</p>
               <ul className='flex gap-4'>
                {project.stack.map((item,index)=>{
                    return <li
                    key={index}
                    className='text-xl text'>
                        {item.name}
                        {index !== project.stack.length -1 && ","}
                    </li>
                })}
               </ul>
               <div className='border border-white/30'></div>
               <div className='flex gap-4'>
                {/* Live link */}
                <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                            <BsArrowUpRight className=' text-3xl text-white group-hover:text-[#39e629]'></BsArrowUpRight>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Live Project</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                </Link>
                {/* Git hub */}
                <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                    <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                            <BsGithub className=' text-3xl text-white group-hover:text-[#39e629]'></BsGithub>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Github repository</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                </Link>
               </div>
             </div>
          </div>
          <div className='w-full lg:w-[50%]'>
         <Swiper 
         spaceBetween={30}
         slidesPerView={1}
         className='lg:h-[520px] mb-12'
         onSlideChange={handleSlideChange}
         >
  {projects.map((project, index) => (
    <SwiperSlide key={index} className='w-full'>
        <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>
        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
        <div className='relative w-full h-full'>
            <Image src={project.image} fill className='object-cover' alt='' ></Image>
        </div>
        </div>
   
    </SwiperSlide>
  ))}
  <WarkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none" 
  btnStyles={'bg hover:bg-[#39e629]-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'}
  ></WarkSliderBtns>
</Swiper>

          </div>
           </div>
           </div>
        </motion.section>
    );
};

export default Wark;