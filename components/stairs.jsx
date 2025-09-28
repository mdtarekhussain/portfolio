import { motion, animate } from 'framer-motion';

const stairsAnimation = {
  initial: { top: "0%" },
  animate: { top: "100%" },
  exit: { top: ["100%", "0%"] },
};

const reverseIndex = (index) => {
  const totalSteps = 10;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairsAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reverseIndex(index) * 0.1,
          }}
          className='h-full w-full bg-white relative'
          
        />
      ))}
    </>
  );
};

export default Stairs;
