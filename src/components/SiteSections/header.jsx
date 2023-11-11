import Dropdown from "./dropdown";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-grey-600 body-font h-22 md:h-20 fixed w-full bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap flex-col p-5 md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
          <img src="/my-loan-calc/public/8658461.png" alt="EMI Calculator" />
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
