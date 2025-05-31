import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  
  return (
    <nav className="w-full flex justify-between items-center p-6 shadow-md bg-white sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <img
          src="https://i.ibb.co/wV72Sjx/RALogo.png"
          alt="RA Logo"
          className="w-12 h-12 object-contain cursor-pointer"
          onClick={() => navigate("/")}
        />
        <span className="text-xl font-semibold cursor-pointer" onClick={() => navigate("/")}>Royal Aromas</span>
      </div>
      <ul className="flex space-x-6 text-lg font-medium">
        <li className="hover:text-gray-600 cursor-pointer" onClick={() => navigate("/")}>Home</li>
        <li className="hover:text-gray-600 cursor-pointer" onClick={() => navigate("/about")}>About</li>
        <li className="hover:text-gray-600 cursor-pointer" onClick={() => navigate("/contact")}>Contact</li>
      </ul>
    </nav>
  );
}
