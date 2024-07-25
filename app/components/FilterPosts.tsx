import { useState } from "react";

export default function FilterPosts() {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { id: 1, text: "Major Update", icon: "/tag_icon.svg" },
    { id: 2, text: "Postmorterm", icon: "/tag_icon.svg" },
    { id: 3, text: "Game Design", icon: "/tag_icon.svg" },
    { id: 4, text: "Tech Discussion", icon: "/tag_icon.svg" },
    { id: 5, text: "Tutorials", icon: "/tag_icon.svg" },
    { id: 6, text: "Announcements", icon: "/tag_icon.svg" },
    { id: 7, text: "Marketing", icon: "/tag_icon.svg" },
  ];
  return (
    <div className="w-1/4 h-[414px] bg-grey p-4">
      <h1 className="text-darkWhite text-center">FILTER POSTS</h1>
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-vLightGrey flex items-center ml-5 mt-5"
        >
          <p className="text-vLightGrey">Platform</p>
          <svg
            className={`ml-2 h-4 w-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
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
        {isOpen && (
          <ul className="absolute mt-2 bg-gray-300 w-full p-2 rounded shadow-lg">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex items-center text-vLightGrey p-2 hover:bg-gray-400 rounded"
              >
                <img src={item.icon} alt={item.text} className="h-6 w-6 mr-2" />
                <span className="cursor-pointer">{item.text}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
