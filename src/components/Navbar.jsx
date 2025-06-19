import React, { useState } from 'react'
import { Menu, X } from "lucide-react";
import cartIcon from "../assets/bag-4-svgrepo-com.png"
import userIcon from "../assets/Vector.png"
import wishlistIcon from "../assets/heart-svgrepo-com.png"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navItems = ["All Products", "serum", "sunscreen","Bundle"];

  return (
     <nav className="w-full fixed top-0 left-0 z-50 bg-[#EFF5E1] text-[#2D3B36] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="text-xl font-semibold tracking-wide">
            SKINCARE
          </div>

          {/* Nav links - Desktop */}
          <div className="hidden md:flex space-x-8 font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#6D6D6D] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side - images */}
          <div className="hidden md:flex items-center space-x-4">
            <img
              src={cartIcon}
              alt="Cart"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-300"
            />
            <button className="cursor-pointer hover:scale-110 transition-transform duration-300">Cart(1)</button>
             <img
              src={wishlistIcon}
              alt="User"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-300"
            />
            <img
              src={userIcon}
              alt="User"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Mobile menu icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#F6F7EE] px-6 py-4 space-y-4 text-center font-medium">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block hover:text-[#6D6D6D]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="flex justify-center gap-6 pt-2">
            <img src={cartIcon} alt="Cart" className="w-6 h-6" />
            <img src={userIcon} alt="User" className="w-6 h-6" />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
