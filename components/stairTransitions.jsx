"use client"
import React from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const StairTransitions = () => {
    return (
        <AnimatePresence mode='wait'>
            stairTransitions
        </AnimatePresence >
    );
};

export default StairTransitions;