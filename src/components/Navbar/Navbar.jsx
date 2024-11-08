import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm font-[poppins] py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-3xl font-bold text-[#2C4964]">MedBilling</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-[#2a7dd5] underline underline-offset-8">
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-[#2a7dd5] hover:underline underline-offset-8"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-[#2a7dd5] hover:underline underline-offset-8"
            >
              Services
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#2a7dd5] hover:underline underline-offset-8"
            >
              Departments
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-[#2a7dd5] hover:underline underline-offset-8"
            >
              Doctors
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-[#2a7dd5] hover:underline underline-offset-8"
            >
              Contact
            </a>
            <button
              onClick={() => {
                window.location.href = "/appointment";
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-3xl hover:bg-blue-600"
            >
              Make an Appointment
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 flex z-40">
            <div className="fixed  inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
            <div className="relative flex-1 flex flex-col w-full bg-white">
              <div className="absolute top-0 right-0 bg-red-600">
                <button
                  onClick={toggleMenu}
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Close sidebar</span>
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto flex flex-col items-center mt-8">
                <div className="flex-shrink-0 flex items-center px-4">
                  <span className="text-xl font-bold text-blue-600">MedBilling</span>
                </div>
                <nav className="mt-5 px-2 space-y-1 flex flex-col items-center">
                  <a
                    href="#home"
                    className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-800 hover:bg-gray-50"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  >
                    About
                  </a>
                  <a
                    href="#services"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  >
                    Departments
                  </a>
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  >
                    Doctors
                  </a>
                  <a
                    href="#contact"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  >
                    Contact
                  </a>
                  <button className="mt-4 w-full bg-blue-500 text-white px-4 py-2  hover:bg-blue-600">
                    Make an Appointment
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
