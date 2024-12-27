import { useEffect, useState } from "react";

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
    <nav
      className={`fixed top-0 left-0 w-full shadow-lg z-50 transition-transform duration-300 ${
        isScrollingDown ? "-translate-y-full" : "translate-y-0"
      } ${
        lastScrollPosition > 50
          ? "bg-white/70 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-8 flex justify-between items-center h-20">
        <div className="text-2xl font-bold">Logo</div>

        <div className="flex text-xl space-x-6">
          <a href="#aboutme" className="cursor-pointer hover:text-gray-400">
            About Me
          </a>
          <a href="#experience" className="cursor-pointer hover:text-gray-400">
            Skills
          </a>
          <a href="#skills" className="cursor-pointer hover:text-gray-400">
            Experience
          </a>
          <a href="#projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a href="#contacts" className="cursor-pointer hover:text-gray-400">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
