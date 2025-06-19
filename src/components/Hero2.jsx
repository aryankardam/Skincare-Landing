import React from "react";
import mainImg from "../assets/hero-main.png";
import award1 from "../assets/award.png";

const Hero2 = () => {
  return (
    <>
      {/* Intro Text Section */}
      <section className="font-inter relative bg-[#EFF5E1] min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl text-center">
          <p className="text-gray-700 font-normal text-[53px] leading-[78px] tracking-[-0.035em]">
            Experience the ultimate in skincare with our expertly formulated
            products, crafted to nourish, protect, and rejuvenate your skin.
            Combining the finest natural ingredients with{" "}
            <span className="text-gray-400">
              advanced science, our collection ensures every skin type can
              achieve a radiant, healthy glow. Embrace your beauty with
              confidence every day.
            </span>
          </p>
        </div>
      </section>

      {/* Main Hero Section */}
      <section className="bg-[#EFF5E1] flex flex-col lg:flex-row justify-between gap-10 px-6 py-24 font-[Inter]">
        {/* Left Content */}
        <div className="flex-1 min-h-[1081px] flex flex-col justify-around pr-4">
          {/* Nav Card */}
          <nav className="w-[260px] h-[60px] border border-black rounded-full bg-[#EFF5E1] flex items-center px-6 space-x-4 shadow">
            <div className="w-[20px] h-[20px] bg-[#2D3B36] rounded-full"></div>
            <span className="text-gray-700 font-medium text-base">Why Our Products</span>
          </nav>

          <div>
            {/* Heading */}
          <h1 className="w-[640px] font-normal text-[60px] leading-[100%] tracking-[-0.02em] text-gray-900">
            YOUR SKIN DESERVES <br /> THE BEST CARE.
          </h1>

          {/* Paragraph */}
          <p className="w-[605px] text-gray-700 text-lg leading-relaxed tracking-[-0.02em]">
            Discover a curated collection of skincare products designed to
            rejuvenate,<br />
            protect, and pamper your skin. Explore our range crafted with love, backed <br />
            by science, and inspired by nature.
          </p>
          </div>

          {/* Feature Entries */}
          <div className="space-y-12 text-gray-800">
            {/* 01 */}
            <div className="flex items-center">
              <div
                className="w-[63px] text-[44px] font-semibold leading-none bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(180deg, #293330 0%, #FEFFF4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                01
              </div>
              <div className="ml-[21px]">
                <div className="font-semibold text-[32px] leading-[44px] text-gray-900 w-[408px]">
                  Bio Ingredients
                </div>
                <div className="text-[18px] leading-[24px] tracking-[-0.02em] text-gray-700 font-normal w-[401px] mt-1">
                  Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.
                </div>
              </div>
            </div>

            {/* 02 */}
            <div className="flex items-center">
              <div
                className="w-[63px] text-[44px] font-semibold leading-none bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(180deg, #293330 0%, #FEFFF4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                02
              </div>
              <div className="ml-[21px]">
                <div className="font-semibold text-[32px] leading-[44px] text-gray-900 w-[408px]">
                  Everything Natural
                </div>
                <div className="text-[18px] leading-[24px] tracking-[-0.02em] text-gray-700 font-normal w-[401px] mt-1">
                  Leading solutions for pure skin. The perfect solution for your skin care needs.
                </div>
              </div>
            </div>

            {/* 03 */}
            <div className="flex items-center">
              <div
                className="w-[63px] text-[44px] font-semibold leading-none bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(180deg, #293330 0%, #FEFFF4 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                03
              </div>
              <div className="ml-[21px]">
                <div className="font-semibold text-[32px] leading-[44px] text-gray-900 w-[408px]">
                  All Handmade
                </div>
                <div className="text-[18px] leading-[24px] tracking-[-0.02em] text-gray-700 font-normal w-[401px] mt-1">
                  Made with love and care. Just for you. Give your skin the tender loving care it deserves.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image & Card */}
        <div className="flex-1 flex flex-col items-center relative">
          <div className="relative">
            <img
              src={mainImg}
              alt="Main"
              className="w-[849px] h-[1081px] rounded-[30px] shadow-lg object-cover"
            />

            {/* Floating Card */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[376px] h-[100px] rounded-[200px] bg-[#EFF5E1] flex items-center shadow-md px-4 gap-4">
              <div className="w-[80px] h-[80px] bg-[#6fb59c] rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={award1}
                  alt="Award"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-800 font-medium leading-tight">
                Best Skin Care Product <br /> Award Winning
              </p>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex justify-between w-full mt-8 px-4 text-gray-800 font-semibold text-sm">
            <p>SINCE 2001</p>
            <p>LEARN MORE</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
