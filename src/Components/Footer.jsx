import React from 'react';
import { FaGlobe, FaEnvelope, FaFacebook, FaTwitter } from 'react-icons/fa'; 


const footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    
    <footer className="bg-black text-white pt-16 pb-6 mt-12">
        <container>
            <div className=" px-4 sm:px-6 lg:px-8">
        
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-800 pb-12">
          
          {/* colum 1 */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-extrabold text-white mb-4">CS—Ticket System</h3>
            <p className="text-sm text-gray-400">
              
This project is a React-based Customer Support Zone designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using React-Toastify.
            </p>
          </div>
          
          {/*  colum 2 */}
          <div className="col-span-1 md:col-span-1 md:ml-10">
            <h4 className="text-md font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-400">Our Mission</a></li>
              <li><a href="#" className="hover:text-indigo-400">Contact Sales</a></li>
            </ul>
          </div>
          
          {/*colum 3*/}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-md font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400">Products & Services</a></li>
              <li><a href="#" className="hover:text-indigo-400">Customer Stories</a></li>
              <li><a href="#" className="hover:text-indigo-400">Download Apps</a></li>
            </ul>
          </div>
          
          {/* colum 4 */}
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-md font-semibold text-white mb-4">Information</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-indigo-400">Join Us</a></li>
            </ul>
          </div>

          {/* colum 5 */}
        
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-md font-semibold text-white mb-4">Social Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              
             
              <li>
                <a href="#" className="hover:text-indigo-400 flex items-center space-x-2">
                  <FaGlobe className="text-lg" />
                  <span>Website — Ticket System</span>
                </a>
              </li>
              
            
              <li>
                <a href="#" className="hover:text-indigo-400 flex items-center space-x-2">
                  <FaFacebook className="text-lg" />
                  <span>Facebook — Ticket System</span>
                </a>
              </li>
              
              
              <li>
                <a href="#" className="hover:text-indigo-400 flex items-center space-x-2">
                  <FaTwitter className="text-lg" />
                  <span>Twitter — Ticket System</span>
                </a>
              </li>
              
              
              <li>
                <a href="mailto:support@cst.com" className="hover:text-indigo-400 flex items-center space-x-2">
                  <FaEnvelope className="text-lg" />
                  <span>support@cst.com</span>
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        
        {/* copyright section */}
        <div className="mt-6 pt-4 text-center">
          <p className="text-xs text-white">
            &copy; {currentYear} CS — Ticket System. All rights reserved.
          </p>
        </div>
        
      </div>
        </container>
      
    </footer>
  );
};


export default footer;