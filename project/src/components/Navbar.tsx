import Link from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="max-w-screen-xl mx-auto px-8 flex justify-between items-center h-12">
        <div className="text-xl font-bold">Logo</div>

        <div className="flex space-x-3">
          {["About Me", "Experience", "Skills", "Projects", "Contacts"].map(
            (item, idx) => (
              <Link
              key={idx}
              to={item.toLowerCase().replace(/\s+/g, "")}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-400"
              >
              {item}
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
