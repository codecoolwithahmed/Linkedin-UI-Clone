import {
  FaHome,
  FaUsers,
  FaBriefcase,
  FaComments,
  FaBell,
  FaEllipsisH,
  FaSearch,
  FaLinkedinIn,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-evenly shadow-md bg-white w-full px-6">
      <div className="flex items-center space-x-4">
        <FaLinkedinIn className="w-8 h-8 rounded bg-blue-600 p-1 text-white" />
        <div className="relative">
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-1 w-64 border rounded bg-gray-100"
          />
        </div>
      </div>
      <div className="flex items-center space-x-3 text-gray-700">
        {/* Home Icon */}
        <div className="flex flex-col items-center cursor-pointer hover:text-black p-2 rounded-md transition">
          <FaHome className="text-xl" />
          <span className="text-xs font-semibold mt-1">Home</span>
        </div>

        {/* My Network Icon */}
        <div className="flex flex-col items-center cursor-pointer hover:text-black p-2 rounded-md transition">
          <FaUsers className="text-xl" />
          <span className="text-xs font-semibold mt-1">My Network</span>
        </div>

        {/* Jobs Icon */}
        <div className="flex flex-col items-center cursor-pointer hover:text-black p-2 rounded-md transition">
          <FaBriefcase className="text-xl" />
          <span className="text-xs font-semibold mt-1">Jobs</span>
        </div>

        {/* Messaging Icon */}
        <div className="flex flex-col items-center cursor-pointer hover:text-black p-2 rounded-md transition">
          <FaComments className="text-xl" />
          <span className="text-xs font-semibold mt-1">Messaging</span>
        </div>

        {/* Notifications Icon */}
        <div className="flex flex-col items-center cursor-pointer hover:text-black p-2 rounded-md transition">
          <FaBell className="text-xl" />
          <span className="text-xs font-semibold mt-1">Notifications</span>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col space-x-1 cursor-pointer hover:text-black px-2 py-1 rounded-md transition border-r">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-xs font-semibold">Me</span>
        </div>

        {/* For Business Section */}
        <div className="flex flex-col items-center cursor-pointer hover:text-black rounded-md transition">
          <FaEllipsisH className="text-lg" />
          <span className="text-xs font-semibold">For Business</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
