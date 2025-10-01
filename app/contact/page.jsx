"use client"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
const info =[
    {
        icon:<FaPhoneAlt></FaPhoneAlt>,
        title:'Phone',
        description:"(+88) 019 28 65 88 00"
    },
    {
        icon:<FaEnvelope/>,
        title:'email',
        description:"tarekhussainmd02@gmail.com"
    },
    {
        icon:<FaMapMarkerAlt/>,
        title:'Address',
        description:"Pomgaon,Monohorganj,Cumilla"
    },
    {
        icon:<FaPhoneAlt/>,
        title:'Phone',
        description:"(+88) 019 28 65 88 00"
    },
]
const Contact = () => {
    return (
        <motion.section
        initial={{opacity:0}}
        animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'}}}
        >
          <div className='container mx-auto '>
            <div className='flex flex-col lg:flex-row gap-[30px]'>
{/* form */}
                <div className='lg:h-[54%] px-3 pb-4 order-2 lg:order-none'>
                    <form action="" className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'> 
                        <h1 className='text-4xl text'>Let's work together</h1>
                        <p className='text-white/60'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab laborum deserunt, magnam eius incidunt quidem cum alias</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <Input type='firstName' placeholder="Fist Name"/>
                            <Input type='lastName' placeholder="Last Name"/>
                            <Input type='email' placeholder="Email address"/>
                            <Input type='phone' placeholder="Phone Number"/>
                        </div>
                        <Textarea className={'h-[100px]'} placeholder="Type your message here"/>
                        <Button size={'md'} className={"max-w-40"}>Send message</Button>
                    </form>
                </div>
                {/* info */}

               <div className='flex-1 flex items-center lg:justify-end order-1 lg:order-none mb-8 lg:mb-0'> 
    <ul className='flex flex-col gap-6 w-full max-w-md px-4 lg:px-0'>
        {info.map((item, index) => (
            <li key={index} className='flex items-start gap-3 sm:gap-4'>
                <div className='w-[36px] h-[36px] sm:w-[42px] sm:h-[42px] lg:w-[72px] lg:h-[72px] bg-[#27272c] text rounded-md flex items-center justify-center flex-shrink-0'>
                    <div className='text-[20px] sm:text-[24px] lg:text-[30px]'>{item.icon}</div>
                </div>
                <div className='flex-1 min-w-0'>
                    <p className='text-white/60 text-xs sm:text-sm lg:text-base truncate'>{item.title}</p>
                    <h1 className='text-base sm:text-lg lg:text-xl break-words'>{item.description}</h1>
                </div>
            </li>
        ))}
    </ul>
</div>
            </div>

          </div>
        </motion.section>
    );
};

export default Contact;