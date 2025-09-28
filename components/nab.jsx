"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const links =[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Service',
        path:'/service'
    },
    {
        name:'Resume',
        path:'/resume'
    },
    {
        name:'Wark',
        path:'/wark'
    },
    {
        name:'Contact',
        path:'/contact'
    },
]
const Nab = () => {
    const pathName = usePathname()
    console.log(pathName)
    return <nav className='flex gap-8'>
        {links.map((link,index) =>{
            return <Link href={link.path} key={index} className={`${link.path ===pathName &&"text-[#39e629] pb-1 border-b-2 border-[#39e629]"} capitalize font-medium hover:text-[#39e629] transition-all`}>{link.name}</Link>
        })}
    </nav>
};

export default Nab;