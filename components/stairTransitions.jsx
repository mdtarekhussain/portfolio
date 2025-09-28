"use client"
import { usePathname } from "next/navigation";
import { AnimatePresence,motion } from "framer-motion";
import Stairs from './stairs';

const StairTransitions = () => {
    const pathName = usePathname();
    return (
       <>
        <AnimatePresence mode="wait">         
             <div  key={pathName}>
                   <div                    
                   className='h-screen w-screen fixed top-0 left-0 right-0 z-40 flex pointer-events-none'
                >
                    
                    <Stairs />
                </div>
             </div>
           
        </AnimatePresence>
        </>
    );
};

export default StairTransitions;