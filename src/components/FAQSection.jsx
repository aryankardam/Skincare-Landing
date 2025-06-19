import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import leftbtn from "../assets/left-arrow.png";
import rightBtn from "../assets/right-arrow.png";
import cartImg from "../assets/cart.png";
import backgroundImg from "../assets/coverImg.png";
import supportImg from "../assets/product3.jpg";
import iconImg from "../assets/contact.png";
import { productData } from "../data/productData";

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer:
      "We offer a 30-day return policy for all unused products with original packaging.",
  },
  {
    question: "Are your products cruelty-free?",
    answer:
      "Absolutely! All our products are cruelty-free, and most are vegan.Check individual product details for specific .",
  },
  {
    question: "What’s your return policy?",
    answer:
      "We offer a 30-day return policy for all unused products with original packaging.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Shipping typically takes 3–7 business days depending on your location.",
  },
  {
    question: "How do i choose the right product?",
    answer: "Shipping typically takes 3–7 business days depending on your location.",
  },
];

const BestSellingProducts = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#EFF5E1] w-full py-20 px-4 sm:px-6">
      {/* Top Section */}
      <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="w-[290px] h-[60px] border border-black rounded-full bg-[#EFF5E1] flex items-center px-6 space-x-4 shadow-md">
          <div className="w-[20px] h-[20px] bg-[#2D3B36] rounded-full"></div>
          <span className="text-gray-700 font-medium text-base">
            Best Selling Products
          </span>
        </div>
        <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-tight text-gray-900 text-center lg:text-left max-w-[678px]">
          Skincare That Brings Out <br /> Your Natural Radiance
        </h1>
        <div className="flex items-center gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-[60px] h-[60px] rounded-full border border-gray-300 flex items-center justify-center shadow-md hover:bg-gray-200 transition"
          >
            <img src={leftbtn} alt="Left Button" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-[60px] h-[60px] rounded-full border border-gray-300 flex items-center justify-center shadow-md hover:bg-gray-200 transition"
          >
            <img src={rightBtn} alt="Right Button" />
          </button>
        </div>
      </div>

      {/* Scrollable Product Cards */}
      <div
        ref={scrollRef}
        className="mt-20 w-full overflow-x-auto scroll-smooth snap-x snap-mandatory px-2"
      >
        <div className="flex gap-8 w-max">
          {productData.map((product, index) => (
            <div
              key={index}
              className="relative snap-start shrink-0 w-[90vw] sm:w-[400px] md:w-[450px] lg:w-[500px] xl:w-[550px] h-[770px] rounded-[20px] transition-transform duration-300 ease-in-out group hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[670px] object-cover rounded-2xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-[120px] left-1/2 transform -translate-x-1/2 w-[90%] max-w-[510px] h-[100px] bg-[#EFF5E1] rounded-[10px] flex items-center justify-between px-6 shadow-lg">
                <div className="flex flex-col justify-center">
                  <p className="text-gray-900 font-semibold text-[16px] w-[179px] truncate">
                    {product.title}
                  </p>
                  <p className="text-gray-600 font-normal text-[14px] mt-2 w-[83px] truncate">
                    {product.description}
                  </p>
                </div>
                <div className="w-[80px] h-[80px] rounded-[10px] bg-[#2D3B361A] flex items-center justify-center cursor-pointer hover:scale-105 transition">
                  <img
                    src={cartImg}
                    alt="Cart"
                    className="w-[30px] h-[30px] object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Banner */}
      <div className="relative w-full max-w-[1719px] h-[1146px] rounded-[30px] mx-auto overflow-hidden mt-28">
        <img
          src={backgroundImg}
          alt="Feel Beautiful"
          className="w-full h-full object-cover rounded-[30px]"
        />
        <div className="absolute bottom-32 w-full text-center px-4">
          <h2 className="font-inter font-normal text-[80px] leading-[100%] tracking-[-0.02em] text-[#FEFFF4] max-w-[1037px] mx-auto">
            Feel Beautiful Inside and Out <br /> with Every Product.
          </h2>
          <button className="mt-8 w-[180px] h-[60px] bg-[#FEFFF4] text-[#2D3B36] rounded-full font-inter text-lg font-medium transition hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-[#EFF5E1] py-20 px-6 flex flex-col lg:flex-row justify-center items-start gap-16">
        <div className="relative w-full lg:w-[850px] h-[600px] sm:h-[700px] lg:h-[900px] rounded-3xl overflow-hidden">
          <img
            src={supportImg}
            alt="Support"
            className="w-full h-full object-cover rounded-3xl"
          />
          <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 w-[306px] h-[100px] bg-[#FEFFF4] rounded-full border border-gray-300 shadow-md flex items-center px-4 gap-4">
            <div className="w-[88px] h-[88px] rounded-full border border-[#2D3B36] flex items-center justify-center overflow-hidden">
              <img
                src={iconImg}
                alt="Icon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="text-[#2D3B36] text-lg font-medium">
              24/7 We’re Here <br /> to Help You
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 max-w-full lg:max-w-[650px]">
          <div className="w-fit px-6 h-[60px] border border-[#2D3B36] rounded-full flex items-center gap-4 bg-[#FEFFF4]">
            <div className="w-[20px] h-[20px] rounded-full bg-[#2D3B36]"></div>
            <p className="text-[#2D3B36] text-base font-medium">
              Frequently Asked Question
            </p>
          </div>
          <h1 className="text-[#2D3B36] text-[32px] sm:text-[40px] lg:text-[60px] leading-[1] font-normal tracking-[-0.02em] font-inter">
            Answers to Your <br /> Skincare Questions, All <br /> in One Place.
          </h1>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#2D3B36] rounded-[5px] px-4 py-3 w-full bg-[#FEFFF4] shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left text-lg font-medium text-[#2D3B36]"
      >
        {question}
        <span className="text-2xl">{isOpen ? "-" : "+"}</span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden text-gray-700"
          >
            <p className="mt-3">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BestSellingProducts;
