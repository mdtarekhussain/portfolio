"use client"
import React from 'react';
import CountUp from 'react-countup';
const stats = [
    {
        num : 3,
        text:'Years of Experience'
    },
    {
        num : 15,
        text:'ProJect completed'
    },
 
    {
        num : 5,
        text:'Technologies mastered'
    },
    {
        num : 500,
        text:'Code commits'
    },
]
const Stats = () => {
    return (
      <section className='md:mt-6 pt-4 pb-12 md:pt-0 md:pb-0'>
        <div className="container mx-auto">
            <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto md:max-w-none'>
                {stats.map((item,index) =>{
return <div className='flex-1 flex gap-4  items-center justify-center lg:justify-start' key={index}> 
    <CountUp end={item.num}
    duration={5}
    delay={2}
    className='text-4xl lg:text-6xl font-extrabold' 
    ></CountUp>
    <p className={`${item.text.length < 15 ? "max-w-[100px]" :"max-w-[100px]"} leading-snug text-white/80`}>{item.text}</p>
</div>
                })}
            </div>
        </div>
      </section>
    );
};

export default Stats;