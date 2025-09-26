import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
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
      </div>
    </nav>
  );
};

export default Navbar;
