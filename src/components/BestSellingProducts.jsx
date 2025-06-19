import React, { useRef } from "react";
import leftbtn from "../assets/left-arrow.png";
import rightBtn from "../assets/right-arrow.png";
import cartImg from "../assets/cart.png";
import { productData } from "../data/productData";
import backgroundImg from "../assets/coverImg.png";

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
        {/* Best Selling Badge */}
        <div className="w-[290px] h-[60px] border border-black rounded-full bg-[#EFF5E1] flex items-center px-6 space-x-4 shadow-md">
          <div className="w-[20px] h-[20px] bg-[#2D3B36] rounded-full"></div>
          <span className="text-gray-700 font-medium text-base">
            Best Selling Products
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-[36px] sm:text-[48px] lg:text-[60px] leading-tight text-gray-900 text-center lg:text-left max-w-[678px]">
          Skincare That Brings Out <br /> Your Natural Radiance
        </h1>

        {/* Navigation Buttons */}
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

      {/* Bottom Full-Width Banner */}
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

      {/* Lower Navigation Buttons and Grid */}
      <div className="w-full flex flex-col items-center gap-8 px-4 mt-20">
        <h1 className="text-center font-inter font-normal text-[60px] leading-[100%] tracking-[-0.02em] text-[#2D3B36] max-w-[778px]">
          Feel Beautiful Inside and Out <br /> with Every Product.
        </h1>

        <nav className="flex flex-wrap justify-center gap-4 mt-4">
          {["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGGING"].map(
            (label, index) => (
              <button
                key={index}
                className="w-[194px] h-[60px] rounded-full bg-[#2D3B36] text-[#FEFFF4] text-[20px] font-inter font-normal transition duration-200 hover:bg-[#FEFFF4] hover:text-[#2D3B36] border border-[#2D3B36]"
              >
                {label}
              </button>
            )
          )}
        </nav>
      </div>

      {/* Final Static Product Grid */}
      <div
        className="mt-20 max-w-full px-4 mx-auto grid gap-12
        grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center"
      >
        {productData.map((product, index) => (
          <div
            key={index}
            className="relative w-full max-w-[550px] h-[770px] rounded-[20px] transition-transform duration-300 ease-in-out group hover:-translate-y-2 hover:shadow-xl"
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
              <div className="w-[80px] h-[80px] rounded-[10px] bg-[#FEFFF4] flex items-center justify-center cursor-pointer transition-colors duration-300 hover:bg-[#2d3b36ac]">
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
  );
};

export default BestSellingProducts;
