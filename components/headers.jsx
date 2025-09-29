import Link from 'next/link';
import React from 'react';
import Nab from './nab';
import { Button } from './ui/button';
import MobileNab from './mobileNab';

const Headers = () => {
    return (
        <header className='py-4 px-4 xl:py-6'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href='/'>
                    <h1 className='text-4xl font-semibold'>
                        Tarek<span className='text-[#50e513] ml-1 text-[50px]'>.</span>
                    </h1>
                </Link>
                
                <div className='hidden md:flex items-center gap-8'>
                    <Nab />
                    <Link href='/contact'>
                        <Button>Hire Me</Button>
                    </Link>
                </div>

               <div className='md:hidden '>
                   <MobileNab />
              </div>

            </div>
        </header>
    );
};

export default Headers;