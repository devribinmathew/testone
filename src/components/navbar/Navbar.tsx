import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-teal-500 p-4 mb-10 fixed w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-center"> {/* Center the logo and text */}
          <div className="flex items-center space-x-4">
            {/* Logo Image */}
            <img
              className="h-12 w-auto"
              
              src="https://res.cloudinary.com/dbpbx7tw4/image/upload/v1699854471/team_bqo4ck.png"
              alt=""
            />
            {/* Heading */}
            <span className="text-2xl text-white font-bold">USER LIST</span>
          </div>

          <div className="hidden md:flex space-x-4">
            {/* Add your other navigation items here */}
          </div>

          <div className="md:hidden">
            <button className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
