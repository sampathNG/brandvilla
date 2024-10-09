import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center my-3 sticky top-0 bg-white shadow-md z-10 py-3 px-10">
      <div>
        <img
          src="https://brandvilla.co.in/wp-content/uploads/2024/07/2-removebg-preview-1.png"
          alt="logo"
          width={70}
          height={70}
        />
      </div>
      {/* <div>
        <ul className="flex space-x-8 text-sm font-light">
          <li className="hover:text-gray-700">
            <Link to="/">HOME</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/features">FEATURES</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/resume">RESUME</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/testimonial">TESTIMONAL</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/clients">CLIENTS</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/pricing">PRICING</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/blog">BLOG</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link to="/contacts">CONTACTS</Link>
          </li>
        </ul>
      </div> */}
      <div className="flex space-x-5">
        <button className=" rounded-lg text-sm px-5 py-2 text-blue-700 hover:text-white bg-white hover:bg-blue-900 border border-blue-900">
          <Link to="/login">Login</Link>
        </button>
        <button className="text-white bg-blue-900 rounded-lg text-sm px-5 py-2 hover:text-blue-700 hover:bg-white border border-blue-900">
          <Link to="/signup">Signup</Link>
        </button>
      </div>
    </div>
  );
};
export default Header;
