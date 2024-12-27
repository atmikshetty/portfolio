import React from 'react';

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsScrollingDown(
        currentScrollPos > lastScrollPosition && currentScrollPos > 50
      );
      setLastScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollPosition]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      } ${lastScrollPosition > 50 ? "bg-transparent" : "bg-transparent"}`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center h-20">
        <a href="/" className="text-2xl font-bold">
          <Avatar className="w-12 h-12 sm:w-16 sm:h-16">
            <AvatarImage src={logo} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </a>

        <div className="hidden sm:flex text-xl space-x-6">
          <a href="#aboutme" className="cursor-pointer hover:text-gray-400">
            About Me
          </a>
          <a href="#skills" className="cursor-pointer hover:text-gray-400">
            Skills
          </a>
          <a href="#experience" className="cursor-pointer hover:text-gray-400">
            Experience
          </a>
          <a href="#projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#contacts" className="cursor-pointer hover:text-gray-400">
            Contact Me
          </a>
        </div>

        <div className="sm:hidden">
          {/* Mobile menu icon goes here */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
