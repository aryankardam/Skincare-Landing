import { useEffect } from "react";
import { motion } from "framer-motion";

const LandingPage = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // tell App.jsx to remove landing
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed top-0 left-0 w-full h-full bg-[#2D3B36] flex items-center justify-center z-50"
    >
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[#EFF5E1] text-[40px] md:text-[60px] font-inter font-light text-center px-4"
      >
        Skincare That Cares — As Much as You Do
      </motion.h1>
    </motion.div>
  );
};

export default LandingPage;
