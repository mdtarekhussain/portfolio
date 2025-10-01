"use client"
import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs} from 'react-icons/fa'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from 'framer-motion';
import {SiTailwindcss,SiNextdotjs} from 'react-icons/si'
import { ScrollArea } from '@/components/ui/scroll-area';
import { TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Tooltip } from '@radix-ui/react-tooltip';
const about = {
  title: "About me",
  description:
    "I am a passionate and detail-oriented web developer with 4+ years of experience in building responsive and user-friendly web applications. My expertise lies in technologies like React, Next.js, Tailwind CSS, Node.js, and MongoDB. I enjoy solving problems through clean and efficient code, and I'm always open to learning new tools to stay updated with modern web development trends.",
  info: [
    {
         fieldName:'Name',
          fieldValue:'MD Tarek Hossain' 
        },
    {
      fieldName: "Phone",
      fieldValue: "+880 1928-658800",
    },
    {
      fieldName: "Experience",
      fieldValue: "4+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "tarekhussain.dev",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladesh",
    },
    {
      fieldName: "Email",
      fieldValue: "tarekhussainmd02@gmail.com",
    },
    {
      fieldName: "Freelancer",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Bangla,English",
    },
  ],
};
const experience = {
    icon:'/assets/resume/badge.svg',
    title:'My experience',
  description: "I have 3+ years of experience as a front-end developer, working on real-world projects using React, Next.js, and modern web technologies. I focus on clean code and building user-friendly, responsive interfaces.",


    items:[
        {
            company:'Tech Solutions Inc.',
            position:'Front-end Developer',
            duration:'2024 - Present'
        },
        {
            company:'Web Design Studio',
            position:'Front-end Developer Intern',
            duration:'Summer 2024'
        },
        {
            company:'E-commerce Startup.',
            position:'Freelancer Web Developer',
            duration:'2022 - 2023'
        },
        {
            company:'Teach Academy.',
            position:'Teaching Assistant',
            duration:'2021 '
        },
    ]

}
const education = {
    icon:'/assets/resume/cap.svg',
    title:'My education',
description: "I have gained my web development knowledge through online learning platforms and self-study. I completed structured courses from Codecademy, attended bootcamps, and practiced regularly by building real-world projects. My focus was on front-end technologies like HTML, CSS, JavaScript, React, and Next.js. Although I don't have a traditional university degree in computer science, I am confident in my practical skills and problem-solving ability."

,


    items:[
        {
            institution:'Online Course Platform',
            degree:'Front-end Development Bootcamp',
            duration:'2024'
        },
        {
            institution:'Codecademy',
            degree:'Front-end Track',
            duration:'2024'
        },
        {
            institution:'Codecademy',
            degree:'Front-end Track',
            duration:'2023'
        },
        {
            institution:'Online Course',
            degree:'Programming Course',
            duration:'2022'
        },
       
    ]

}
const skills = {
    title :'My skill',
     description: "I have 3+ years of experience as a front-end developer, working on real-world projects using React, Next.js, and modern web technologies. I focus on clean code and building user-friendly, responsive interfaces.",
     skillList:[
        {
            icon:<FaHtml5></FaHtml5>,
            name:'html 5'
        },
        {
            icon:<FaCss3></FaCss3>,
            name:'css 3'
        },
        {
            icon:<FaJs></FaJs>,
            name:'javaScript'
        },
        {
            icon:<FaReact></FaReact>,
            name:'react'
        },
        {
            icon:<SiNextdotjs></SiNextdotjs>,
            name:'next.js'
        },
        {
            icon:<SiTailwindcss></SiTailwindcss>,
            name:'tailwindcss'
        },
        {
            icon:<FaNodeJs></FaNodeJs>,
            name:'node js'
        },
        {
            icon:<FaFigma></FaFigma>,
            name:'figma'
        },
        
       
     ]
}
const Resume = () => {
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{delay:2.4, duration:0.4,ease:'easeIn'}
        }}
        className='min-h-[80vh] md:mt-10 flex items-center justify-center py-12 md:py-0'
        
        >
            <div className='container mx-auto'>
                <Tabs defaultValue={'experience'}
                className={'flex flex-col px-5 lg:flex-row gap-[60px]'}
                >
                    <TabsList className=
                    {'flex flex-col w-full max-w-[380px]  mx-auto lg:mx-0 gap-6'}>
                        <TabsTrigger value='experience' >Experience</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About me</TabsTrigger>
                    </TabsList>

                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value='experience' className={'w-full h-full'}>
                           <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                            <h1 className='text-4xl text font-bold'>{experience.title}</h1>
                            <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>{experience.description}</p>
                            <ScrollArea className={'h-[200px]'}>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-9 '>
                                    {experience.items.map((item,index)=>{
                                        return <li key={index} 
                                        className='bg-[#232329] h-[184px] py-6 px-2 rounded-xl flex flex-col justify-center items-center  gap-1'
                                        >
                                            <span className='text'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center '>{item.position}</h3>
                                            <div className='flex items-center gap-2'>
                                                <span className='w-[10px] h-[10px] rounded-full bg'></span>
                                                <p>{item.company}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>

                           </div>
                            </TabsContent>
                             {/*education  */}
                        <TabsContent value='education' className={'w-full h-full'}>
                        <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                            <h1 className='text-4xl text font-bold'>{education.title}</h1>
                            <p className='max-w-[600px] text-white/60 mx-auto lg:mx-0'>{education.description}</p>
                            <ScrollArea className={'h-[200px]'}>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-9 '>
                                    {education.items.map((item,index)=>{
                                        return <li key={index} 
                                        className='bg-[#232329] h-[184px] py-6 px-2 rounded-xl flex flex-col justify-center items-center  gap-1'
                                        >
                                            <span className='text'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center '>{item.degree}</h3>
                                            <div className='flex items-center gap-2'>
                                                <span className='w-[10px] h-[10px] rounded-full bg'></span>
                                                <p>{item.institution}</p>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </ScrollArea>

                           </div>
                            </TabsContent> 
                            {/* skill */}
                        <TabsContent value='skills' className={'w-full h-full'}>
                         <div
                         className='flex flex-col gap-[30px]'
                         >
                            <div className='flex flex-col gap-[30px] text-center lg:text-left'>
                                <h3 className='text text-4xl font-bold'>{skills.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto text-center lg:text-left lg:mx-0'>{skills.description}</p>

                            </div>
                            <ul className='grid grid-cols-2  sm:text-center lg:text-left mt-3 md:grid-cols-4 gap-[20px]'>
                                {skills.skillList.map((item,index)=>{
                                    return <li key={index}>
                                      <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className={'w-full h-[150px] bg-[#232329] rounded-xl  flex justify-center items-center group'}>
                                                <div className='text-6xl group-hover:text-[#39e629] transition-all duration-300'>
                                                    {item.icon}
                                                </div>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                               <p className='capitalize'> {item.name}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                      </TooltipProvider>
                                    </li>
                                })}
                            </ul>

                         </div>
                            </TabsContent> 
                            {/* about */}
                        <TabsContent value='about' className={'w-full text-center lg:text-left'}>
                          <div className='flex flex-col gap-[30px]'>
                            <h3 className='text-4xl text font-black'>{about.title}</h3>
                            <p className='max-w-[600px]  mx-auto text-white/60 lg:mx-0'>{about.description}</p>
                          <ul className='grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-3 max-w-[620px] mx-auto md:mx-0'>
  {about.info.map((item, index) => {
    return (
      <li
        key={index}
        className='flex text-left justify-start gap-4' // fixed alignment
      >
        <span className='text-white/60 min-w-[80px]'>{item.fieldName}</span>
        <span className='text-xl break-all'>{item.fieldValue}</span>
      </li>
    );
  })}
</ul>

                          </div>
                            </TabsContent> 

                    </div>
                </Tabs>

            </div>
         
        </motion.div>
    );
};

export default Resume;