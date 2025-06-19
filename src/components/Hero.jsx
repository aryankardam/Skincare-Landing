import React from "react";
import { motion } from "framer-motion";
import product1 from "../assets/plum.jpg";
import mainImage from "../assets/main1.png";

const Hero = () => {
  return (
    <section className="relative bg-[#EFF5E1] overflow-hidden min-h-screen pt-28 pb-12">
      {/* Big Background Text */}
      <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-[20vw] font-bold text-[#2D3B36] opacity-100 leading-none select-none pointer-events-none z-0">
        SKINCARE
      </h1>

      {/* Left Vertical Text */}
      <div className="absolute font-inter top-32 left-4 text-xs uppercase tracking-wider rotate-[-90deg] origin-left text-gray-500">
        Natural glow for delicate skin
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center gap-12">
        {/* Top Row: Paragraph, Heading, Image */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-6 px-4 lg:px-0">
          {/* Paragraph with animation */}
          <motion.p
            className="max-w-sm text-gray-800 text-center lg:text-left font-inter text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {"Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          {/* Heading */}
          <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[72px] font-bold text-[#2D3B36] leading-tight font-inter text-center">
            <span className="block md:hidden">GLOWWWW</span>
            <span className="hidden md:block">GLOW</span>
             NATUR-<br /> ALLY
          </h2>

          {/* Image */}
          <div>
            <img
              src={product1}
              alt="Product"
              className="w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[222px] md:h-[220px] object-cover rounded-[20px] shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* CTA Button */}
          <div>
            <button className="font-inter px-6 py-3 bg-[#1F1F1F] text-white rounded-full hover:bg-[#333] transition duration-300">
              Shop Now
            </button>
          </div>

          {/* Main Image with Positioned Card */}
          <div className="relative inline-block">
            {/* Main Image */}
            <img
              src={mainImage}
              alt="Main photo"
              className="max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-md rounded-xl shadow-lg"
            />

            {/* Card Positioned at Bottom */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[300px] sm:w-[340px] md:w-[376px] h-[100px] rounded-[200px] bg-[#EFF5E1] flex items-center shadow-md px-4 gap-4">
              <img
                src={product1}
                alt="Product"
                className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] rounded-[110px] object-cover"
              />
              <p className="text-sm text-gray-800 font-inter font-medium">
                While giving you an invigorating cleansing experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
