import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <continer>
        <div className="max-w-7xl  px-20 flex justify-between items-center h-16">
        
        <div className="text-lg font-bold text-gray-800">
          CS — <span className="font-bold">Ticket System</span>
        </div>

        
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Changelog</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Download</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          <a
            href="#"
            className="ml-4 px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg shadow hover:opacity-90 transition"
          >
            + New Ticket
          </a>
        </div>

        {/* Responsive for mobile*/}
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-sm text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li><a href="#">Home</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Contact</a></li>
            <li>
              <a
                href="#"
                className="mt-2 px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center items-center text-white rounded-lg shadow hover:opacity-90 transition"
              >
                + New Ticket
              </a>
            </li>
          </ul>
        </div>
      </div>
      </continer>
    </nav>
  );
};

export default Navbar;
