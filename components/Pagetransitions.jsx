"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const routeNames = {
  "/": "Home",
  "/service": "My Service",
  "/resume": "Resume",
  "/wark": "Wark",
  "/contact": "Contact",
};

const PageTransitions = ({ children }) => {
  const pathname = usePathname();
  const [showOverlay, setShowOverlay] = useState(true);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const routeName = routeNames[pathname] || "Portfolio";
    setShowOverlay(true);
    setTypedText("");

    let i = 0;
    let currentText = "";

    const typingInterval = setInterval(() => {
      currentText += routeName.charAt(i);
      setTypedText(currentText);
      i++;

      if (i >= routeName.length) {
        clearInterval(typingInterval);
      }
    }, 60);

    const overlayDuration = pathname === "/" ? 2200 : 1800;
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, overlayDuration);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(timer);
    };
  }, [pathname]);

  return (
    <>
      {/* Page content with animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.4, ease: "easeInOut" } }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {/* Overlay with typing animation */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="overlay"
            className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900 via-black to-gray-900 z-[9999] flex items-center justify-center"
            initial={{ y: "100%" }}
            animate={{ y: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, transition: { delay: 0.3, duration: 0.5 } }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
              className="text-white text-2xl md:text-4xl font-semibold tracking-widest text-center"
            >
              <span className="text-green-400">{typedText}</span>
              <span className="animate-blink text-green-400">|</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageTransitions;
