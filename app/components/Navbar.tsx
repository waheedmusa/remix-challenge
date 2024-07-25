import { Link, useLocation } from "@remix-run/react";
import logo from "/JiweStudios_White_2.png";
import searchIcon from "/search_icon.svg";
import profilePic1 from "/profile_pic1.jpg";
import alarmIcon from "/alarm_icon.svg";

export default function Navbar() {
  const location = useLocation();

  return (
    <div className="relative">
      <nav className="bg-grey text-white h-[80px] flex items-center">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center font-semibold text-[14px]">
            <img src={logo} alt="Logo" className="h-10 mr-4" />
            <Link to="/browse-games" className="mx-2 hover:text-gray-400">
              Browse Games
            </Link>
            <Link to="/game-jams" className="mx-2 hover:text-gray-400">
              Game Jams
            </Link>
            <Link to="/upload-game" className="mx-2 hover:text-gray-400">
              Upload A Game
            </Link>
            <Link
              to="/"
              className={`mx-2 hover:text-gray-400 relative ${
                location.pathname === "/"
                  ? "after:block after:h-[3px] after:bg-maroon after:absolute after:-bottom-[32px] after:left-0 after:w-full"
                  : ""
              }`}
            >
              Development Logs
            </Link>
            <Link
              to="/feed"
              className={`mx-2 hover:text-gray-400 relative ${
                location.pathname === "/feed"
                  ? "after:block after:h-[3px] after:bg-maroon after:absolute after:-bottom-[32px] after:left-0 after:w-full"
                  : ""
              }`}
            >
              Feed
            </Link>
          </div>
          <div className="flex items-center relative">
            <div className="relative inline-block">
              <input
                type="text"
                placeholder="Search for games and creators"
                className="bg-black w-[311px] h-[37px] text-[13px] text-white px-3 py-1 rounded-xl pr-10 focus:outline-none focus:ring focus:border-blue-500"
              />
              <img
                src={searchIcon}
                alt="Search Icon"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400  cursor-pointer"
              />
            </div>

            <button className="ml-4">
              <img src={alarmIcon} alt="Alarm Icon" />
            </button>
            <div className="ml-4 relative">
              <button className="flex items-center">
                <img
                  src={profilePic1}
                  alt="Profile"
                  className="h-8 w-8 rounded-full mr-2 object-cover"
                />
                <span>Anne Wanjiku</span>
                <svg
                  className="h-4 w-4 ml-1 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
