import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    `font-medium transition-colors duration-200 ${
      isActive
        ? "text-yellow-400 border-b-2 border-yellow-400"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap gap-8 py-4 justify-center items-center">
          <li>
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className={linkStyle}>
              Services
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" className={linkStyle}>
              Contact
            </NavLink>
          </li>

          {/* Auth buttons */}
          <li>
            <NavLink
              to="/login"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg transition"
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/signup"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-1.5 rounded-lg transition"
            >
              Sign Up
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

