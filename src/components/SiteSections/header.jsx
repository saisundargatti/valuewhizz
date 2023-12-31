import Dropdown from "./dropdown";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-grey-600 body-font h-22 md:h-20 fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap flex-col p-5 md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">ValueWhizz</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 text-medium hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="mr-5 text-medium hover:text-gray-900">
            About
          </Link>
          <Link to="/contact" className="mr-5 text-medium hover:text-grey-900">
            Contact
          </Link>
          <Dropdown />
        </nav>
      </div>
    </header>
  );
}

export default Header;
