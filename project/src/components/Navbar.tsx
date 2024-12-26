const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
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
