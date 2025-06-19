import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#2D3B36] h-[750px] overflow-hidden px-4 sm:px-6 py-20 flex flex-col justify-between">
      {/* Top Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 sm:gap-20 px-4 sm:px-10 h-full">
        {/* Left Side Content */}
        <div className="flex flex-col justify-between h-full max-h-[400px]">
          <h1 className="text-[#E7E8E0] text-[36px] sm:text-[48px] lg:text-[60px] leading-none font-inter font-normal tracking-[-0.02em]">
            Join The Skincare <br />
            Community Now.
          </h1>
          <nav className="flex flex-wrap gap-4 sm:gap-6 mt-6">
            {["Facebook", "Instagram", "YouTube"].map((item, i) => (
              <button
                key={i}
                className="text-[#EFF5E1] text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal capitalize tracking-[-0.05em] hover:underline transition"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Side Contact Section */}
        <div className="flex flex-col justify-between h-full max-h-[400px] text-right w-full lg:w-auto">
          <div>
            <p className="text-[#EFF5E1] text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal">
              Get in Touch
            </p>
            <h1 className="text-[#EFF5E1] text-[28px] sm:text-[32px] lg:text-[36px] font-inter font-semibold mt-2 break-words">
              contact.skincare.com
            </h1>
          </div>
          <nav className="flex flex-wrap gap-4 justify-end mt-6">
            {["contact.skincare.com", "Privacy Policy", "Cookies Policy"].map((item, i) => (
              <button
                key={i}
                className="text-[#EFF5E1] text-[16px] sm:text-[18px] lg:text-[20px] font-inter font-normal tracking-[-0.05em] hover:underline transition"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Huge Background Text */}
      <div className="absolute bottom-[-90px] left-[-115px] w-[1920px] h-[305px] pointer-events-none">
        <h1
          className="text-[180px] sm:text-[240px] lg:text-[320px] font-bold uppercase leading-none font-inter text-[#3D4B4680]"
          style={{ lineHeight: '100%' }}
        >
          skincare
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
